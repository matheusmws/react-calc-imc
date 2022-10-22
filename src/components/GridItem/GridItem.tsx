import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level;
};

export const GridItem = ({item}: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img className={styles.icon} src={item.icon === 'up' ? upImage : downImage} alt="" />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc && 
                <p className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</p>
            }
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
};