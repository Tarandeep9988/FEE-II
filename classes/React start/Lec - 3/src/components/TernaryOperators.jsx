// Ternary operators: (condition) ? 

import React from 'react'

export const TernaryOperators = () => {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    const luckyNumber = 3;
  return (
    <div>
        <h1>LucyNumber: {luckyNumber}</h1>
        <h1>Random: {randomNumber}</h1>
        {
            randomNumber === luckyNumber ? 
            <img src="https://th.bing.com/th/id/OIP.1z6ZzW7VaI0EopAXRbKjLQHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="win" width='200'/> : 
            <img src="https://cdn3.emoji.gg/emojis/5946-you-lose.png" alt="loose" width='200'/>
            
        }
    </div>
  )
}
