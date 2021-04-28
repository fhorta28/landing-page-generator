import React, { useState, useEffect } from 'react'
// import axios from "axios";
import styled, { ThemeProvider } from "styled-components"
import WebFont from 'webfontloader'
import { GlobalStyles } from './themeUtils/GlobalStyle'
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
import SideBarBtn from './components/SideBarBtn'
import ModalSidebar from './components/ModalSidebar'
import ThemeSelector from './components/ThemeGenerator/ThemeSelector'
import CreateThemeContent from './components/ThemeGenerator/CreateThemeContent'
import Modal from './components/Modal'
import ReferencesSection from './components/ReferencesSection'
import SectionServices from './components/SectionOurServices'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

import { slideData } from './components/TestimonialsSection/slideData'
import { useTheme } from './themeUtils/useTheme'

const Container = styled.div`
  width: 100%;
  display:flex; 
`
const ContainerPage = styled.div`
  position:relative;
  width: 100%;
  overflow:hidden;
`
const ContainerModalSideB = styled.div`
  position:relative;
  width: 65vw;
  height:200vh;
  Z-index:6;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 560px) {
    margin-top: 10px;
  } 
`
const App = () => {

  // Props & States
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();
  const [showModal, setShowModal] = useState(false);
  const [themeUser, setThemeUser] = useState([]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });
//   useEffect(() => {
//     async function fetchData(){
//           const request = await axios.get('http://localhost/serveur_landing_page_generator/front/user/2');   
//           setThemeUser(Object.values(request.data))
//           return request;
//    }
//    fetchData();
//   }, []);
//  console.log(themeUser)
  // useEffect(() => {
  //   axios.get('http://localhost/serveur_landing_page_generator/front/users').then(resp => {console.log(resp.data)})
  //  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  const toogleModal = () => {
    setShowModal(!showModal)
  }
  const manageDialog = () => {
    console.log("click");
    setShowDialog(!showDialog);
  }

  const createTheme = newTheme => {
    console.log(newTheme);
    setNewTheme(newTheme);
  }

  return (
    themeLoaded && <ThemeProvider theme={ selectedTheme }>
    <GlobalStyles/>
      <Container newTheme={ newTheme }>
        <Router>
          { showModal && <Modal closeModal={toogleModal} /> } 
          { showDialog && 
            <ContainerModalSideB>
              <ModalSidebar
                header="Create a Theme"
                body={ 
                  <>
                   <CreateThemeContent create={ createTheme }/>
                   <ThemeSelector setter={ setSelectedTheme } newTheme={ newTheme }/>
                  </>
                }
                open={ showDialog } 
                callback = {manageDialog}  
              />  
            </ContainerModalSideB>
          }
          <Switch>
            <Route path="/privacy">
              <Privacy openModal={toogleModal}/>
            </Route>
            <Route path="/terms">
              <Terms openModal={toogleModal}/>
            </Route>
            <Route path="/">
            <ContainerPage newTheme={ newTheme }>
              <Navbar className="navBar" openModal={toogleModal} />
              <SideBarBtn onClick ={manageDialog}/>   
              <Banner className="banner" openModal={toogleModal} />
              <ReferencesSection/>
              <SectionServices openModal={toogleModal}/>
              <TestimonialsSection slides={slideData}/>
              <Footer openModal={toogleModal}/>  
              </ContainerPage>        
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App
