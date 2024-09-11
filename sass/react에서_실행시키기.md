# 새 React 프로젝트 생성
npx create-react-app react-scss-example
cd react-scss-example

# SCSS 사용을 위한 node-sass 패키지 설치
npm install node-sass

# src 폴더에 App.scss 파일 생성
echo '
.App {
  text-align: center;
  
  h1 {
    color: #61dafb;
  }
  
  .content {
    background-color: #282c34;
    padding: 20px;
    color: white;
  }
}
' > src/App.scss

# src/App.js 파일 수정
echo '
import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>React와 SCSS 예제</h1>
      <div className="content">
        <p>이것은 SCSS를 사용한 스타일링 예제입니다.</p>
      </div>
    </div>
  );
}

export default App;
' > src/App.js

# 개발 서버 실행
npm start