import React from 'react'

const LearningJSX = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return (
        <div>
            <h1>Learn JSX:</h1>
            <h2>Random: {randomNumber}</h2>
        </div>
    )
}

export default LearningJSX;