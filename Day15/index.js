function solution(n) {
  var answer = [[]];
  return answer;
}

function hanoi(n, from, to) {
  if (n >= 1) {
    const temp = 6 - from - to;
    hanoi(n-1, from, temp);
    console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
    hanoi(n-1, temp, to);
  }
}

//--- 실행 ---
hanoi(4, 1, 3); // 4개의 원판을 1번기둥에서 3번기둥으로 모두 옮기자