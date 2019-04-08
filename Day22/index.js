function solution(participant, completion) {
  const hashmap = {};
  let result = "";
  for (let i = 0; i < completion.length; i++) {
    const key = completion[i];
    if (!hashmap[key]) {
      hashmap[key] = 1;
    } else {
      hashmap[key] += 1;
    }
  }
  for (let i = 0; i < participant.length; i++) {
    const key = participant[i];
    if (!hashmap[key]) {
      result = participant[i];
      break;
    } else {
      hashmap[key] -= 1;
    }
  }
  return result;
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
