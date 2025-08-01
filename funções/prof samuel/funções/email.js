// Valida email

function  ValidarEmail(email) {
    if ( !email.includes('@') || !email.includes( '. '))  { 
        return {
            valido:false,
            mensagem: "Email deve conter @ e pelo menos um ponto."
        };
      } 
    // ferificr  se @ vem antes do ponto
    let posicaoArroba = email.LastiIndexOf('@');
    let posicaoPonto = email.LastiIndexOf('.');

    if(posicaoArroba >= posicaoPonto) {
        return {
            valido:false,
            mensaagem:"formato de email invalido."

        };

    }
        return {
            valido:true,
            mensagem: "eamail valido."
        };


 }
