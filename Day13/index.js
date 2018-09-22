function solution(n)
{
    var answer = 0;
    do {
        const last = n % 10;
        answer += last;
        n = (n-last)/10;
    } while (n > 0);
    return answer;
}