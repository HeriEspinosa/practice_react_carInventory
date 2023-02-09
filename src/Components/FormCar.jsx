import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import '../styles/formcar.css'
import defaultValues from "../utils/defaultValuesForm";

const FormCar = ({ createNewCard, updateInfo, updateCarById }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            // Actualizar
            updateCarById(updateInfo.id, data)
        } else {
            // Crear
            createNewCard(data)
        }
        reset(defaultValues)
    }


    return (
        <section className='form'>
            <section>
                <h2>INSERT YOUR CAR</h2>
                <form className='form__car' action="" autoComplete="off" onSubmit={handleSubmit(submit)}>
                    <div>
                        <label htmlFor="">Brand:</label>
                        <input {...register('brand')} id="brand" type="text" placeholder="Enter a car brand" />
                    </div>
                    <div>
                        <label htmlFor="">Model:</label>
                        <input {...register('model')} id="model" type="text" placeholder="Enter a car model" />
                    </div>
                    <div>
                        <label htmlFor="">Color:</label>
                        <input {...register('color')} id="color" type="text" placeholder="Enter a car color" />
                    </div>
                    <div>
                        <label htmlFor="">Year:</label>
                        <input {...register('year')} id="year" type="number" placeholder="Enter a car year" />
                    </div>
                    <div>
                        <label htmlFor="">Price:</label>
                        <input {...register('price')} id="price" type="number" placeholder="Enter a car price" />
                    </div>

                    <button className='car__btn'>{updateInfo ? 'Update car' : 'Create car'}</button>
                </form>
            </section>

            <section>
                <img className='form__img' src="/carLogo.jpg" alt="" />
            </section>
        </section>
    )
}

export default FormCar