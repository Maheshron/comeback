import { createContext } from "react";
import { productsArray,getProductData } from "./productStore";

export const CartContext = createContext({
    items:[],
    getProductQuantity:() => {},
    addOneToCart:() => {},
    removeOneFromCart:() => {},
    deleteFromCart:() => {},
    getTotalCost:() => {},
})

export function CartProvider({children}){

    const [cartProducts,setCartProducts] = useState([]);

    function getProductQuantity(id){
        const quantity =  cartProducts.find(product => product.id === id)?.quantity;
        if(quantity === undefined){
            return 0
        }
        return quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 0){
            setCartProducts([...cartProducts,{id:id,quantity:1}])
        }
        else{
            setCartProducts(
                cartProducts.map(cartProduct => cartProduct.id === id ? {...cartProduct,quantity:cartProduct.quantity + 1} : cartProduct )
            )
        }
    }

    function removeOneFromCart(id){
        const quantity =  getProductQuantity(id);
        if(quantity === 1){
            deleteFromCart(id)
        }
        else{
            setCartProducts(
                cartProducts.map((product) => {
                    if(product.id === id){
                     return   {...product,quantity:product.quantity -1 }
                    }
                    else{
                        return product;
                    }
                })
            )
        }
    }

    function deleteFromCart(id){
       setCartProducts(cartProducts => cartProducts.filter(currentProduct => {
        return currentProduct.id != id;
       }))
    }

    function getTotalCost(){
        let totalCost = 0;
        cartProducts.map((eachItem) => {
            const productData = getProductData(eachItem.id);
            totalCost += (productData.price * eachItem.quantity)
        })

        return totalCost;
    }

    const contextValue = {
        items:cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }


    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )


   
}