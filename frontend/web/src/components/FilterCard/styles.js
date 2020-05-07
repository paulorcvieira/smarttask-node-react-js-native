import styled from 'styled-components';

export const Container = styled.div`
  width: 190px;
  height: 40px;
  background: ${props => props.actived ? '#745BBB' : '#F2EFFE' };
  padding: 10px;
  margin: 5px;
  cursor: pointer;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: ${props => props.actived ? '#FFFFFF' : '#745BBB' };
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover {
    background: #ACB8E8;
  }
`