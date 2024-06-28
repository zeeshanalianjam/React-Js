  import React, {createContext, useContext} from 'react'

  export const Theme = createContext({
    themeMode: 'light',
    lightTheme: () => {},
    darkTheme: () => {},
  })


  export const ThemeProvider = Theme.Provider

  export default function  UseTheme () {
    return useContext(Theme)
  }