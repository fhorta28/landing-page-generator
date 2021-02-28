// Components
import Banner from './components/Banner'
// Variables
import * as banner from './variables/banner'

const App = props => {
  return (
    <>
      <Banner
        cta={banner.cta}
        title={banner.title.text}
        subTitle={banner.subTitle.text}
      />
    </>
  )
}

export default App
