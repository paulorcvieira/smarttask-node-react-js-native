import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #745BBB;
  border-top: 5px solid #ACB8E8;

  position: fixed;
  bottom: 0;

  display: flex;

`

export const Center = styled.div`

  width: 100%;
  height: 50px;
  background: #745BBB;
  border-top: 5px solid #ACB8E8;

  display: flex;

  span {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }

  a {
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover{
      color: #F2EFFE;
    }
  }

`