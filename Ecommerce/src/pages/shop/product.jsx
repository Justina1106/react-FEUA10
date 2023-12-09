import React from "react";


const Product = (props) => {
    const { id, productName, price, productImagine } = props.data;
    // const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    return (
        <div className="product">
            <img src={productImagine} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price}</p>
            </div>
            {/* <button className="addToCartBttn" onClick={() => addToCart(id)}> 
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>} */}
            {/* </button> */}
        </div>

    );
    
};
export default Product;