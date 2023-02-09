import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/App.css'
import Card from './Components/Card'
import Footer from './Components/Footer'
import FormCar from './Components/FormCar'

function App() {

  const [cardInfo, setCardInfo] = useState()

  const getAllCars = () => {
    const url = 'http://cars-crud.academlo.tech/cars/'

    axios.get(url)
      .then(res => setCardInfo(res.data))
      .catch(err => console.log(err))
  }

  console.log(cardInfo);

  useEffect(() => {
    getAllCars()
  }, [])

  const createNewCard = (brand, model, color, year, price) => {
    const url = 'http://cars-crud.academlo.tech/cars/'

    const data = {
      brand: brand,
      model: model,
      color: color,
      year: year,
      price: price
    }

    axios.post(url, data)
      .then(res => {
        getAllCars()
      })
      .catch(err => console.log(err))
  }

  const deleteCarById = id => {
    const url = `http://cars-crud.academlo.tech/cars/${id}/`
    axios.delete(url)
      .then(res => {
        getAllCars()
        console.log('The Register is deleted succesfully.')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="App">
        <h1>Car Inventory</h1>
        <div className='App__form'>
          <FormCar createNewCard={createNewCard} />
        </div>
        <div className='container'>
          {
            cardInfo?.map(car => (
              <Card
                car={car}
                key={car.id}
                deleteCarById={deleteCarById}
              />
            ))
          }
        </div>

      </div>
      <Footer />
    </>
  )
}

export default App
