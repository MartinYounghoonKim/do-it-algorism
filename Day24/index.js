function solution(priorities, location) {
  const hashMap = setHashMap(priorities);
  function filter (arr) {
    const head = arr.shift();
    const isHighestPriority =
  }
}

const setHashMap = (arr) => arr.map((value, index) => ({ index, value }));

function setHighestPriority (arr) {
  const priorities = [...arr];

  function sort (priorities) {
    const first = priorities.shift();
    const isHighestPriority = priorities.every(v => v < first);
    if (isHighestPriority) {
      priorities.unshift(first)
      return priorities;
    } else {
      priorities.push(first);
      sort(priorities);
    }
  }
  sort(priorities);
  return priorities;
}

solution([2,1,3,2]);