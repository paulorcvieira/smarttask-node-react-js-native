import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 150px;
  box-shadow: -1px 1px 13px -2px rgba(0,0,0,0.75);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px;
  cursor: pointer;
  transition: all 0.6s ease;

  &:hover {
    opacity: 0.5;
  }

`

export const TopCard = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 50px;
    height: 50px;
  }

`

export const BottomCard = styled.div`

  width: 100%;
  display: flex;
  justify-content: space-around;

  strong {
    color: #745BBB;
    font-weight: bold;
  }

  span {
    color: #707070;
  }

`