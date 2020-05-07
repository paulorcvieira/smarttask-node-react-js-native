import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 

  width: 350px;

  h3 {
    color: #745BBB;
    font-size: 18px;
  }
  p {
    color: #000000;
    font-size: 12px;
  }

`

export const QrCodeArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`

export const ValidationCode = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;

  span{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
    text-align: center;
    color: #745BBB;
  }

  input {
    font-size: 28px;
    font-weight: bold;
    color: #745BBB;
    padding: 10px;
    text-align: center;
  }

  button{
    font-weight: bold;
    background: #745BBB;
    color: #FFFFFF;
    font-size: 18px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 70px;

    &:hover{
      background: #ACB8E8;
    }
  }
`