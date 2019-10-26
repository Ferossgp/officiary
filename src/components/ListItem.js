import React from "react";
import { Link } from "react-router-dom";

function HomeView({name, id, value}) {
  return (
    <Link to={`/profile/${id}`}>
      <div className="py-4 px-6 border rounded my-2 flex font-bold justify-between">
        <span>{name}</span>
        <span>{value}</span>
      </div>
    </Link>
  );
}

export default HomeView;