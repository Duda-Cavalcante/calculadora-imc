import imagem from "./imagem.jpg"
import {useState, useEffect} from 'react'



export default function App (){

const [peso, setPeso] = useState(0);
const [altura, setAltura] = useState(0);
const [resultado, setResultado] = useState(0);



const calcularImc = () => {
  if (peso <=0){
    alert("Insira um peso válido");
    return;
  }
  if (altura <=0){
    alert("Insira uma altura válida");
    return;
  }
const imc = peso / (altura * altura);
const formataImc = imc.toFixed(2);
setResultado(+formataImc);
};

const reset = () => {
  setPeso(0);
  setAltura(0);
  setResultado(0);
}


  return (
    <div className="container">

    <div>
    <img src={imagem} alt="" />
    </div>

    <div className="container-text">
      <h1 id="titulo">Calculadora - IMC</h1>
      <form>
        <label htmlFor="campo1">Peso em (kg)</label>
      <input className= "inputs" id= "campo1" type="number" value={peso} onChange={(e) => setPeso(+e.target.value)} placeholder='Peso em (kg)' />
      </form>
      <form>
      <label htmlFor="campo2">Altura em (m)</label>
      <input className= "inputs" id="campo2"type="number" value={altura} onChange={(e) => setAltura(+e.target.value)} placeholder='Altura em (m)' />
      </form>
      <div className="button">
      <button onClick={calcularImc}>Calcular</button>
      <button onClick={reset}>Reiniciar</button>
      </div>
      <h2 className="resultado">Seu IMC é: {resultado}</h2>
      </div>


   

      </div>

 
  );
}


