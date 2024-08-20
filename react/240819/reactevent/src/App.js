import { useState } from "react";
import Login from "./Login";
import Homepage from "./Homepage";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: 1234
  }

  // 사용자의 로그인 상태
  const [isLogin, setIsLogin] = useState(false);

  return (
    isLogin ? <Homepage /> : < Login infoUser={user} setLogin={setIsLogin} />
  )

}

export default App;