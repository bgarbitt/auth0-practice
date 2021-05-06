import xhr from "./xhr";

const BASE_PATH = process.env.REACT_APP_API_URL;
const PROFILE_PATH = "/User";

export default {
  getProfile() {
    return xhr<ProfileResult>(`${PROFILE_PATH}`, {
      baseURL: BASE_PATH,
    });
  },
};

type ProfileResult = {
  test: string;
};
