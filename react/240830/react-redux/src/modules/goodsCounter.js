// 액션 생성자 함수
export const addNumber = () => {
    return { type: 'ADD' };
}

// 액션 생성자 함수
export const minuseNumber = () => {
    return { type: 'MINUS' };
}


const initialState = {
    stock: 5,
    goods: 1
}

// 리듀서 선언
const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                stock: state.stock - 1,
                goods: state.goods + 1
            }

        case 'MINUS':
            return {
                ...state,
                stock: state.stock + 1,
                goods: state.goods - 1
            }
        default:
            return state;
    }
}

export default goodsReducer;