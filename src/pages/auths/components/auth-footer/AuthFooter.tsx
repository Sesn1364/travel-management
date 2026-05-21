// AuthFooter Component

import { Link } from "react-router-dom";
import type { AuthFooterProps } from "./AuthFooterType";

const AuthFooter = ({ text, linkText, to }: AuthFooterProps) => {
  return (
    <p className="text-center text-sm text-gray-300 mt-6">
      {text}
      <Link
        to={to}
        className="
          text-cyan-400
          hover:text-cyan-300
          hover:underline
          ml-1
          transition-colors
        "
      >
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFooter;