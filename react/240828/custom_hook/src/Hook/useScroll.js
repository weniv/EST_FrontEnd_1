import { useEffect, useState } from 'react';


const useScroll = () => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {

            setIsBottom(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 20);

            console.log(isBottom);
        });
    }, []);

    return isBottom;
}

export default useScroll;