import React, { useState } from 'react'

// Components
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import ReferencesSection from './components/ReferencesSection'
import SectionServices from './components/SectionOurServices'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

import { slideData } from './components/TestimonialsSection/slideData'

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
      <ReferencesSection/>
      <SectionServices/>
      <TestimonialsSection slides={slideData}/>
      <Footer/>
    </>
  )
}

export default App
