import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { sale, soldOut } from '../modules/stockCounter';
import stockReducer from '../modules/stockCounter';
import { useEffect } from 'react';

export default function Message() {

    const { stock, goods } = useSelector((state) => { return { stock: state.goodsReducer.stock, goods: state.goodsReducer.goods } }
        , shallowEqual);

    const { message } = useSelector((state) => {
        return { message: state.stockReducer.message }
    }, shallowEqual);


    const dispatch = useDispatch();

    const onSale = () => dispatch(sale());
    const onSoldOut = () => dispatch(soldOut());

    useEffect(() => {
        if (stock <= 0) {
            onSoldOut();
        } else {
            onSale();
        }
    }, [stock]);

    return (
        <div>
            <strong>{message}</strong>
        </div>
    )
}
