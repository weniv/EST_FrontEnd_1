const obj = {
	num:1,
	func(){
		setTimeout(
			function(){
				debugger;
				console.log(this)
			},1000)
	}
}


// 질문온거
const obj4 = {
    num: 1,
    func() {
      console.log(this);
      setTimeout(function () {
        console.log(this);
      }, 1000); // setTimeout이 실행하는 곳이 window 라서!!, this 바인딩이 안됨
    },
  };