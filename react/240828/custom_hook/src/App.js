import InputComponent from "./InputComponent";
import SomethingComponent from "./SomethingComponent";
import useScroll from "./Hook/useScroll";
import { useEffect, useState } from "react";
import ImageList from "./Components/ImageList";

function App() {

  const [imageList, setImageList] = useState([]);

  async function fetchImages() {
    const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5');

    if (!response.ok) {
      throw new Error();
    }

    const datas = await response.json();

    setImageList(datas);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  console.log(imageList);

  return (
    <div style={{ height: '2000px' }
    }>
      <ImageList imageList={imageList} />
    </div >
  );
}
export default App;
