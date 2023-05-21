import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="error-page">404 Error Found !!!</h2>
      <Link to="/" className="link">
        Back to the Homepage...
      </Link>
    </div>
  );
}
