import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--primary)] gap-y-4">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-4xl font-semibold">Oops, This Page Could Not Be Found.</h2>
      <p className="font-thin">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    </div>
  );
}

export default ErrorPage