// Auth Header Component

import type { AuthHeaderProps } from "./AuthHeaderType";

const AuthHeader = ({
  title,
  description,
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: AuthHeaderProps) => {
  return (
    <div className={containerClassName}>
      <h1 className={titleClassName}>{title}</h1>

      <p className={descriptionClassName}>{description}</p>
    </div>
  );
};

export default AuthHeader;
