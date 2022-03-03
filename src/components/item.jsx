import React from 'react'
import "./item.css"

export default function Item(props) {
  return (
    <div class="card">
        <img src={props.imgurl} />
        <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.manufacturer}</p>
            <a href="#" class="btn btn-dark btnPrice">{props.price} Mill. de USD</a>
        </div>
    </div>
  )
}
