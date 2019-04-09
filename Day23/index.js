function solution(genres, plays) {
  let result = [];
  const rankGenres = [];
  const hashmap = {};

  let targetPlayCount = 0;

  for (let i = 0; i < plays.length; i++) {
    const hashmapKey = genres[i];
    if (!hashmap[hashmapKey]) {
      // 해당 장르의 hashmap의 key가 없을 경우, 배열로 초기화 해준다.
      hashmap[hashmapKey] = [];
      if (targetPlayCount < plays[i]) {
        rankGenres.unshift(hashmapKey);
      } else {
        rankGenres.push(hashmapKey);
      }
    }

    if (hashmap[hashmapKey].length > 1) {
      if (plays[i] > hashmap[hashmapKey][0]) {
        hashmap[hashmapKey].unshift(plays[i]);
      }
      continue;
    } else {
      if (!hashmap[hashmapKey][0]) {
        hashmap[hashmapKey].push(plays[i]);
      } else {
        if (hashmap[hashmapKey][0] > plays[i]) {
          hashmap[hashmapKey].push(plays[i]);
        } else {
          hashmap[hashmapKey].unshift(plays[i]);
        }
      }
    }
    // if (targetPlayCount > plays[i]) {
    //   hashmap[hashmapKey].push(i)
    // } else {
    //   hashmap[hashmapKey].unshift(i);
    // }
    // targetPlayCount = plays[i];
  }
  console.log(rankGenres);
  console.log(hashmap);
  // console.log("================");
  for (let i = 0; i < rankGenres.length; i++) {
    const hashmapKey = rankGenres[i];
    // if (hashmap[hashmapKey].length > 2) {
    //   hashmap[hashmapKey].pop();
    // }
    result = result.concat(hashmap[hashmapKey]);
  }
  // console.log(result);
  return result;
}
// solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]); // [4, 1, 3, 0]
solution(["classic", "pop", "classic", "classic", "pop"], [500, 300, 500, 1800, 400]); // [3, 0, 4, 1]
// solution(["a", "b", "b", "b", "a"], [500, 600, 150, 800, 2500]);
// solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);