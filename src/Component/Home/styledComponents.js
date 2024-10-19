import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction:column;
  
  background-color : ${props => (props.isDarkTheme ? 'black' : '#f1f1f1')};
  @media screen and (min-width: 768px) {
    flex-direction:row;
    
  }
`

export const HomeRoutes = styled.div`
  display: flex;
  flex-direction:column;
  margin-left:0;
  min-height: 100vh;
  width : 100%;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    padding:0 5px;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 200px;
  display:${props => (props.showBanner ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 576px) {
    margin-top:60px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 992px) {
    margin-top: 80px;
  }
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  width: 80px;
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  color: #000000;
  background: none;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
  cursor:pointer;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  width: 90%;
  height: 40px;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
    @media screen and (min-width : 300px){
    margin-top: ${props => (props.showBanner ? '20px' : '65px')};
    
  }
  @media screen and (min-width : 992px){
    margin-top: ${props => (props.showBanner ? '20px' : '100px')};
    margin-left:25px;
  }

`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color : ${props => (props.isDarkTheme ? '#909090' : '#ebebeb')};
  border-left: 1px solid #909090;
  border-bottom: none;
  border-top: none;
  border-right: none;
  width: 70px;
 
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  color:${props => (props.isDarkTheme ? 'white' : 'black')};
  font-family: Roboto;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
