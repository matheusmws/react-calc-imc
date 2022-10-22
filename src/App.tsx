import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png';

const App = () => {
const [heightField, setHeightField] = useState<number>(0);
const [wheightField, setWheightField] = useState<number>(0);
const [toShow, setToShow] = useState<Level | null>(null);

const handleCalculateButton = () => {
  if(heightField && wheightField) {
    setToShow(calculateImc(heightField, wheightField));
  } else {
    alert('Preencha todos os campos.');
  }
};

const handleBackToButton = () => {
  setToShow(null);
  setHeightField(0);
  setWheightField(0);
}

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="powered by" className={styles.poweredImage} />
        </div>
      </header>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule o seu IMC</h1>
        <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
        <input 
        type="number" 
        name="heightField" 
        id="heightField"
        placeholder="Digite a sua altura. Ex 1.7 (em metros)."
        value={heightField > 0 ? heightField : ''}
        onChange={e => setHeightField(parseFloat(e.target.value))}
        disabled={toShow ? true : false}
         />
         <input 
        type="number" 
        name="wheightField" 
        id="wheightField"
        placeholder="Digite o seu peso. Ex 75.3 (em kg)."
        value={wheightField > 0 ? wheightField : ''}
        onChange={e => setWheightField(parseFloat(e.target.value))}
        disabled={toShow ? true : false}
         />

         <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
      </div>
      <div className={styles.rightSide}>
        {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
        }
        {toShow &&
          <div className={styles.selected}>
            <div className={styles.backArrow} onClick={handleBackToButton}>
              <img className={styles.arrowImage} src={leftArrowImage} alt="" />
            </div>
            <GridItem item={toShow} />
          </div>
        }
      </div>
    </div>
    </div>
  )
}

export default App;