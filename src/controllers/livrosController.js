import NaoEncontrado from "../err/NaoEncontrado.js";
import { livros, autores} from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res,next) => {
    try {
      const buscaLivros = livros.find();

      req.resultado = buscaLivros;

      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id, {}, { autopopulate: false})
        .populate("autor", "nome");
      if (livroResultados !== null){
        res.status(200).send(livroResultados);
      } else {
        next(new NaoEncontrado("ID do livro não localizado."));
      }
      
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const buscaLivro = await livros.findByIdAndUpdate(id, {$set: req.body});
      if(buscaLivro !== null){
        res.status(200).send({message: "Livro atualizado com sucesso"});
      }else{
        next(new NaoEncontrado("ID do livro não localizado."));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const buscaLivro = await livros.findByIdAndDelete(id);
      if(buscaLivro !== null){
        res.status(200).send({message: "Livro removido com sucesso"});
      }else{
        next(new NaoEncontrado("ID do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      
      const busca = await processaBusca(req.query);

      if (busca !== null){
        const livrosResultado = livros
          .find(busca);

        req.resultado = livrosResultado;
        next();
      }else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  };

}

async function processaBusca(parametros){
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  let busca = {};

  if (editora) busca.editora = {$regex: editora, $options: "i"};
  if (titulo) busca.titulo = {$regex: titulo, $options: "i"};

  if(minPaginas || maxPaginas) busca.numeroPaginas = {};

  if(minPaginas) busca.numeroPaginas.$gte = minPaginas;
  if(maxPaginas) busca.numeroPaginas.$lte = maxPaginas;

  if(nomeAutor) {
    const autor = await autores.findOne({ nome: {$regex: nomeAutor, $options: "i"} });
    
    if(autor !== null){
      busca.autor = autor._id;
    } else {
      busca = null;
    }

  }

  return busca;
}

export default LivroController;