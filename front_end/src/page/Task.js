import React, { useEffect, useState } from "react";

const Task = () => {
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

    let arr = [5, 7, 1, 1, 2, 2, 3, 4, 5];
    // console.log(arr.map((item) => item * item));
    // console.log(arr.map((item) => item + item));
    // ====== reduce the data

    // arr.length = 2;
    // console.log(arr);

    // ====== Sum of arr
    // console.log(arr.reduce((total, prev) => total + prev));
    // duplicate value
    // arr = new Set(arr);
    // console.log([...arr]);
    // ========= Arrange array Ascending order
    // arr.sort((a, b) => a - b);
    // console.log(arr);
    // ========= Arrange array Descending order
    // arr.sort((a, b) => b - a);
    // console.log(arr);
    // ====== Coma-separated
    // let x = [10];
    // x = (x++, x);
    // console.log(x);

    // ====== Find the Second Largest Number in an Array:

    // arr = arr.sort((a, b) => b - a);
    // console.log(arr[0]);

    // console.log(new Set(arr.sort((a, b) => a - b)));

    // console.log(Array.from(arr, (it) => it * 5).sort((a, b) => a - b));
    // console.log(arr.reduce((x, y) => x + y));
    // console.log(arr.map((x) => x + x));

    // console.log(new Set(arr));

    //===== Rotate Array to the Right by K Steps:

    // function rotateArray(arr, k) {
    //   const n = arr.length;

    //   return [...arr.slice(n - k), ...arr.slice(0, n - k)];
    // }

    // const array = [1, 2, 3, 4, 5, 6, 7, 8];

    // console.log(rotateArray(array, 3));

    // =========Find Common Elements in Two Arrays:

    //   function find(arr, arr2) {
    //     return arr.filter((x) => arr2.includes(x));
    //   }
    //   const arr2 = [1, 2, 3, 4];
    //   console.log(find(arr, arr2));

    //   console.log(arr.map((x) => x + x));

    //======= Find Missing Number in Array:

    // function findMissing(arr) {
    //   const n = arr.length + 1;
    //   const expectedSum = (n * (n + 1)) / 2;
    //   const actualSum = arr.reduce((acc, num) => acc + num, 0);
    //   console.log(actualSum, expectedSum, n);
    //   return expectedSum - actualSum;
    // }

    // const a = [1, 2, 3, 4, 6, 7, 8];
    // console.log(findMissing(a));

    // ========= Move Zeroes to the End of Array:

    function moveZero(arr) {
      const nonZero = arr.filter((num) => num != 0);
      console.log(nonZero);
      const zeroes = Array(arr.length - nonZero.length).fill(0);
      return [...nonZero, ...zeroes];
      console.log(zeroes);
    }
    const a = [0, 10, 1, 2, 3, 0, 4, 6, 7, 8];

    console.log(moveZero(a));
  }, []);

  return <div>Task</div>;
};

export default Task;
