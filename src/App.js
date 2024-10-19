import './App.css'
import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import LoginForm from './Component/LoginForm'
import ProtectedRoute from './Component/ProtectedRoute'
import NotFound from './Component/NotFound'
import VideoSection from './Component/VideoSection'
import SavedVideos from './Component/SavedVideosSection'
import Trending from './Component/Trending'
import Gaming from './Component/Gaming'


import Home from './Component/Home'

class App extends Component {
  state = {
    isDarkTheme: true,
    activeTab: '',
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    console.log(savedVideos)
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)

    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeTab,
          changeActiveTab: this.changeActiveTab,
          savedVideos,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={VideoSection} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />

          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
