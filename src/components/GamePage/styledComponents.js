import styled from 'styled-components'

export const GamePageContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    min-height:100vh;
    background-color:#223a5f;
`
export const NavbarContainer = styled.nav`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width: 80%;
    max-width: 1140px;
    border: 2px solid white;
    border-radius: 10px;
    padding: 15px 25px;
    margin: 15px;
`
export const NavbarHeading = styled.h1`
    color:#ffffff;
    font-family: 'Bree Serif';
    font-size:24px;
    font-weight:600;
    @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const ScoreContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 60px;
    border-radius: 10px;
    padding: 20px;
    @media screen and (min-width: 768px) {
        height: 100px;
        width: 120px;
    }
`
export const ScoreHeading = styled.p`
    color:#223a5f;
    font-size: 16px;
    font-weight: bold;
    padding: 0px;
    margin: 0px;
    font-family: 'Bree Serif';
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`
export const Score = styled(ScoreHeading)`
    font-size:36px;
    font-family:"Roboto";
    @media screen and (min-width: 768px) {
        font-size: 48px;
    }
`
export const GameButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 15px;
  width: 700px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`
export const GameImage = styled.img`
  width: 225px;
  @media screen and (max-width: 768px) {
    width: 120px;
  }
`

export const GameImageButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultScorePara = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
`
export const YouOpponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAgainButton = styled.button`
  background-color: #fffff;
  color: #223a5f;
  font-family:"Roboto";
  font-weight:500;
  outline:none;
  border:none;
  pointer:cursor;
  border-radius:8px;
  padding:8px 16px;
`
