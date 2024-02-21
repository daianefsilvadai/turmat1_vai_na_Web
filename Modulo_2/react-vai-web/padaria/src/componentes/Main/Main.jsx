import paoMel from "./pao-mel.jpg";
import React, { useState } from "react"; // chamando hook usestate
import paoDiferente from "./pao-diferente.jpeg";
import boloPaoDeMel from "./bolo-1.jpg";
import maisIcon from "./mais.png";
import menosIcon from "./menos.png";
import lixeiraIcon from "./lixeira.png";

function ItemCard({ imagem, preco }) {
  //1° criar uma constant
  //2° criar um array [] que vai guardar duas coisas, dois parâmetros. [estado, setEstado]
  //3° receber = o hook useState()
  //4° dentro do () colocar o valor inicial (0) (...)
  const [numero, setNumero] = useState(0);
  //arrow function
  const Adicionar = () => {
    if (numero < 10) {
      setNumero(numero + 1);
    }
  };

  const Remover = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  const Limpar = () => {
    setNumero(0);
  };
  return (
    <div className="card">
      <img className="img-card" src={imagem} alt="pao-de-mel" />
      <h3>{preco}</h3>
      <div className="icons-card">
        <img onClick={Adicionar} src={maisIcon} alt="" />
        <h2>{numero}</h2>
        <img onClick={Remover} src={menosIcon} alt="" />
        <img onClick={Limpar} src={lixeiraIcon} alt="" />
      </div>
      <button onClick={Adicionar}>Comprar</button>
    </div>
  );
}

function Main() {
  return (
    <main>
      <ItemCard imagem={paoMel} preco="R$3,00 kg" />
      <ItemCard imagem={paoDiferente} preco="R$5,00 kg" />
      <ItemCard imagem={boloPaoDeMel} preco="R$32,00 kg" />
    </main>
  );
}

export default Main;
