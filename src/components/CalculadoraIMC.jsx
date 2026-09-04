import { useState } from 'react';
import styles from './CalculadoraIMC.module.css';


    function CalculadoraIMC({onCalcula}) {

        const [peso, setPeso] = useState('');
        const [altura, setAltura] = useState('');
        const [erro, setErro] = useState('');

        function handleSubmit(e) {
            e.preventDefault();
            const pesoNum = parseFloat(peso);
            const alturaNum = parseFloat(altura);

            if (isNaN(pesoNum) || isNaN(alturaNum)) {
                setErro('Por favor, insira valores válidos para peso e altura.');
                onCalcula(null, null);
                return;
            }

            setErro('');
            onCalcula(pesoNum, alturaNum);
        }
        return (
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        step="0.1"
                        required
                    />
                </label>
                <br />
                <label>
                    Altura (m):
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        step="0.01"
                        required
                    />
                </label>
                <br />
                {erro && <p role="alert">{erro}</p>}
                <button type="submit">Calcular IMC</button>
            </form>
        );
    }

export default CalculadoraIMC;