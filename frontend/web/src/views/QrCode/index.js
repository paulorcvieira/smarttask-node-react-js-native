import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';

//Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
  const [macaddress, setMacaddress] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMacaddress(){
    if(!macaddress) {
      alert('Você precisa informar os números que apareceram no seu celular!');
    } else {
      if(macaddress.length < 12) {
        alert('Você precisa informar os números corretamente!')
      } else {
        await localStorage.setItem('@smarttask/macaddress', macaddress);
        setRedirect(true);
        window.location.reload();
      }
    }
  }

  return (
    <S.Container>
      { redirect && <Redirect to="/"/> }
      <Header/>

      <S.Content>
        <h3>Capture o QRCODE pelo app do celular.</h3>
        <p>Suas atividades serão sincronizadas com a do seu celular.</p>
        <S.QrCodeArea>
          <Qr value='getmacaddress' size={350}/>
        </S.QrCodeArea>

        <S.ValidationCode>
          <span>Digite o código de verificação que apareceu no seu celular</span>
          <input type="text" onChange={e => setMacaddress(e.target.value)} value={macaddress}/>
          <button type="button" onClick={SaveMacaddress}>Sincronizar</button>
        </S.ValidationCode>
      </S.Content>

      <Footer/>
    </S.Container>
  )
}

export default QrCode;
