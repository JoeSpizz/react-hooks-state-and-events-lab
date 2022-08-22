import React, {useState} from "react";

function Item({ name, category }) {
  const [clickStatus, setClick] = useState("")
  
  function itemClick(event){
    let itemCart = event.target
    let itemClicked = event.target.parentElement
    setClick(()=> {
      if (clickStatus === ""){
        setClick ("in-cart")
        itemClicked.className="in-cart"
       itemCart.innerText = "Remove from Cart"

      }
      else if (clickStatus === "in-cart"){
        setClick("")
        itemClicked.className=""
        itemCart.innerText = "Add to Cart"
      }
    })
    }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={itemClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
