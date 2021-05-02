import Shop from "./shop.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  let purchaseItems = [
    {
      id: 1,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item One",
      currency: "₹",
      price: 299,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 4.5,
    },
    {
      id: 2,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Two",
      currency: "₹",
      price: 199,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 3.8,
    },
    {
      id: 3,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Three",
      currency: "₹",
      price: 99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 4.2,
    },
    {
      id: 4,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Four",
      currency: "₹",
      price: 999,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 4,
    },
    {
      id: 5,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Five",
      currency: "₹",
      price: 599,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 3.9,
    },
    {
      id: 6,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Six",
      currency: "₹",
      price: 399,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 4.6,
    },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (obj) => {
    setCart([...cart, obj]);
    setTotal(total + obj.price);
  };

  let removeCart = (obj) => {
    setCart(cart.filter((item) => item.id !== obj.id));
    setTotal(total - obj.price);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
              {cart.map((obj) => {
                return (
                  <div className="list-group-item">
                    {obj.itemName}-{obj.currency}
                    {obj.price}
                    <span>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                          removeCart(obj);
                        }}
                      >
                        X
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
            <h3>Total - ₹{total}</h3>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {purchaseItems.map((obj) => {
                return <Shop items={obj} handleCart={addToCart}></Shop>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
