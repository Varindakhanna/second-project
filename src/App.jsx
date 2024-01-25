import React from 'react'
import FoodList from './Component/FoodList'

export default function App() {
  const fooditem=["Parantha","Pasta","Burger","Fries","Noodles","Paneer"];
  return (
    <>
    <FoodList item={fooditem}/>
    </>
  )
}
