function solution(a, b) {
    // 1월 1일이 금요일부터 시작, weekdaysArray 에서는 금요일부터 시작하도록 배열 셋팅
    const weekdaysArray = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    // 문제에서 2016년을 윤년이라 했기에 2월은 날짜를 29일로 저장
    const daysArray = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;
    for (let i = 0; i < a-1; i++) {
        totalDays += daysArray[i];
    }
    const weekdayIndex = (totalDays + b - 1)%7;
    return weekdaysArray[weekdayIndex];
}
