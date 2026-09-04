import { useState } from 'react'
import CalculadoraIMC from './components/CalculadoraIMC'

function App() {
  const [imc, setImc] = useState(null);
  
  function calcula(peso, altura) {
    const imcValue = peso / (altura * altura);
    setImc(imcValue.toFixed(2));
  }

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const peso = parseFloat(e.target.peso.value);
          const altura = parseFloat(e.target.altura.value);
          calcula(peso, altura);
        }}
      >
        <label>
          Peso (kg):
          <input type="number" name="peso" step="0.1" required />
        </label>
        <br />
        <label>
          Altura (m):
          <input type="number" name="altura" step="0.01" required />
        </label>
        <br />
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <p>
            Classificação:{' '}
            {imc < 18.5
              ? 'Abaixo do peso'
              : imc < 24.9
              ? 'Peso normal'
              : imc < 29.9
              ? 'Sobrepeso'
              : 'Obesidade'}
          </p>
        </div>
      )}
    </div>
  );
}

export default App
