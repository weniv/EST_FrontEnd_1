import useScroll from "./Hook/useScroll";
import { useEffect, useState } from "react";
import ImageList from "./Components/ImageList";
import Loading from "./Components/Loading";

function App() {
  // 이미지 데이터 상태 관리
  const [imageList, setImageList] = useState([]);

  // 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(false);

  // 불러올 데이터의 페이지 숫자 관리
  const [pageToFetch, setPageToFetch] = useState(1);
  // const pageToFetch = useRef(1);


  const isBottom = useScroll();

  console.log(isBottom);

  useEffect(() => {
    if (isBottom) {
      // 다음 사진들을 다운받으세요.
      console.log("다음 사진들을 다운받으세요.");
      setPageToFetch((prevPage) => prevPage + 1);
    }
  }, [isBottom]);


  useEffect(() => {
    fetchImages(pageToFetch);
  }, [pageToFetch]);


  async function fetchImages(pageNumber) {
    setIsLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=5`);

      if (!response.ok) {
        throw new Error();
      }

      const datas = await response.json();

      setImageList((prevImageList) => [...prevImageList, ...datas]);
      setIsLoading(false);

    } catch (error) {
      console.error('네트워크 통신에 문제가 있습니다.', error);
      setIsLoading(false);
    }
  }


  return (
    <div>
      {isLoading && <Loading />}
      <ImageList imageList={imageList} />
    </div >
  );
}
export default App;
