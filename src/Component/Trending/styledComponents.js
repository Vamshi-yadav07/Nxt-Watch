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
    margin-top:60px;
    padding:0 5px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
