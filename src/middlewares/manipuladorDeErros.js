import mongoose from "mongoose";
import ErroBase from "../err/ErroBase.js";
import RequisicaoIncorreta from "../err/RequisicaoIncorreta.js";
import ErroValidacao from "../err/ErroValidacao.js";


// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){
  console.log(erro);
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase){
    erro.enviarResposta(res);
  } else { 
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;