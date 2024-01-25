import React from "react";

export default function FoodList({ item }) {
  //or directly write {item}
  return (
    <>
      <div className="container pt-4">
        <h3 className="pb-3">Food items</h3>
        <ul className="list-group">
          {item.map((x) => {
           return <li className="list-group-item">{x}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
