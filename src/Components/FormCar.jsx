import React, { useState } from 'react'
import '../styles/formcar.css'

const FormCar = ({ createNewCard }) => {

    const handleSumit = (e => {
        e.preventDefault()

        createNewCard(
            e.target.carBrand.value.trim(),
            e.target.carName.value.trim(),
            e.target.carColor.value.trim(),
            e.target.carYear.value.trim(),
            e.target.carPrice.value.trim()
        )

        e.target.reset()
    })


    return (
        <section className='form'>
            <section>
                <h2>INSERT YOUR CAR</h2>
                <form className='form__car' action="" autoComplete="off" onSubmit={handleSumit}>
                    <div>
                        <label htmlFor="">Brand:</label>
                        <input id='carBrand' type="text" placeholder='Insert brand' />
                    </div>
                    <div>
                        <label htmlFor="">Name:</label>
                        <input id='carName' type="text" placeholder='Insert name' />
                    </div>
                    <div>
                        <label htmlFor="">Color:</label>
                        <input id='carColor' type="text" placeholder='Insert color' />
                    </div>
                    <div>
                        <label htmlFor="">Year:</label>
                        <input id='carYear' type="number" placeholder='Insert year' />
                    </div>
                    <div>
                        <label htmlFor="">Price:</label>
                        <input id='carPrice' type="number" placeholder='Insert price' />
                    </div>

                    <button className='car__btn'>INSERT CAR</button>
                </form>
            </section>

            <section>
                <img className='form__img' src="/carLogo.jpg" alt="" />
            </section>
        </section>
    )
}

export default FormCar