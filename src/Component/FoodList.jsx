import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ item }) {
  //or directly write {item}
  if (item.length == 0) {
    return (
      <div className="alert alert-primary" role="alert">
        No food item
      </div>
    );
  } else {
    return (
      <>
        <div className="container pt-4">
          <h3 className="pb-3">Food items</h3>
          <ul className="list-group">
            {item.map((x) => {
              return (
                <FoodItem x={x}/>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
