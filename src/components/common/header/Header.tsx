// Auth Header Component

import type { HeaderProps } from "./HeaderType";

const AuthHeader = ({
  title,
  description,
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: HeaderProps) => {
  return (
    <div className={containerClassName}>
      <h1 className={titleClassName}>{title}</h1>

      <p className={descriptionClassName}>{description}</p>
    </div>
  );
};

export default AuthHeader;
