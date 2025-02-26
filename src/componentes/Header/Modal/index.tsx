import styles from './Modal.module.scss'

const Modal = ({ isOpen, setAbrirModal }: any) => {


   

    if (isOpen) {
        return (
            <div className={styles.fundo}>
                <div className={styles.modal}>
                    <nav onClick={setAbrirModal}>X</nav>
                    <form onSubmit={setAbrirModal} className={styles.campo}>
                        <div>
                            <label>Nome:</label>
                            <input required type='text' placeholder='Digite seu nome' />
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <input required type='email' placeholder='Digite seu e-mail' />
                        </div>
                        <div>
                            <label>Telefone:</label>
                            <input required type='text' placeholder='Digite seu número' />
                        </div>

                        <button>Enviar</button>
                    </form>

                </div>
            </div>

        )
    }

    return null

}

export default Modal;