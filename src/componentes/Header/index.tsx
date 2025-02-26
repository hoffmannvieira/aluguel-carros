import styles from './Header.module.scss'
import { VscAccount } from 'react-icons/vsc'
import { SiWhatsapp as Wpp } from 'react-icons/si'
import Modal from './Modal'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


const Header = () => {

    const [abrirModal, setAbrirModal] = useState(false)



    return (
        <>
            <header className={styles.cabecalho}>
                <h1>VCL</h1>
                <div className={styles.cabecalho__item}>
                    <nav>
                        <Link to={'/'}>Inicio</Link>
                    </nav>
                    <nav>
                    <Link to={'/modelos'}>Modelos</Link>
                    </nav>
                </div>
                <div className={styles.cabecalho__item}>
                    <button onClick={() => setAbrirModal(true)} className={styles.cabecalho__botao}> Entre em Contato </button>

                    <nav>
                        <VscAccount />
                    </nav>
                    <nav>
                        <Wpp />
                    </nav>

                </div>
            </header>

            


            <Modal isOpen={abrirModal} setAbrirModal={() => setAbrirModal(!abrirModal)} />
        </>


    )
}

export default Header;