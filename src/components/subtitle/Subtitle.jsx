import styles from './Subtitle.module.css'


function Subtitle ({ children }) {
  return (
   <h6 className={styles.Subtitle}>{ children }</h6>
  )


}

export default Subtitle;