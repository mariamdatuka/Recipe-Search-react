import React from 'react'
 import style from './recipe.module.css';

export default function Recipe({title, calories, image, ingredients}) {
  return (
    <div className={style.recipe}>
        <h1 >{title}</h1>
        <ul>
            {ingredients.map(ing=>(
                <li>{ing.text}</li>
            ))}
        </ul>
        <p className={style.clr}>Calories: {calories}</p>
        <img className={style.image}src={image} alt=''/>
    </div>
  )
}
