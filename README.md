# Curso Node.js

Código criado a partir das aulas do curso "Node.js: lidando com buscas, filtros, paginação e erros em uma API" da Alura. 

Utilizando middlewares para tratativa de erros reutilizando codigos refatorados, criando filtros e buscas no banco de dados, criando paginação na busca dos dados.


# Rotas #

/livros
Metodo GET para buscar todos os livros, parametros (limite) para numero de resultados por pagina deve ter o valor de um número inteiro, (pagina) para escolher a pagina mostrada deve ter o valor de um número inteiro, (ordenacao) para ordenar os resultados deve ter o valor de um atributo do livro seguito de ":" e o numero 1 para crescente e -1 para decrescente.

Exemplo:

```
http://localhost:3000/livros?limite=5&pagina=2&ordenacao=numeroPaginas:-1
```

Metodo POST para cadastrar novos livros com o body utilizando os atributos de um livro.

/livros/:id
Metodo GET para buscar livro com o id informado.

Metodo PUT para atualizar o livro com o id informado com os atributos passados pelo body.

Metodo DELETE para deletar o livro com o id informado.

/livros/busca
Metodo GET para buscar livros utilizando os parametros (editora, titulo, minPaginas, maxPaginas e nomeAutor) e utilizando os mesmo parametros de paginação com (limite,pagina e ordenacao).

Exemplo:


# Installação
 Para executar o código, é necessário ter o Node.js instalado e instalar as dependências executando o comando correspondente. 

```
npm install
```

Para iniciar o servidor HTTP, utilize o comando.

```
nodemon server.js
ou
npm run dev
```

O banco de dados utilizado foi o MongoDB, em sua versão na nuvem Atlas. Para conectar-se ao banco, deverá ser criado um novo banco de dados com duas coleções: "autores" e "livros".

A estrutura das coleções é a seguinte.

### autores
| Atributo | Tipo |
| ------------- | ------------- |
| nome | String |
| nacionalidade | String |

### livros
| Atributo | Tipo |
| ------------- | ------------- |
| titulo | String |
| editora | String |
| numeroPaginas | int32 |
| autor | Object |

# Sobre
**Autor:** Wiltslon da Silva Pereira

**Email:** wiltslon@gmail.com
