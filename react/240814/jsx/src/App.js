import './App.css';

function App() {

  const time = new Date();
  console.log(time);
  console.log(time.getFullYear());
  console.log(time.getMonth());
  console.log(time.getDate());
  console.log(time.getDay());
  console.log(time.getHours());
  console.log(time.getMinutes());
  console.log(time.getSeconds());

  // 시간을 12단위로 표현하는 방법.
  const hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();

  // 오전, 오후 판단
  const ampm = time.getHours() > 12 ? '오후' : '오전';

  // 분이 한자리일 경우에 앞에 0을 붙이기
  const minutes = time.getMinutes() > 10 ? time.getMinutes() : '0' + time.getMinutes();


  // [1월, 2월, ]

  const val = 10;
  // djaldflasfdj
  /**
   * 
   * lasdfljasf
   */
  const style = { backgroundColor: 'teal' };


  return (
    <div style={style}>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
    </div>
  );
}
export default App;
