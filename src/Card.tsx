import clsx from "clsx";
import { FunctionComponent, ReactNode } from "react";

type CardProps = {
  /** Adds a title on top of the card */
  title?: ReactNode;
  className?: string;
  showDividers?: boolean;
  isLoading?: boolean;
};

const Card: FunctionComponent<CardProps> = ({
  title,
  className,
  children,
  showDividers = true,
  isLoading,
}) => (
  <div
    className={clsx(
      "bg-gray-300 shadow rounded-md overflow-hidden",
      isLoading && "py-4",
      className
    )}
  >
    {title && (
      <h3 className="px-6 py-4 text-base font-medium leading-6 text-gray-900 border-b bg-cool-gray-50 border-gray-200">
        {title}
      </h3>
    )}
    <div className={clsx("px-6", { "divide-y divide-gray-400": showDividers })}>
      {isLoading ? null : children}
    </div>
  </div>
);

export default Card;
