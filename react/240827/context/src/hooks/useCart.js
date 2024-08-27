import { useContext } from "react";
import { CartContext } from "../Cart";


export const useCart = () => useContext(CartContext);