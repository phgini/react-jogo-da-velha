import styles from './Header.module.css'

import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import Icon from '../icon/icon';

function Header (){
 return (
  <div className={styles.header}>
    <Title>Jogo Da Velha</Title>
  <Subtitle>criado por Paulo Henrique</Subtitle>
   <div className={styles.IconContent}>
    <Icon iconName="github" size="40px" Link="https://github.com/phgini"/>
    </div>
  </div>
 )
}
 
export default Header;