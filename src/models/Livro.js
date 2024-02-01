import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"],
      autopopulate: true
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum:{ 
        values:["Editora 1","Editora 2"],
        message: "A editora {VALUE} não é um valor permitido."}
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (value) => {
          return value >= 10 && value <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido {VALUE}"
      }
    }
  }
);

livroSchema.plugin(autopopulate);

const livros= mongoose.model("livros", livroSchema);

export default livros;