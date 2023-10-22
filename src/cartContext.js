import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  //Update quantity
  const updateQuantity = (id, selectedSize, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id && product.selectedSize === selectedSize) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const newTotalQuantity = cart.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  //Add to cart
  const addToCart = (id, selectedSize) => {
    const existingProductIndex = cart.findIndex(
      (product) => product.id === id && product.selectedSize === selectedSize
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    } else {
      const findIncomingProduct = products.find((product) => product.id === id);
      setCart((prev) => [
        ...prev,
        { ...findIncomingProduct, quantity: 1, selectedSize },
      ]);
    }
  };

  //Remove from cart
  const removeFromCart = (id, selectedSize) => {
    const updatedCart = cart.filter(
      (product) => !(product.id === id && product.selectedSize === selectedSize)
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        totalQuantity,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
