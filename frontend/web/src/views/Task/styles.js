import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Form = styled.div`
  width: 50%;
  margin-bottom: 70px;
  margin-top: 15px;
`
export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .inative {
    opacity: 0.5;
  }

  button {
    border: none;
    background: none;
  }

  img {
    width: 40px;
    height: 40px;
    margin: 0;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`

export const Input = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1px 0;

  span {
    color: #707070;
    margin-bottom: 0px;
  }

  input {
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #745BBB;
  }

  img {
    width: 20px;
    height: 20px;
    position: relative;
    left: 97%;
    bottom: 40px;
  }

`

export const TextArea = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  span {
    color: #707070;
    margin-bottom: 5px;
  }

  textarea {
    font-size: 16px;
    border: 1px solid #745BBB;
  }

`

export const Options = styled.div`

  display: flex;
  justify-content: space-between;

  button {
    font-weight: bold;
    color: #ACB8E8;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: #745BBB;
    font-weight: bold;
    font-size: 18px;
  }

`

export const Save = styled.div`

  width: 100%;

  button {
    width: 100%;
    background: #745BBB;
    border: none;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: bold;
    padding: 20px;
    border-radius: 30px;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

`