import { useEffect, useState } from 'react';


const useScroll = () => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {

            setIsBottom(window.innerHeight + document.documentElement.scrollTop + 20 >= document.documentElement.offsetHeight);
        });
    }, []);

    return isBottom;
}

export default useScroll;