let schedule = {};

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false
