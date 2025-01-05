# API RESTful com Express e MongoDB

Este é um projeto de API RESTful simples, criado com Node.js, Express e MongoDB. Ele permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em um banco de dados MongoDB, utilizando o Mongoose como ODM (Object Document Mapper).

## Tecnologias Utilizadas

- **Node.js**
- **Express** (para criar o servidor e definir as rotas)
- **MongoDB** (banco de dados NoSQL)
- **Mongoose** (para interagir com o MongoDB)
- **Dotenv** (para gerenciar variáveis de ambiente)
- **Nodemon** (para facilitar o desenvolvimento com recarregamento automático)

## Funcionalidades

A API oferece os seguintes endpoints:

### 1. **POST /person**
Cria uma nova pessoa.

**Body:**
```json
{
  "name": "Nome da pessoa",
  "salary": 3000,
  "approved": true
}
```

###2. **GET /person**
Retorna todas as pessoas cadastradas.

###3. **GET /person/:id**
Retorna uma pessoa específica pelo ID.

###4. **PATCH /person/:id**
Atualiza as informações de uma pessoa específica pelo ID.

**Body:**
```json
{
  "name": "Novo nome",
  "salary": 3500,
  "approved": false
}
```

###5. **DELETE /person/:id**
Deleta uma pessoa pelo ID.

##Instalação

###1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/apirestexpressmongodb.git
```

2. Navegue até a pasta do projeto:

cd apirestexpressmongodb


3. Instale as dependências:

npm install


4. Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente:

DB_USER=seu_usuario
DB_PASSWORD=sua_senha


5. Para iniciar o servidor em modo de desenvolvimento, utilize o comando:

npm start

Isso iniciará o servidor na porta 3000.



Testes

No momento, não há testes automatizados configurados. Para executar um comando de teste padrão, use:

npm test

Licença

Este projeto está licenciado sob a Licença ISC - veja o arquivo LICENSE para mais detalhes.

Autor

Pedro Lyrio - Plyrio Dev

Agora está tudo corretamente dentro da estrutura Markdown, incluindo a formatação de código e os blocos de texto. Se precisar de mais ajustes, é só avisar!

