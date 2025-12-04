//1ª seção: IMPORTAÇÕES DE ARQUIVOS EXTERNOS
import './CardPerfil.css'
import fotoPerfil from '../assets/avatar.png'

//2ª seção: O COMPONENTE EM SI
function CardPerfil(){
    return(
        <div className='card-perfil'>
        <img className='foto-perfil' src={fotoPerfil}/>
        <span className='nome'>Nome</span>
        </div>
    );
}
//no react eh classname nn class
//3ª seção: EXPORTAÇÃO
//Se não colocar a exportação, o coomponente não 
// poderá ser utilizada por outros arquivos.
export default CardPerfil;