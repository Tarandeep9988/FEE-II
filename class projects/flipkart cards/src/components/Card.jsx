import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div class='card'>
      <img class='card_img' src={props.img_url} alt="image" height='100'/>
      <p class='name'>{props.name}</p>
      <p class='price'>{props.price}</p>
      <p class='other'>{props.other}</p>
    </div>
  )
}
