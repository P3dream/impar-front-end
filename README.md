# Projeto Front-end usando React.js

Front-end para o teste técnico da empresa ímpar.

## Funcionalidades

- Componentes Reutilizáveis:
  - Input
  - InputFile
  - MainButton
  - ErrorSnackbar
- Autenticação:
  - Páginas de login e registro
  - Utilização de JWT para autenticação
  - Armazenamento do token no localStorage
  - Interceptação de requisições para incluir o token JWT nos cabeçalhos de autorização
- Interatividade com a API:
  - Utilização do React Query para consultas, mutações e gerenciamento de estado
  - Hooks personalizados para uso da API: useGetCards, usePostCard, usePatchCard, useDeleteCard, usePostLogin, usePostRegister
- Validação de Formulários:
  - Utilização do React Hook Form para validação
  - Validação dos campos do formulário de login e registro, com mensagens de erro personalizadas
- Interface de Usuário:
  - Uso de Tailwind CSS para estilização e design
  - Implementação de modais para operações de criação, edição e exclusão de cards
  - Exibição de resultados de busca com paginação
- Rotas e Navegação:
  - Utilização do React Router para gerenciamento de rotas
  - Definição de rotas para páginas de login, registro e página inicial
- Integração com APIs Externas:
  - Integração com API back-end para operações CRUD em cards
  - Funcionalidades de busca, criação, atualização e exclusão de cards
- Documentação e Organização:
  - Organização do código em módulos e componentes reutilizáveis
  - Documentação interna através de comentários e nomenclaturas claras

## Configuração do Ambiente de Desenvolvimento

1. Clone este repositório:

```bash
cd <Diretório onde deseja baixar o projeto>
git init
git clone https://github.com/P3dream/impar-front-end
cd impar-front-end
```

2. Certifique-se de ter o Node.js instalado. Se não tiver, você pode baixá-lo [aqui](https://nodejs.org/).

3. Instale as dependências do projeto:

```bash
npm install
```
4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Após executar o comando `npm run dev`, você receberá o endereço `http://localhost:{porta}` no console, onde a aplicação está rodando.

## Contato

Se tiver dúvidas, sugestões ou comentários, entre em contato através do email pedropizzi23@Hotmail.com