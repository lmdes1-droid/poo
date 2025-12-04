import './InputEmail.css'

function InputEmail(){
    return(
       <div className='input-email'>
        <span className='text1'>Digite seu e-mail</span>
        <div className='botao'>
        <img className='img1' src="src/components/img/e-mail.png" alt="" />
        </div>
        
       </div>
    );
}

export default InputEmail;