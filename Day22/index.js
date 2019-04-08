function solution(participant, completion) {
  const hashmap = {};
  let result = "";
  for (let i = 0; i < participant.length; i++) {
    const key = participant[i];
    if (hashmap[key] > 1) {
      hashmap[key] += 1;
    } else {
      hashmap[key] = 1;
    }
  }
  for (let i = 0; i < completion.length; i++) {
    if (hashmap[completion[i]]) {
      hashmap[completion[i]] -= 1;
    }
    result = completion[i];
  }
  return result;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
