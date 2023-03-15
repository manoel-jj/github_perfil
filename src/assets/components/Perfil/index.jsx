import styles from '../Perfil/perfil.module.css';

const Perfil = ({ nomeUsario }) => {
    
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsario}.png`}/>
                <h1 className={styles.name}>
                    {nomeUsario}
                </h1>
        </header>
    )
} 

export default Perfil;