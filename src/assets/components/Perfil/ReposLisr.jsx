import { useEffect, useState } from "react";

import styles from '../Perfil/reposList.module.css';

const RepotList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 1000);
    
        })
    }, [nomeUsuario])

    return (
        
        <div className="container">
        {estaCarregando ?(
            <h1>Carregando...</h1>
        ) : (
            <ul className={styles.list}>
            
            {repos.map(({ id, name, language, html_url }) => (
                <li className={styles.listItem} key={id}>
                    <div className={styles.listName}>
                    <b>Nome:</b>
                    {name}
                    </div>
                    <div className={styles.listLanguage}>
                    <b>Linguagem:</b>
                    {language}
                    </div>
                    
                    <a className={styles.listLink} target="_blank" href={html_url}>
                            visitar no git</a>
                    
                    
                </li>
            ))}
            
        </ul>
        )}
    
    
        </div>
    )
}

export default RepotList;