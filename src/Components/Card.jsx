import React from 'react'
import '../styles/card.css';


const Card = ({ car, deleteCarById }) => {

    const handleClick = () => deleteCarById(car.id)

    return (
        <div className="cards">
            <article className='card'>
                <h3>{`#${car.id} ${car.brand} ${car.model}`}</h3>
                <ul>
                    <li><span>Year: </span>{car.year}</li>
                    <li><span>Color: </span>{car.color}</li>
                    <li><span>Price: </span>${car.price}</li>
                </ul>
                <div className='card__button'>
                    <button onClick={handleClick}> Delete Car</button>
                    <button> Update Car</button>
                </div>

            </article>
        </div>


    )
}

export default Card