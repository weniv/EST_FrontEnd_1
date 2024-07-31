# 1. URL 구조

```

WHATWG URL's origin property (https://nodejs.org/api/url.html#url)
┌────────────────────────────────────────────────────────────────────────────────────────────┐
│                                             href                                           │
├──────────┬──┬────────────────────┬────────────────────────┬────────────────────────┬───────┤
│ protocol │  │       auth         │          host          │          path          │ hash  │
│          │  │                    ├─────────────────┬──────┼──────────┬─────────────┤       │
│          │  │                    │    hostname     │ port │ pathname │    search   │       │
│          │  │                    │                 │      │          ├─┬───────────┤       │
│          │  │                    │                 │      │          │ │    query  │       │
"  https:   //   user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ? query=string #hash"
│          │  │         │          │    hostname     │ port │          │             │       │
│          │  │         │          ├─────────────────┴──────┤          │             │       │
│ protocol │  │   user  │ password │          host          │          │             │       │
├──────────┴──┼─────────┴──────────┼────────────────────────┤          │             │       │
│   origin    │                    │         origin         │ pathname │    search   │ hash  │
├─────────────┴────────────────────┴────────────────────────┴──────────┴─────────────┴───────┤
│                                             href                                           │
└────────────────────────────────────────────────────────────────────────────────────────────┘
0번 ~ 1023번: 잘 알려진 포트 (well-known port)
1024번 ~ 49151번: 등록된 포트 (registered port)
49152번 ~ 65535번: 동적 포트 (dynamic port)

```

# 2. JavaScript URL 객체

```js
const url = new URL('https://example.org:8080/a/b/c/d?query=abc&name=hojun#licat');

console.log('전체 URL:', url.href);
console.log('프로토콜:', url.protocol);
console.log('호스트:', url.host);
console.log('호스트네임:', url.hostname);
console.log('포트:', url.port);
console.log('경로:', url.pathname);
console.log('검색:', url.search);
console.log('해시:', url.hash);

// 값 변경
url.protocol = 'ftp:';
url.port = '21';
url.pathname = '/e/f/g/h';
url.href

// URLSearchParams 객체
console.log('URLSearchParams 객체:', url.searchParams);
console.log('query:', url.searchParams.get('query'));
console.log('name:', url.searchParams.get('name'));
```

# 3. HTTP

* HTTP(HyperText Transfer Protocol) : 클라이언트와 서버 간에 데이터를 주고받기 위한 약속(프로토콜)입니다.
* 프로토콜: 약속, 통신 규약입니다. 예를 들어, 제가 다빈님하고 대화를 할 때, 한국어로 대화를 합니다. 이때, 한국어가 프로토콜이라고 할 수 있습니다.
* HTTP란 한 마디로 무엇이냐? '문자열 약속'이라고 할 수 있습니다.
* HTTP는 무상태(stateless) 프로토콜입니다. 즉, 이전 요청과 다음 요청이 서로 연결되어 있지 않습니다.

# 4. HTTP 메서드 종류
* GET
    * 데이터 조회
    * 데이터 요청
    * URL로 데이터를 전달하는 방식
* POST
    * 데이터 생성
    * 데이터 조회/수정/삭제 요청 => 다 하는 경우도 있습니다.
        * https://www.courtauction.go.kr/ => 페이지 이동을 했는데 URL이 변경이 안되게 하고 싶은 경우
    * body 부분으로 데이터를 전달하는 방식
* PUT: 데이터 전체 수정
* PATCH: 데이터 부분 수정
* DELETE: 데이터 삭제
* OPTIONS: 웹서버가 지원하는 메소드 종류 반환 요청

## 4.1 html form태그에서 보내는 방식
* HTML의 form에서는 method를 GET과 POST로 지정할 수 있습니다.
```html
<form action="/login" method="GET">
    <input type="text" name="id">
    <input type="password" name="password">
    <button type="submit">로그인</button>
</form>

<form action="/login" method="POST">
    <input type="text" name="id">
    <input type="password" name="password">
    <button type="submit">로그인</button>
</form>
```
* 그럼 왜 DELETE나 PUT을 사용하지 않을까요? form 규약을 만들 때 이 규약을 만드신 분이 DELETE와 PUT을 사용하는 것을 반대했기 때문입니다. 왜냐하면 form이라는 의도 자체가 어떤 데이터를 생성하거나 요청하는 것이기 때문입니다.

