# Curso Node.js

Código criado a partir das aulas do curso "Node.js: lidando com buscas, filtros, paginação e erros em uma API" da Alura. 

Utilizando middlewares para tratativa de erros reutilizando codigos refatorados, criando filtros e buscas no banco de dados, criando paginação na busca dos dados.


# Rotas

## /livros

Método GET para buscar todos os livros, parâmetros (limite) para número de resultados por página devem ter o valor de um número inteiro, (pagina) para escolher a página mostrada deve ter o valor de um número inteiro, (ordenacao) para ordenar os resultados deve ter o valor de um atributo do livro seguido de ":" e o número 1 para crescente e -1 para decrescente.

Exemplo:

```
http://localhost:3000/livros?limite=5&pagina=2&ordenacao=numeroPaginas:-1
```

Método POST para cadastrar novos livros com o body utilizando os atributos de um livro.

## /livros/:id

Método GET para buscar livro com o ID informado.

Método PUT para atualizar os dados do livro com o ID informado utilizando os atributos passados pelo body.

Método DELETE para deletar o livro com o ID informado.

## /livros/busca

Método GET para buscar livros utilizando os parâmetros (editora, titulo, minPaginas, maxPaginas e nomeAutor) e utilizando os mesmos parâmetros de paginação com (limite, pagina e ordenacao).

Exemplo:

```
http://localhost:3000/livros/busca?nomeAutor=JRR Tolkien&limite=5&pagina=1&ordenacao=numeroPaginas:1
```
## /autores 

Método GET para buscar todos os autores utilizando os mesmos parâmetros de paginação da rota livros (limite, pagina e ordenacao).

Método POST para cadastrar novos autores com os atributos passados pelo body.

## /autores/:id 

Método GET para buscar autor com o ID informado.

Método PUT para atualizar os dados do autor com o ID informado utilizando os atributos passados pelo body.

Método DELETE para deletar o autor com o ID informado.

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
