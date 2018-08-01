import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      return [...Array(props.ingredients[ingredientName])].map((_, index) => {
        return <BurgerIngredient key={ingredientName + index} type={ingredientName}/>
      });
    }).reduce((arr, el) => {
      return arr.concat(el);
    });

  console.log(ingredients);

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      { ingredients }
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );
};

export default burger;