## 4.2 그렇다면 PUT과 DELETE를 사용하려면 어떻게 해야할까요?
* PUT과 DELETE를 사용하려면 form이 아닌 JavaScript를 사용하여 요청을 보내야 합니다.
* fetch로 요청을 주로 합니다.

## 4.2 HTTP 메서드 실습
* 실습 URL: https://weniv.github.io/weniv_eduAPI/
* GET
    * GET 요청은 fetch를 그대로 사용해서 요청할 수 있습니다.
    ```js
    fetch("https://eduapi.weniv.co.kr/37/blog")
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error));
    ```
* POST
    * Body로 데이터를 전달할 수 있습니다.
    ```js
    fetch("https://eduapi.weniv.co.kr/37/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "test hojun",
                content: "test hojun",
            }),
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error));
    ```
    * 실제로 백엔드 개발자와 블로그 페이지를 만들었어요. 그러면 여러분이 해야할 것은 무엇인지 절차대로 서술해보겠습니다.
        1. form을 만듭니다. 대부분 WYSIWYG 에디터를 사용합니다. 그 중에서도 저는 https://ui.toast.com/tui-editor 를 추천합니다.
        2. form을 만들었으면 form으로 바로 데이터가 제출되게 할 수도 있지만 put이나 patch, delete를 사용하려면 fetch를 사용해야 합니다. javascript에서 form에 입력된 데이터를 읽어와서 fetch에 데이터로 옮겨주어야 합니다.
        3. fetch로 데이터를 보내면 백엔드에서 데이터를 받아서 DB에 저장합니다.
* PUT
    ```js
    fetch("https://eduapi.weniv.co.kr/37/blog/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "test put",
            content: "test put",
        }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
    ```
* DELETE
    ```js
    fetch("https://eduapi.weniv.co.kr/37/blog/1", {
        method: "DELETE",
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
    ```

## 4.3 HTTP 응답 코드
* HTTP 응답 코드는 응답을 제대로 받았다는 규약에 따른 메시지가 아닙니다. 처리가 되었다고 무조건 200을 주지는 않는다는 것을 기억해주세요. 왜냐하면 보안상의 이유로 200이나 404를 주지 않는 경우가 많습니다.
* footprinting: 해커가 서버에 대한 정보를 수집하는 것을 말합니다. 그래서 일부러 404를 주거나 200을 주는 경우도 많습니다.

### 2xx
200	서버가 요청을 제대로 처리.
201	성공적으로 요청되었으며 서버가 새 리소스를 작성.
202	서버가 요청을 접수했지만 아직 처리하지 않음.

### 3xx
301	요청한 페이지를 새 위치로 영구적으로 이동.

### 4xx
400	Bad Request. 잘못된 요청
401	Unauthorized. 권한 없이 요청. Authorization 헤더가 잘못된 경우.
403	Forbidden. 서버가 요청을 거부.
404	서버가 요청한 페이지를 찾을 수 없음.

### 5xx
서버 쪽에서 오류가 난 경우입니다. 이때는 백엔드 개발자에게 물어봐야겠죠.
500	서버에 오류가 발생하여 요청을 수행할 수 없음.
503	서버가 다운되었기 때문에 현재서버 사용 불가.

## 4.4 OSI 7계층, TCP/IP 4계층
* 통신을 위해 장비들이 먼저 개발되었습니다.
* TCP/IP
* 이 장비끼리 통신이 안되는 이슈가 생겼습니다.
* 그래서 통신을 위한 표준을 만들었습니다.
* OSI 7계층

OSI 7계층(표준화 목적)	    TCP/IP 4계층(실용성)
응용 계층	                응용 계층
표현 계층	                응용 계층
세션 계층	                응용 계층
전송 계층	                전송 계층
네트워크 계층	            인터넷 계층
데이터링크 계층	            네트워크 액세스 계층
물리 계층	                네트워크 액세스 계층

## 4.5 쿠키와 로컬스토리지

* 쿠키
    * 키와 값의 쌍으로 브라우저에 저장. 보통 4KB 이하로 제한.
    * 클라이언트와 서버가 통신할 때 자동으로 데이터가 추가되어 들어갑니다.