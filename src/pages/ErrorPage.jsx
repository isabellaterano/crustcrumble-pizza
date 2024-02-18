import { useRouteError } from "react-router-dom";
import LinkButton from "../components/LinkButton";

function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Something went wrong </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
