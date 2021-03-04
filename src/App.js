import React, { useState } from 'react'

// Components
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Modal from './components/Modal'


const App = () => {

  // Props & States
  const [showModal, setShowModal] = useState(false);
  const toogleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Navbar openModal={toogleModal} />
      { showModal && <Modal closeModal={toogleModal} /> }
      <Banner openModal={toogleModal} />
    </>
  )
}

export default App
