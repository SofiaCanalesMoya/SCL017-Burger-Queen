import fondo from './assets/img/fondo.png';
import './LoginView.css';

export default function LoginView () {
    return <div className="LoginView">
        <img src={fondo} className="fondo"/>
         <Titulo nombre="Ingresa el nombre" />
    </div>
}

const Titulo = ({ nombre }) => {
    return <h1>{nombre}</h1>
}