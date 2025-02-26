import carro from 'assets/carro.png'
import carro1 from 'assets/carro1.png'
import carro2 from 'assets/carro3.png'
import styles from './Conteudo.module.scss'
import { VscCreditCard } from "react-icons/vsc"
import { GiTrafficLightsOrange as Range, GiSpeedometer as Speed } from "react-icons/gi";
import { RiTimerLine as Clock } from "react-icons/ri";
import { useState } from 'react';

const Conteudo = () => {


    const veiculos = {
        'carro': {
            preco: '3300',
            velocidade: '300km/h',
            km: '7000',
            arrancada: '4.3sec'
        }
    }

    const [valor, setValor] = useState(veiculos)


    type TipoImage = 'carro1' | 'carro2' | 'carro3';



    const [carroSelect, setCarroSelect] = useState<TipoImage>('carro1')


    const alterarDados = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCarroSelect(e.target.value as TipoImage)

        switch (e.target.value) {
            case 'carro1':
                setValor({
                    ...valor, carro: {
                        preco: '3300',
                        velocidade: '300km/h',
                        km: '7000',
                        arrancada: '4.3sec'
                    }
                })
                break;
            case 'carro2':
                setValor({
                    ...valor, carro: {
                        preco: '4800',
                        velocidade: '378km/h',
                        km: '75000',
                        arrancada: '2.7sec'
                    }
                })
                break;
            case 'carro3':
                setValor({
                    ...valor, carro: {
                        preco: '7800',
                        velocidade: '250km/h',
                        km: '2000',
                        arrancada: '5.3sec'
                    }
                })
                break;
            default:
                break;
        }

    }

   

    return (
        <section className={styles.conteudo}>

            <div className={styles.conteudo__carro}>
                <h2>EXCLUSIVO</h2>
                { carroSelect === 'carro1' && <img src={carro} alt="Carro" />}
                {carroSelect === 'carro2' && <img src={carro1} alt="Carro 1" />}
                {carroSelect === 'carro3' && <img src={carro2} alt="Carro 2" />}

                <select value={carroSelect} onChange={alterarDados} name='Selecione o Veículo'>
                    {/* {carrinhos.map((item) => (
                        <option  value={item.carrinho}>Mclata Z0Z</option>
                    ))} */}
                    <option selected value='carro1'>Mclata Z0Z</option>
                    <option value='carro2'>Mustank Suo</option>
                    <option value='carro3'>Telei Ghost</option>
                </select>
            </div>

            <div >
                <span className={styles.conteudo__span} >
                    <nav> <VscCreditCard /> </nav>
                    <p>R$ {valor.carro.preco} Preço Aluguel</p>
                </span>
                <div className={styles.conteudo__info}>
                    <span >
                        <Range />
                        <p>{valor.carro.velocidade}</p>
                    </span>
                    <h6>Velocidade</h6>
                    <span >
                        <Speed />
                        <p>{valor.carro.km}</p>
                    </span>
                    <h6>Kilometers</h6>
                    <span >
                        <Clock />
                        <p>{valor.carro.arrancada}</p>
                    </span>
                    <h6>0-100km/h</h6>
                </div>
                <div className={styles.texto}>
                    <h5>Caracteristicas</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero dolor autem rerum magnam temporibus aspernatur vel voluptatum, quas, ratione nihil, debitis aut accusantium minima corrupti dolorem dignissimos quos fuga?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt blanditiis alias consequuntur, ut dolor corporis laudantium dolorum harum at aliquid quibusdam odit ipsam voluptatibus repellendus. Assumenda aperiam eligendi recusandae!</p>
                </div>


            </div>




        </section>
    )
}

export default Conteudo;