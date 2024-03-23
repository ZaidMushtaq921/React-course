import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { UsedId } = useParams();
  return (
    <div className="bg-gray-600 text-3xl p-4 text-white   border  m-4 rounded-md flex justify-center items-center">
      User : {UsedId}
    </div>
  );
}

export default User;
