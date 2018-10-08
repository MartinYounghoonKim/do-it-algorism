function solution(n) {
  var answer = [[]];
  return answer;
}

function hanoi(n, from, to) {
  if (n >= 1) {
    const temp = 6 - from - to;
    hanoi(n-1, from, temp);
    console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
    console.log(1);
    // hanoi(n-1, temp, to);
  }
}

//--- 실행 ---
// hanoi(2, 1, 3); // 4개의 원판을 1번기둥에서 3번기둥으로 모두 옮기자

function test (n, from, by, to) {

  if (n === 1) {
    // 원판이 한개 일 경우에는
    move(from, to, n);
  } else {
    // test(n-1, from, to, by);
    // move(n, from, to);
    test(n-1,from,to,by);
    move(from,to,n);
    test(n-1,by,from,to);
  }

}

function move (a, b, n) {
  console.log(`${n} 번째 원반은 ${a} 에서 ${b} 로 이동한다.`)
}

test (2, 1, 3, 2);