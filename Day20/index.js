function solution(clothes) {
  const hashmap = {};
  let answer = 1;
  while (clothes.length > 0) {
    const option = clothes.shift();
    const key = option[1];

    if (hashmap.hasOwnProperty(key)) {
      hashmap[key] += 1;
    } else {
      hashmap[key] = 1;
    }
  }
  for (const key in hashmap) {
    answer *= (hashmap[key] + 1);
  }
  return answer - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));