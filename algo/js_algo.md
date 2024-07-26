* 현재 repo 주소: https://github.com/paullabkorea/Algorithm-walk-with-wenivs
* 이력서 템플릿: https://paullabworkspace.notion.site/Figma-bfa32213fc244db9b31bb8486a479ee6?pvs=4

# 1. 자료구조와 알고리즘, 코딩테스트
* 자료구조(자료를 어떻게 담는가?): array, object, map, set, 싱글 링크드 리스트, 더블 링크드 리스트, 트리, 해쉬 등
* 알고리즘(문제를 어떻게 풀 것인가?): 애라토스테네스의 체, 그리디 알고리즘, 투 포인터, 슬라이딩 윈도우 등 
* 자료구조 + 알고리즘 => 문제 풀이 능력을 보겠다! => 코딩테스트
* 추천 서적
    * 학문적 접근: The Art of Computer Programming(도널드 커누스)
    * 코딩테스트 접근: 파이썬 알고리즘 인터뷰(박상길)
    * 자바스크립트 코딩 테스트 책: 코딩 테스트 합격자 되기 - 자바스크립트 편
* 요즘은 ChatGPT가 이러한 책의 역할을 하고 있습니다. 그래서 https://100.jsalgo.co.kr/ 와 같은 곳에서 문제를 풀어보시면서 자료구조와 알고리즘을 설명해달라고 ChatGPT에게 요청하시면서 공부하시는 방법이 더 효율적입니다.

