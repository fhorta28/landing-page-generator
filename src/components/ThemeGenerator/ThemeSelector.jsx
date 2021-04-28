import React, { useState, useEffect } from "react"

import _ from 'lodash'
import { useTheme } from '../../themeUtils/useTheme'
import { getFromLS } from '../../storage'
import { Wrapper, ThemedButton, HeaderPreview, ContainerTheme } from './style'

export default (props) => {
  const themesFromStore = getFromLS('all-themes')
  const [data, setData] = useState(themesFromStore.data)
  const [themes, setThemes] = useState([])
  const {setMode} = useTheme()

  const themeSwitcher = selectedTheme => {
    console.log(selectedTheme)
    setMode(selectedTheme)
    props.setter(selectedTheme)
  }

  useEffect(() => {
      setThemes(_.keys(data))
  }, [data])

  useEffect(() => {
      props.newTheme &&
          updateThemeCard(props.newTheme)
  }, [props.newTheme])

  const updateThemeCard = theme => {
    const key = _.keys(theme)[0]
    const updated = {...data, [key]:theme[key]}
    setData(updated)
  }

  const ThemeCard = props => {
    return(
      <Wrapper style = {{backgroundColor: `${props => props.theme.colors.primary.background}`}}>  
        <span>Click on the button to set this theme</span>
        <ThemedButton onClick={ (theme) => themeSwitcher(props.theme) }>  
          {props.theme.name}
        </ThemedButton>
      </Wrapper>
    )
  }

  return (
    <div>
      <HeaderPreview>Select a Theme from below</HeaderPreview>
      <ContainerTheme>
      {
        themes.length > 0 && themes.map(theme =>(
          <ThemeCard 
            theme={data[theme]} 
            key={data[theme].id} 
          />
        ))
      }
      </ContainerTheme>
    </div>
  )
}
