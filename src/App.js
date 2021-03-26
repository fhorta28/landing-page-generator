import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Components
import Privacy from './components/Pages/Privacy.jsx'
import Terms from './components/Pages/Terms.jsx'
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
    <Router>
      { showModal && <Modal closeModal={toogleModal} /> }   
      <Switch>
        <Route path="/privacy">
          <Privacy openModal={toogleModal}/>
        </Route>
        <Route path="/terms">
          <Terms openModal={toogleModal}/>
        </Route>
        <Route path="/">
          <Navbar openModal={toogleModal} />
          <Banner openModal={toogleModal} />
          <ReferencesSection/>
          <SectionServices openModal={toogleModal}/>
          <TestimonialsSection slides={slideData}/>
          <Footer openModal={toogleModal}/>          
        </Route>
      </Switch>
    </Router>
  )
}

export default App
