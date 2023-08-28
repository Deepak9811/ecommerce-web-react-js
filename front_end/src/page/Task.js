import React, { useEffect, useState } from "react";

const Task = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   setCount(count + 1);
    // }, 1000);

    //==== convert array to object

    // const arr = ["a", "b", "c"];

    // let obj = arr.reduce((a, it, i) => ({ ...a, [it]: it }), {});

    // console.log(obj);

    // ======= Array.from()

    // console.log(Array.from("hello"));
    // console.log(Array.from(new Set([1, 2, 1])));

    // ======= Double number

    // console.log(Array.from([1, 2, 3], (it) => it * 2));

    const arr = [1, 2, 3, 4, 5];

    console.log(arr.map((item) => item * item));
    console.log(arr.map((item) => item + item));
  }, []);
  // console.log(count);

  return <div>Task</div>;
};

export default Task;
