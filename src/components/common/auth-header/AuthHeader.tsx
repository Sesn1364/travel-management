import type { AuthHeaderProps } from "./authHeaderType";


const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-2">
        {title}
      </h1>

      <p className="text-gray-300 text-sm">
        {description}
      </p>
    </div>
  );
};

export default AuthHeader;