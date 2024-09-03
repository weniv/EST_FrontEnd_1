// 액션 생성자 함수
export const sale = () => {
    return { type: 'SALE', message: '판매중!' };
}

// 액션 생성자 함수
export const soldOut = () => {
    return { type: 'SOLD_OUT', message: '매진!' };
}


const initialState = {
    message: '판매중!'
}

// 리듀서 선언
const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SALE':
            return {
                ...state,
                message: action.message
            }

        case 'SOLD_OUT':
            return {
                ...state,
                message: action.message
            }
        default:
            return state;
    }
}

export default stockReducer;