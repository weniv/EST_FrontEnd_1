import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App4() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/product">product</Link>
                    </li>
                    <li>
                        <Link to="/cart">cart</Link>
                    </li>
                    <li>
                        <Link to="user">user</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element="" />
                <Route path='/product/:id' element="" />
                <Route path='/product/:id/notice' element="" />
                <Route path='cart' element="" />
                <Route path='users' element="" >
                    <Route index element="" />
                    <Route path='question' element="" />
                    <Route path='notice' element="" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
