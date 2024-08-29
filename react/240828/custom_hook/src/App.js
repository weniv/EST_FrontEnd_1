import InputComponent from "./InputComponent";
import SomethingComponent from "./SomethingComponent";
import useScroll from "./Hook/useScroll";
import { useEffect, useState } from "react";
import ImageList from "./Components/ImageList";
import Loading from "./Components/Loading";

function App() {

  const [imageList, setImageList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  async function fetchImages() {
    setIsLoading(true);
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5');

      if (!response.ok) {
        throw new Error();
      }

      const datas = await response.json();

      setImageList(datas);
      setIsLoading(false);

    } catch (error) {
      console.error('네트워크 통신에 문제가 있습니다.', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div style={{ height: '2000px' }}>
      {isLoading && <Loading />}
      <ImageList imageList={imageList} />
    </div >
  );
}
export default App;
