import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>THis is an Error Page 404 not found</h1>
      <h2>
        {error.status}:{error.statusText}
      </h2>
      <h2>{error.data}</h2>
    </div>
  );
}

export default Error;
