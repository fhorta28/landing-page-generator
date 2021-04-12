import { useEffect, useState } from 'react'
import { setToLS, getFromLS } from '../storage'
import _ from 'lodash'

export const useTheme = () => {

  const themes = getFromLS('all-themes')
  const [theme, setTheme] = useState(themes.data.default1)
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode)
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'))
    return allFonts
  }
  const getFontsTitle = () => {
    const allFontsTitle = _.values(_.mapValues(themes.data, 'fontTitle'))
    return allFontsTitle
  }

  useEffect(() => {
    const localTheme = getFromLS('theme')
    localTheme ? setTheme(localTheme) : setTheme(themes.data.default1)
    setThemeLoaded(true)
  }, [])
  
  return { theme, themeLoaded, setMode, getFonts, getFontsTitle }

}
