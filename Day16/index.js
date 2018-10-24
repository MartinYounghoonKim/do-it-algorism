let top = -1;
function move(from, to){
  console.log(`${from}에서 ${to} 로 이동한다.`);
}

function hanoi (n, from, by, to) {
  const arr = [];
  let temp = 1;
  while (temp > 0) {
    while (n >1) {
      arr.push(to);
      arr.push(to);
      arr.push(by);
      arr.push(from);
      arr.push(n);
      n--;
      arr.push(to);
      to = by;
      by = arr.pop();
    }
    move(from, to);
    if (arr.length -1 > 0) {
      n = arr.pop();
      from = arr.pop();
      by = arr.pop();
      to = arr.pop();
      move(from, to);
      n --;
      arr.push(from);
      from = by;
      by = arr.pop();
    } else {
      temp = 0;
    }
  }
}

hanoi (3, 1, 2, 3);


