import React from "react";

export default function ReviwDetails({ params }) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Reviw Details Page {params.reviewsId}
      </h1>
    </div>
  );
}
