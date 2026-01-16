import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import "../../css/errorPage.css";

type ErrorHandler = {
  status?: number;
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError();
  const normalized: ErrorHandler = isRouteErrorResponse(error)
    ? { status: error.status, statusText: error.statusText, message: error.data }
    : (error as ErrorHandler) || {};

  if (process.env.NODE_ENV !== "production") {
    // Helpful during development without spamming production logs.
    console.error(error);
  }

  return (
    <div id="error-page">
      <div className="container">
        <h1 className="errorTitle">Something went wrong.</h1>
        <p className="errorP">
          {normalized.status === 404
            ? "We couldn't find that page."
            : "An unexpected error has occurred."}
        </p>
        <p className="errorStatus">
          <i>
            {normalized.status
              ? `${normalized.status} ${normalized.statusText || ""}`.trim()
              : normalized.message || "Please try again later."}
          </i>
        </p>
        <Link className="errorBackHome" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}