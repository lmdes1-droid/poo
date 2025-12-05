import './PageLogin.css'
import Tipo from '../components/Tipo.jsx';
import InputEmail from '../components/InputEmail.jsx';
import InputSenha from '../components/InputSenha.jsx';
import InputEntrar from '../components/InputEntrar.jsx';
import EntrarGoogle from '../components/EntrarGoogle.jsx';
import EntrarSpotify from '../components/EntrarSpotify.jsx';
import EsqueciSenha from '../components/EsqueciSenha.jsx';
import Cadastro from '../components/Cadastro.jsx';
import Frase from '../components/Frase.jsx';

function PageLogin(){
    return(
        <div className='page-login'>
            <div className='form-login'>
                <div className='group-one'>
                    <Tipo/>
                    <InputEmail/>
                    <InputSenha/>
                    <InputEntrar/>
                    <EntrarGoogle/>
                    <EntrarSpotify/>
                    <EsqueciSenha/>
                    <Cadastro/>
                    <Frase/>
                </div>
            </div>
        </div>
    );
}

export default PageLogin;