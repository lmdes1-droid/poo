import './PageLogin.css'
import Tipo from '../components/Tipo.jsx';
import InputEmail from '../components/InputEmail.jsx';
import InputSenha from '../components/InputSenha.jsx';
import InputEntrar from '../components/InputEntrar.jsx';
import EntrarGoogle from '../components/EntrarGoogle.jsx';
import EntrarSpotify from '../components/EntrarSpotify.jsx';
import EsqueciSenha from '../components/EsqueciSenha.jsx';

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
                </div>
            </div>
        </div>
    );
}

export default PageLogin;