## 1.1 코테 전 준비사항
1. 회사와 경향 분석!
    * 코테 보는 회사와 회사 유형을 정리하세요.
    * [코딩테스트 경향 정리](https://paullabworkspace.notion.site/446d03bf38df42e19d9fedcf5ceaec61?pvs=4) 해두었습니다.
    * 분석 서비스를 통해 [출제 경향](https://algoview.co.kr/)도 한 번 정리하세요.
2. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
    * 사용 가능 라이브러리 미리 확인 등
    * 대부분 numpy나 pandas가 사용 가능하지만 간혹가다 라이브러리 제한이 있는 곳도 있습니다. numpy는 python보다 대부분의 경우 속도가 빠릅니다. 크기에 따라 다르지만 100000개 이상의 배열의 연산의 경우 50배 이상의 성능을 보입니다. 순열과 조합은 itertools를 사용하시면 python 아주 쉽게 풀 수 있습니다.
2. 언어 선택(속도 : C++, 풀이 : Python)
    * 요즘은 Lv이 높은 경우가 아니면 속도 체크를 거의 하지 않는 추세입니다.
    * 다른 언어가 메인이셔도 Python 추천 드립니다. 코딩테스트만을 위해 Python을 새로 공부하시는 분들이 많습니다.
3. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
    * 코드 스니펫을 만들어둔 레파지토리 fork - [제주코딩베이스캠프](https://github.com/paullabkorea/programmersLv0)
    * 감독관이 없는 경우 [스니펫](https://github.com/paullabkorea/programmersLv0/blob/main/Solution.md)에서 Ctrl + F해서 문제를 풉니다.
    * 시험 전 스니펫을 만들지 말고 하루 한 문제씩(저도 매일 한 문제씩 풉니다.) 또는 버겁다면 일주일에 2 ~ 3문제.
4. 유용한 라이브러리 정리! (collections, itertools(순열, 조합), functools, re, bisect, math 등) - [제주코딩베이스캠프](https://www.youtube.com/channel/UC4GnvNKtuJ4cqWsYjxNxAEQ) 유튜브 채널 확인
    * 유용한 알고리즘 GitHub repo를 검색하고 fork를 떠두는 것도 좋습니다.
    * 면접질문 repo등 다양한 목적에 repo가 있습니다.
5. 기억해두자! 예외처리!
    * 예외처리와 테스트 케이스중 통과 못하는 케이스들은 문제를 많이 풀어보셔야 합니다.
    * 길이가 0이거나 0으로 나누거나 등
6. 속도개선
    * class로 구현
    * 메서드 대신 슬라이싱 구현(슬라이싱은 C로 구현되어 있어 메서드보다 통상 8배정도 빠릅니다.)하세요. 다만 공간복잡도가 상승할 수 있습니다. (리스트.reverse(), reversed(리스트), 리스트[::-1])
    * for문 대신 list comprehension을 사용하세요. 더 빠릅니다.
    * 재귀는 느립니다. 최후의 수단으로 사용하세요.
7. ChatGPT, Copilot 활용
    * 감독관이 없고 검색이 가능하다면 ChatGPT를 활용하세요.(ChatGPT가 활용 불가인 코테도 있습니다. 다만 활용 불가인데 검색이 가능할 경우 형평성 문제가 생겨요.)
    * ChatGPT 나오고 화이트보드 테스트가 많아졌습니다.

## 1.2 문제 유형과 출제 방식
* 5 ~ 6시간, 6 ~ 7문제
    * 구현 테스트의 경우에는 짧으면 1일 길면 4 ~ 5일 주는 경우도 있습니다.
* 30분씩 4문제, 2시간씩 2문제
* 2 ~ 3시간, 3 ~ 5문제
* 30분씩 3 ~ 4문제, 변별력 1문제
* 단기 공부로 붙을 수 있는 코테와 붙기 힘든 코테 경향 정리
* 문제 유형 분석 관련 글
    * [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
    * [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
    * [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
        * 요구사항 구현 알고리즘(33%)
        * 그리디 알고리즘(20%)
        * 너비우선탐색, 깊이우선탐색(20%)
        * 정렬(8%)
        * 다이나믹 프로그래밍, 최단경로, 이진 탐색 등
* 전체 문제 유형
    * 알고리즘
        * 정렬
        * 이진 검색
        * 비트 연산
        * 슬라이딩 윈도우, 페이지 교체
        * 분할 정복
            * 그리디 알고리즘
            * 다이나믹 프로그래밍
    * 자료구조
        * 선형
            * 스택과 큐, 데크
            * 연결리스트, 해시 테이블
        * 비선형
            * 그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
            * 트리
                * 힙
                * 트라이

## 간단한 코드 스니펫
```js
// 1. python에서 유용한 코드를 js 모듈화

// 1.1. 묶음
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
// 제약조건: a가 map을 사용하기 위해 array여야 합니다.

// 1.2. 범위안에 수 생성
const range = (start, end) => Array.from({length: end - start + 1}, (_, i) => start + i);

Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
Array.from({'one':10, 'two':20}, (v, i) => i); // [0, 1, 2, 3, 4]
Array.from({1, 2, 3});
Array.from([1, 2, 3]);
Array.from(new Set([1, 2, 3]));
Array.from(new Map([[1, 2], [3, 4]]));

Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
Array.from('hello', x => x + x); // ['hh', 'ee', 'll', 'll', 'oo']

// 1.3. 평평하게 만들기(평탄화)
// [1, [2, [3, [4]]]] => [1, 2, 3, 4]
const flatten = (arr, depth = Infinity) => arr.flat(depth);

[1, [2, [3, [4]]]].flat()
[1, [2, [3, [4]]]].flat(1)
[1, [2, [3, [4]]]].flat(2)
[1, [2, [3, [4]]]].flat(3)
[1, [2, [3, [4]]]].flat(Infinity)


// 2. js에서 사용할 유용한 코드
Array(5).fill(0); // [0, 0, 0, 0, 0]
Array(5).fill(0).map((v, i) => i); // [0, 1, 2, 3, 4]
Array(5).fill(0).map((v, i) => i+1); // [1, 2, 3, 4, 5]
'.'.repeat(5)
'.'.repeat(5).split('.') // 권하진 않습니다.
Array.from('ab'.repeat(5))

Infinity
-Infinity

Math.ceil(1.1); // 올림
Math.floor(1.1); // 내림
Math.max(1, 2, 3, 4, 5);
Math.max([1, 2, 3, 4, 5]);
Math.max(...[1, 2, 3, 4, 5]); // 이렇게 종종 사용합니다.

parseInt('1234', 10); // 10진수 1234를 10진수로 변환
parseInt('1001', 2); // 2진수 1001을 10진수로 변환
parseInt('12aa34.abc'); // 12까지 변환, 안전합니다.

Math.floor(10 / 3);
~~(10 / 3) // 안전한 parseInt 연산을 사용하세요.
10 / 3 | 0 // 안전한 parseInt 연산을 사용하세요.
10 / 3 << 0 // 안전한 parseInt 연산을 사용하세요.

2 << 2 // 8
// step1 왼쪽에 있는 2를 2진수로 변환합니다. 10이 됩니다.
// step2 10을 왼쪽으로 2칸 이동합니다. 1000이 됩니다.
// step3 1000을 10진수로 변환합니다. 8이 됩니다.

5 << 3
// step1 왼쪽에 있는 5를 2진수로 변환합니다. 101이 됩니다.
// step2 101을 왼쪽으로 3칸 이동합니다. 101000이 됩니다.
// step3 101000을 10진수로 변환합니다. 40이 됩니다.

(1234.56789).toFixed(2); // 1234.57
(1234.56789).toFixed(0); // 1235
(1234.56789).toFixed(4); // 1234.5679
(1234.56789).toFixed(6); // 1234.567890

// match는 문자열에서 정규식을 사용할 수 있습니다.
'2345678910111213'.match(/1/g) // g는 global이에요. 전역에서 찾겠다는 것입니다. 앞에 슬러시와 뒤에 슬러시는 정규식을 사용할 때 사용합니다.
'2345678910111213'.match('1')
'2345678910111213'.match(/1/)
'2345678910111213'.match(/1/g)
'2345678910111213'.match(/1/g).length
'hello leehojun my name hojun'.match(/hojun/g).length
```

## 2진수, 8진수, 16진수, 10진수
```js
// 2진수: 숫자를 2개만 사용합니다.
// 0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010

// 8진수: 숫자를 8개만 사용합니다.
// 0, 1, 2, 3, 4, 5, 6, 7, 10

// 16진수: 숫자를 16개만 사용합니다.
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, 10

// 10진수: 숫자를 10개만 사용합니다.
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// 아주 쉽게 10진수를 2진수로 변환하는 방법
// 9를 2진수로 표현해주세요!
// step1 9와 가장 가까운 2의 제곱수를 찾습니다. 2^3 = 8 이 수의 형태는 항상 10000...형태가 됩니다. 1000
// step2 8에서 몇을 더하면 9가 되는지 찾습니다. 1만 더하면 됩니다. 1001
```

## 워밍업 문제 1
- 링크: https://codingdojang.com/scode/393
```js
// 이렇게 풀지 마세요 - 1
// xxx8:000 ~ 999개
// xx8x:000 ~ 999개
// x8xx:000 ~ 999개
// 8xxx:000 ~ 999개
// 중복 => 중복을 허락해야 합니다. 4000개가 답이 맞습니다. 
// 이런식으로 풀이하는 것을 보려고 하는 문제가 아닙니다!

// 이렇게 풀지 마세요 - 2
// 이런 카운팅 하는 문제에 lv1문제는 대부분 문자열 문제입니다.
// [0, 0, 0, 0] ~ [9, 9, 9, 9] 반복을 돌며 풀지 마세요.

// 이렇게 풀지 마세요 - 3
count = 0;
for (let i of '12345678910111213') {
    console.log(i);
    if (i === '1'){
        count++;
    }
}
count

// 최대한 내장 메서드를 이용해주세요.
// 효율적으로 풀 수 있는 방법을 찾아주세요.

'12345678910111213'.match(/1/g).length

Array(100)
.fill(0)
.map((_, i) => i)

Array(100)
.fill(0)
.map((_, i) => i)
.join('')

Array(100)
.fill(0)
.map((_, i) => i)
.join('')
.split('')
.filter(v => v === '1')

Array(100)
.fill(0)
.map((_, i) => i)
.join('')
.split('')
.filter(v => v === '1')
.length

// 모든 것을 다 한줄로 만들려는 것은 좋지 않습니다.

Array(100)
.fill(0)
.map((_, i) => i)
.join('')
.match(/1/g)
.length
```

## 워밍업 문제 2
- 링크: https://codingdojang.com/scode/408
- 순서쌍, 최댓값, 최솟값, 특정값의 정렬 문제는 모두 정렬문제입니다.

```js
const s = [1, 3, 4, 8, 13, 17, 20];

// 이렇게 풀지 마세요 - 1
let min = Infinity;
let index = 0;
for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i+1] - s[i]);
    if (s[i+1] - s[i] < min) {
        min = s[i+1] - s[i];
        index = i;
    }
}

console.log(s[index], s[index+1]);

// 최솟값: 최댓값을 먼저 저장해야합니다.
// 최댓값: 최솟값을 먼저 저장해야합니다.

////////////////

// 이렇게 풀면 간단합니다.
const s = [1, 3, 4, 8, 13, 17, 20];
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
const pair = zip(s, s.slice(1));

// 이 상태에서 정렬을 하고 최솟값을 찾으면 됩니다.
pair.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))
pair.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0]

////////////////

const s = [1, 3, 4, 8, 13, 17, 20];
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
const pair = zip(s, s.slice(1));
let min = Infinity;
let result = [];

for (let [i, j] of pair) {
    console.log(i, j);
    if (j - i < min) {
        min = j - i;
        result = [i, j];
    }
}

console.log(result);
```

## 워밍업 문제 3
- 링크: https://100.jsalgo.co.kr/?page=4#

```js
// ['쿠키 3개', '쿠키 2개', '쿠키 5개']
// 3 X 1 + 2 X 2 + 5 X 3 = 3 + 4 + 15 = 22

const cookies = ['쿠키 3개', '쿠키 2개', '쿠키 5개'];

function solution(data){
    data.forEach(v => {
        console.log(v);
        // console.log(parseInt(v))
        // 숫자가 먼저 나오지 않으면 못찾습니다.
    });
}

solution(cookies);

////////////////

const cookies = ['쿠키 3개', '쿠키 2개', '쿠키 5개'];

function solution(data){
    let result = 0;
    let temp = 1;
    data.forEach(v => {
        console.log(v.match(/\d+/g));
        result += parseInt(v.match(/\d+/g)[0]) * temp;
        temp++;
    });
    return result;
}

solution(cookies);

////////////////

const cookies = ['쿠키 3개', '쿠키 2개', '쿠키 5개'];

function solution(data){
    let result = 0;
    let temp = 1;
    data.forEach(v => {
        result += parseInt(v.split(' ')[1]) * temp;
        temp++;
    });
    return result;
}

solution(cookies);
```