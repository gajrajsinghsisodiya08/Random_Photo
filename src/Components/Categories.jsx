import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../spinner.css";

function Categories() {
  const [items, setItems] = useState([]);
  const [noItems, setNoItems] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("category"));
    if (items) {
      setItems(items);
      console.log(items);
    } else {
      setNoItems(true);
    }
  }, []);
  const keys = Object.keys(items);

  return (
    <div>
      <Navbar />
      {noItems ? (
        <div className="message-box">There are no Categories in your Storage</div>
      ) : (
        keys.map((item) => {
          if (item !== undefined) {
            console.log("item > > >", item);
            return (
              <div className="categories-box">
                <h3 className="categories-title">Category Name - {item}</h3>
                <div className="categories-img-box">
                {items[`${item}`]?.map((val) => {
                  return (
                    <>
                      <div className="categories-img">
                        <img src={val}></img>
                      </div>
                    </>
                  );
                })}
                </div>
              </div>
            );
          }
        })
      )}
    </div>
  );
}

export default Categories;
