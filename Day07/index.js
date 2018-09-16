function solution(n) {
    var result = String(n)
        .split('')
        .sort((a, b) => b - a)
        .reduce((val, total, index) => (val + total), 0);
    return parseInt(result);
}

function solution(n) {
    var result = String(n)
        .split('')
        .sort((a, b) => b - a)
        .join('');
    return parseInt(result);
}

function test (target, sibling) {
    if (!sibling) {
        return target;
    }
    console.log(target, sibling);
}

function solution(n) {
    var numberToString = n.toString();
    var stringArray = numberToString.split('');
    var result = [];
    console.log(stringArray);
    for (var i = 0; i < stringArray.length; i++) {
        console.log(stringArray[i]);
        // test (numberToString[i], numberToString[i+1]);
    }
}

// function solution(n) {
//     var r = 0, e = 0, arr = [];
//
//     do {
//         e = n%10;
//         console.log(e);
//
//         // 정렬
//         if (arr.length == 0) {
//             arr.push(e);
//         } else {
//             for (var i=0, len=arr.length; i<len; i++) {
//                 if (arr[i] <= e) {
//                     arr.splice(i,0,e); break;
//                 }
//                 if (i == len-1) {
//                     arr.push(e);
//                 }
//             }
//         }
//     } while (n = Math.floor(n/10), n>0);
//
//     return parseInt(arr.join(""));
// }
solution(118372)


// function solution(n) {
//     var answer = 0;
//     var arr=[];
//     var i;
//     for(i=0;i<10;i++)
//     {
//         if(n/Math.pow([10],[i])<1)
//         {
//             break;
//         }
//     }
//     //i는 자릿수+1을 나타낸다
//     for(var j=i-1;j>=0;j--)
//     {
//         var x=Math.pow([10],[j]);
//         var num=parseInt(n/x);
//         n-=num*x;
//         arr[i-1-j]=num;
//     }
//     arr.sort();
//     arr.reverse();
//     for(var j=i-1;j>=0;j--)
//     {
//         var x=Math.pow([10],[j]);
//         answer+=arr[i-1-j]*x;
//     }
//     return answer;
// }
// solution(134);


// within21@mz.co.kr
// 123qwe!@#
//
//     bit.ly/2Q2l9ZB