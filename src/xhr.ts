interface ApiFetcherInit extends RequestInit {
  baseURL?: string | null;
  body?: any;
}

const createApiFetcher = () => <T>(
  url: RequestInfo,
  opts?: ApiFetcherInit
): Promise<T> => {
  const token = localStorage.getItem("token") || null;
  const { baseURL, ...otherProps } = opts || {};

  const combinedFetchOpts = Object.assign(
    {
      method: "get",
      headers: {
        "Cache-Control": "no-cache,no-store,must-revalidate,max-age=-1,private",
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    },
    otherProps
  );

  if (combinedFetchOpts.body) {
    combinedFetchOpts.body = JSON.stringify(combinedFetchOpts.body);
  }

  const request = new Request(`${baseURL}${url}`, combinedFetchOpts);

  return fetch(`${baseURL}${url}`, combinedFetchOpts)
    .then(parseBody)
    .then(({ response, body }) => {
      if (!response.ok) {
        throw new HttpError(request, response, body);
      }

      return body;
    });
};

const parseBody = (response: Response) => {
  const contentType = response.headers.get("content-type");
  const hasJson = contentType?.includes("application/json");
  const hasBlob = contentType?.includes("application/pdf");

  if (!(hasJson || hasBlob)) {
    return { response, body: null };
  }

  if (hasBlob) {
    return response
      .blob()
      .then((body) => ({ response, body }))
      .catch(() => ({ response, body: null }));
  }

  return (
    response
      .json()
      .then((body) => ({ response, body }))
      // catch errors where response JSON has a syntax error,
      // or there was no JSON in the response body.
      .catch(() => ({ response, body: null }))
  );
};

export class HttpError extends Error {
  public constructor(
    public request: Request,
    public response: Response,
    public body: {
      errors?: ApiFormError[];
      message?: string;
      meta?: any;
    } | null
  ) {
    super(response.statusText);
    this.request = request;
    this.response = response;
    this.body = body;
  }
}

type ApiFormError = {
  source: string;
  details: string | string[];
};

const apiInstance = createApiFetcher();

const xhr = <T>(url: string, options: ApiFetcherInit = {}): Promise<T> =>
  apiInstance(url, options);

export default xhr;
