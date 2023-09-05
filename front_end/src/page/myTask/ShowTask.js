import React from "react";

import { useSelector } from "react-redux";

const ShowTask = () => {
  const task = useSelector((state) => state.task);
  console.log("data get :->> ", task);
  return (
    <div className="p-3 md:p-4 ">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <ul className="list-disc">
          <li>Name = {task.email}</li>
          <li>Number = {task.number}</li>
        </ul>
      </div>
    </div>
  );
};

export default ShowTask;
