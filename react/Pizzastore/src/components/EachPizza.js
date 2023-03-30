import React,{useState,useContext} from 'react'
import { CartContext } from "../CartContext";
import pizzaimg from '../images/peproni.png';


function EachPizza({product}) {

    const [toggle,setToggle] = useState(false);
    const cart = useContext(CartContext);


    const addToCart = (id) =>{
        cart.addOneToCart(id);
        setToggle(!toggle);
    }

  return (
    <div className="cards">
    <div className="card">
        <div className="image">
            <img src={pizzaimg} alt=""/>
        </div>
        <div className="name">
            <p>{product.title}</p>
        </div>
        <div className="type">
            <p>{product.type}</p>
        </div>
        <div className="last">
            <div className="price">Rs - {product.price}</div>
            <div>
                 
                <button className={toggle ? "added":" "} onClick={() => addToCart(product.id)} >{toggle ? "Added": "Add"}</button>

              

            </div>
        </div>
    </div>
</div>
  )
}

export default EachPizza