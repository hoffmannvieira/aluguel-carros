import { useState } from 'react'
import styles from './Modelos.module.scss'
import carro from 'assets/carroTeste.jpg'
import classNames from 'classnames'
import carros from './carros.json'



interface Cars {
    id: number,
    nome: string,
    valor: string,
    foto: string,
    botao: boolean
}

const Modelos = () => {

    
    const [carrinho, setCarrinho] = useState<Cars[]>(carros)



    const oi = (id: number, novoEstado: boolean) => {
       
        setCarrinho(carrinho.map(carro => carro.id === id ? {...carro, botao: novoEstado} : carro))
       
    }
    return (
        <section className={styles.conteudo}>
            <h1>Modelos para Alugar</h1>
            <ul className={styles.carros}>

                {carrinho.map(carro => (
                        <li key={carro.id}>
                        <h3>{carro.nome}</h3>
                        <div className={classNames(
                            {
                                [styles.content]: true,
                                [styles['content--ativo']]: carro.botao
                            }
                        )}>
                            <img src={carro.foto} alt={carro.nome} />
                            <div className={styles.content__overlay}>
                                <h4>{carro.nome}</h4>
                                <p>{carro.valor}</p>
                            </div>
    
                        </div>
            
                        <button className={classNames({
                            [styles.carros__botao]: true,
                            [styles['carros__botao--rented']]: carro.botao
                        })} onClick={() => oi(carro.id, !carro.botao)} >
                        { carro.botao ? 'Alugado' : 'Alugar'}
                        </button>
                    </li>
                    ))}
    
            </ul>
        </section>
    )
}

export default Modelos;