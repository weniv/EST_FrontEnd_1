const s1 = new Set([1,2,3]);
const s2 = new Set([2,3,4]);

//node 22v이상 버전이어야함
//사파리, 크롬, 엣지, 파이어폭스 최신버전에서 사용가능.
s1.difference(s2);


[...a].filter(value => b.has(value));



회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']

const map = new Map();

for (const name of 회사게시판) {
    // true면 이전 loop에서 이미 등장한 이름
    if (map.has(name)) {
        // map에 이미 key로 등록되어있다.
        map.set(name, map.get(name)+1)
    } else {
        // map에 처음 등록하는 경우
        map.set(name, 1)
    }
}
console.log(map)