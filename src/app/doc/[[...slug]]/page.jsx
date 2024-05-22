import React from "react";

export default function Docs({ params }) {
  if (params.slug?.length == 2) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
      </div>
    );
  } else if (params.slug?.length == 1) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          Viewing docs for feature {params.slug[0]}
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Docs Home Page</h1>
      </div>
    );
  }
}
