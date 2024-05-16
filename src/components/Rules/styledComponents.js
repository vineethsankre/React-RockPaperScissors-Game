import styled from 'styled-components'

export const PopupContainer = styled.div`
  align-self: flex-end;
  margin: 20px;
`
export const Button = styled.button`
  color:#223a5f;
  font-family: 'Bree Serif';
  font-size:18px;
  font-weight:500;
  padding: 8px 16px;
  width:80px;
  border-radius: 8px;
  border:none;
  outline:none;
  cursor:pointer;
`
export const PopupModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  height:600px;
  width: 700px;
  margin: 10px;
  @media screen and (max-width: 728px) {
    width: 280px;
    height: 300px;
  }
`

export const PopupImage = styled.img`
  align-self: center;
  margin-bottom: 30px;
  width: 240px;
  height: 300px;
  @media screen and (min-width: 728px) {
    width: 600px;
    height: 500px;
  }
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
`
