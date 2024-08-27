import { useState, createContext } from "react";



const CartContext = createContext();

const CartProvider = ({ children }) => {
    // 카트의 상태
    const [cart, setCart] = useState([]);

    // 카트에 상품 추가하기
    const addToCart = (product) => {
        setCart((prevCart) => {

            // 카트에 상품이 이미 존재하는지 확인
            const isExist = prevCart.find((item) => product.id === item.id);

            if (isExist) {
                return prevCart.map((item) => {
                    // 내가 찾고자 하는 상품과 일치하는 상품의 count 값을 증가시킵니다.
                    return item.id === product.id ? { ...item, count: item.count + 1 } : item;
                })
            }
        });
    }

    // 카트에서 제거하기
    const removeFromCart = () => {

    }

    // 카트에 담겨있는 상품의 총합 구하기
    const getTotalCount = () => {

    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalCount }}>
            {children}
        </CartContext.Provider>
    );
}


const Header = () => {
    return (
        <header>
            <h1>쇼핑몰</h1>
            <p>카트에 있는 상품의 개수: </p>
        </header>
    )
}

const ProductList = () => {

    const products = [
        { id: 1, name: "노트북", price: 1000 },
        { id: 2, name: "스마트폰", price: 500 },
        { id: 3, name: "태블릿", price: 300 },
    ];

    return (
        <>
            <h2>상품 목록</h2>
            <ul>
                {
                    products.map((product) =>
                        <li key={product.id}>
                            {product.name} - ₩{product.price}
                            <button>카트에 추가하기</button>
                        </li>
                    )
                }

            </ul>
        </>
    )
}

const MyCart = () => {
    return (
        <>
            <h2>장바구니</h2>
            <p>장바구니가 비었습니다.</p>
        </>
    )
}


const App = () => {
    return (
        <CartProvider>
            <Header />
            <ProductList />
            <MyCart />
        </CartProvider>
    )
}

export default App;