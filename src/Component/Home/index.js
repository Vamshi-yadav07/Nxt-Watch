import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
import HomeThumbnails from '../HomeThumbnails'

import HomeFailure from '../HomeFailure'

import {
  HomeContainer,
  HomeRoutes,
  BannerCloseButton,
  BannerText,
  BannerButton,
  BannerImage,
  BannerRightPart,
  BannerLeftPart,
  BannerContainer,
  LoaderContainer,
  SearchInput,
  SearchIconContainer,
  SearchContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    homeVideos: [],
    showBanner: true,
    apiStatus: 'FAILURE',
  }

  componentDidMount() {
    this.getVideos()
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeShowBanner = () => {
    this.setState(prev => ({showBanner: !prev.showBanner}))
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderBanner = () => {
    const {showBanner} = this.state
    return (
      <BannerContainer data-testid="banner" showBanner={showBanner}>
        <BannerLeftPart>
          <BannerImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerText>
            Buy Nxt Watch Premium prepaid plans with <br /> UPI
          </BannerText>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </BannerLeftPart>
        <BannerRightPart>
          <BannerCloseButton
            data-testid="close"
            onClick={this.changeShowBanner}
          >
            <AiOutlineClose size={22} />
          </BannerCloseButton>
        </BannerRightPart>
      </BannerContainer>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderVideosView = () => {
    const {homeVideos} = this.state
    return <HomeThumbnails homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderFailureView = () => <HomeFailure onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {searchInput} = this.state
          return (
            <div style={{height: '100vh'}}>
              <Header />
              <HomeContainer isDarkTheme={isDarkTheme}>
                <NavigationSideBar />
                <HomeRoutes>
                
                  {this.renderBanner()}
                  <SearchContainer showBanner={showBanner}>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      isDarkTheme={isDarkTheme}
                      onChange={this.onChangeInput}
                    />
                    <SearchIconContainer
                      isDarkTheme={isDarkTheme}
                      type="button"
                      data-testid="searchButton"
                      onClick={this.getVideos}
                    >
                      <AiOutlineSearch size={20} />
                    </SearchIconContainer>
                  </SearchContainer>
                  {this.renderHomeVideos()}
                </HomeRoutes>
              </HomeContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
