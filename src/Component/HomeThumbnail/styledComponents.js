import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  margin:5px;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width : 960px){
    justify-content:space-between;
    width : 300px;
  }
  @media screen and (min-width: 960px) {
    width: 305px;
    margin-right: 20px;
  }
  
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin:3px 0px 10px 0px;
  font-size: 13px;
  color: ${props => props.color};
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  margin-top:0;
  margin-bottom:7px;
  width:100%;
  font-size: 15px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin:0px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const ThumbNailImage = styled.img`
  width: 100%;
  object-fit:cover;
  border-radius:5px;
  
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
