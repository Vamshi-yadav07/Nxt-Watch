import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  activeTab: '',
  changeActiveTab: () => {},
  savedVideos: [],
  addVideo : () => {}
})

export default ThemeContext
