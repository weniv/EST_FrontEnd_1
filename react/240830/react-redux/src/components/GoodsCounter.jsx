import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { addNumber, minuseNumber } from '../modules/goodsCounter';
import { useState } from 'react';

export default function GoodsCounter() {

    const { stock, goods } = useSelector((state) => { return { stock: state.goodsReducer.stock, goods: state.goodsReducer.goods } }
        , shallowEqual);

    const dispatch = useDispatch();

    const onSubstractNumber = () => dispatch(minuseNumber());
    const onAddNumber = () => dispatch(addNumber());

    return (
        <div>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <span><strong>17,500</strong>원</span>
            <div>
                <button type="button" onClick={onSubstractNumber} disabled={goods <= 0}>MINUS</button>
                <span>{goods}</span>
                <button onClick={onAddNumber} disabled={stock <= 0}>PLUS</button>
            </div>
            <div>
                총 수량 <strong>{goods}</strong>
            </div>
            <div>
                <strong>{goods * 17500}</strong>원</div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </div>
    )
}
