import InputComponent from "./InputComponent";
import SomethingComponent from "./SomethingComponent";
import useScroll from "./Hook/useScroll";

function App() {
  useScroll();

  return (
    <div style={{ height: '2000px' }
    }>
      <InputComponent />
      <SomethingComponent />
    </div >
  );
}
export default App;
