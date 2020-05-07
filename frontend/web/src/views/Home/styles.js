import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-family: Fira Sans;
`

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;

  button {
    background: none;
    border: none;
  }
`

export const Content = styled.div`

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: #000000;
  }

`

export const Title = styled.div`

  width: 100%;
  border-bottom: 1px solid #745BBB;
  text-align: center;
  display: flex;
  justify-content: center;

  h3 {
    color: #745BBB;
    position: relative;
    top: 46px;
    background: #FFFFFF;
    padding: 0 15px;
    margin-top: -10px;
    margin-bottom: 40px;

  }


`