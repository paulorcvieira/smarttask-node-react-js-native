import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import bell from '../../assets/img/bell.png';

//Axios
import api from '../../services/api';

//MacAddress
import isConnected from '../../utils/isConnected';

function Header({ clickNotification }) {

  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify();
  }, []);

  async function Logout(){
    localStorage.removeItem('@smarttask/macaddress');
    window.location.reload();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={ logo } alt="Logo SmartTasK" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">Início</Link>
        <span className="divider" />
        <Link to="/task">+Atividade</Link>
        <span className="divider" />
        { !isConnected ?
          <Link to="/qrcode">Sincronizar</Link>
          :
          <button type="button" onClick={Logout}>Sair</button>
        }
        {
          lateCount > 0 &&
          <>
            <span className="divider" />
            <button onClick={ clickNotification } id="notification">
              <img src={ bell } alt="Notifições" />
              <span>{ lateCount }</span>
            </button>
          </>
        }
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
