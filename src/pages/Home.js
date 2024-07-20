import React from 'react'
import CategoryList from '../components/CategoryList'
import SliderComponent from '../components/SliderComponent'
import HorizontalCardProduct from '../components/HorizontalCardProduct' 

const Home = () => {
  return (
    <div>
      <SliderComponent/>
      <CategoryList/>
      <HorizontalCardProduct category={["Biryani" , "MealfulRolls", "BoomSandwich", "BhattiChicken",
         "holaPasta", "LeanCrustPizza"]} heading={"ZAZA Mughal Biryani"}/>
      <HorizontalCardProduct category={["PaneerTeeka", "BoxDesiMeal", "globoICECREAM", 
        "MojoPizza", "weFit", "NH1Bowls"]} heading={"Paneer Teeka"}/>
    </div>
  )
}

export default Home