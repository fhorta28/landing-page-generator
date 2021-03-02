// Components
import Banner from './components/Banner'
import Navbar from './components/Navbar'
// Variables
import * as banner from './variables/banner'
import * as navbar from './variables/navbar'

const App = props => {
  return (
    <>
      <Navbar
        slogan={navbar.slogan.text}
      />
      <Banner
        cta={banner.cta}
        title={banner.title.text}
        subTitle={banner.subTitle.text}
      />
    </>
  )
}

export default App
