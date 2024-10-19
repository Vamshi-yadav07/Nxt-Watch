import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MobileNavSideBar = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  bottom: 0;
  align-items: center;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const DesktopNavSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 95%;
  top:80px;
  position: fixed;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (max-width: 991px) {
    top:60px;
  }
`
export const NavMenuOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavMenuOptionItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  font-weight : ${props => props.fontWeight};
      padding: 0px 10px;
 height : 40px;
 border-radius : 6px;
 @media screen and (min-width: 768px) {
    padding: 0px 20px;
 height : auto;
  }
`

export const NavOptionName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 13px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-bottom: 20px;

`

export const ContactInfoHeading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`
export const ContactIconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ContactIconsImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactInfoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`
