import React from 'react'
import '../styles/card.css';


const Card = ({ car, deleteCarById, setUpdateInfo }) => {

    const handleDelete = () => deleteCarById(car.id)

    const handleUpdate = () => setUpdateInfo(car)

    return (
        <div className="cards">
            <article className='card'>
                <h4>#{car.id}</h4>
                <h3>{`${car.brand} ${car.model}`}</h3>
                <ul>
                    <li><span>Year: </span>{car.year}</li>
                    <li><span>Color: </span>{car.color}</li>
                    <li><span>Price: </span>${car.price}</li>
                </ul>
                <div className='card__button'>
                    <button onClick={handleDelete}> Delete Car</button>
                    <button onClick={handleUpdate}>Update Car</button>
                </div>

            </article>
        </div>


    )
}

export default Card