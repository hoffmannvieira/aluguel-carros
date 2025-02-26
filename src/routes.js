import Conteudo from 'componentes/Conteudo';
import Header from 'componentes/Header';
import Modelos from 'componentes/Modelos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Conteudo/>}/>
                <Route path='/modelos' element={<Modelos/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;