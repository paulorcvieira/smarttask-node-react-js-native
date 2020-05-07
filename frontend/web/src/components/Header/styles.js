import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #745BBB;
  border-bottom: 5px solid #ACB8E8;

  display: flex;
`

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img {
    width: 213.5px;
    height: 38px;
  }
`

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a, button {
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover{
      color: #F2EFFE;
    }
  }

  #notification {
    img {
      width: 18,74px;
      height: 21.42px;
    }

    span {
      background: tomato;
      color: #FFFFFF;
      padding: 2px 6px;
      border-radius: 50%;
      font-size: 12px;
      position: relative;
      top: -14px;
      right: 7px;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  .divider::after {
    content: "|";
    margin: 0 5px;
    color: #FFFFFF;
  }

  button {
    font-size: 16px;
  }

`