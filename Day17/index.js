<<<<<<< HEAD
function solution(n) {
  let a = 0;
  let b = 1;
  let temp = 0;
  for(let i = 1; i < n; i++) {
    temp = a % 1234567;
    a = b;
    b += temp % 1234567;
  }
  return b % 1234567;
}

solution(9);
=======
function move(from, to){
  console.log(`${from}에서 ${to} 로 이동한다.`);
}

function solution (n) {
  const result = [];
  function hanoi (n, from, to) {
    const arr = [];
    let temp = 1;
    let by = 6-from-to;
    while (temp > 0) {
      while (n >1) {
        arr.push(to);
        arr.push(by);
        arr.push(from);
        arr.push(n);
        n--;
        arr.push(to);
        to = by;
        by = arr.pop();
      }
      result.push([from, to]);
      // move(from, to)
      if (arr.length -1 > 0) {
        n = arr.pop();
        from = arr.pop();
        by = arr.pop();
        to = arr.pop();
        result.push([from, to]);
        // move(from, to)
        n --;
        arr.push(from);
        from = by;
        by = arr.pop();
      } else {
        temp = 0;
      }
    }
  }
  hanoi (n, 1, 3);
  return result
}


>>>>>>> a72de34d3e83893f5fd0b4117812496f35ea9693
