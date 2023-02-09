import axios from 'axios'
import { useEffect, useState } from 'react'
import './styles/App.css'
import Card from './Components/Card'
import Footer from './Components/Footer'
import FormCar from './Components/FormCar'

function App() {

  const [cardInfo, setCardInfo] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const getAllCars = () => {
    const url = 'http://cars-crud.academlo.tech/cars/'

    axios.get(url)
      .then(res => setCardInfo(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllCars()
  }, [])

  const createNewCard = data => {
    const url = 'http://cars-crud.academlo.tech/cars/'

    axios.post(url, data)
      .then(res => {
        getAllCars()
        console.log(res.data)
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

  const updateCarById = (id, data) => {
    const url = `http://cars-crud.academlo.tech/cars/${id}/`

    axios.patch(url, data)
      .then(res => {
        getAllCars()
        setUpdateInfo()
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="App">
        <h1>Car Inventory</h1>
        <div className='App__form'>
          <FormCar
            createNewCard={createNewCard}
            updateInfo={updateInfo}
            updateCarById={updateCarById}
          />
        </div>
        <div className='container'>
          {
            cardInfo?.map(car => (
              <Card
                car={car}
                key={car.id}
                deleteCarById={deleteCarById}
                setUpdateInfo={setUpdateInfo}
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
