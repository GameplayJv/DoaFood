# DoaFood App

O DoaFood é um aplicativo para registrar e visualizar alimentos disponíveis para doação. Ele permite adicionar alimentos com informações como nome, quantidade, validade e tipo de armazenamento, além de listar os alimentos disponíveis.

## Funcionalidades

- Tela de login para acessar o aplicativo
- Tela inicial com opções de adicionar alimentos e ver a lista de alimentos
- Tela de adicionar alimentos, onde o usuário pode inserir as informações do alimento e salvá-lo
- Tela de lista de alimentos, que exibe os alimentos cadastrados, com opção de exclusão

## Tecnologias utilizadas

- React Native
- Axios para comunicação com a API
- React Navigation para navegação entre telas

## Como executar o projeto

1. Clone o repositório para sua máquina local.
2. Instale as dependências do projeto executando o comando `npm install` ou `yarn install`.
3. Certifique-se de ter um ambiente de desenvolvimento configurado para executar aplicativos React Native (emulador Android/iOS ou dispositivo físico).
4. Inicie o aplicativo executando o comando `npm start` ou `yarn start`.
5. Siga as instruções apresentadas no terminal para executar o aplicativo em um emulador ou dispositivo físico.
6. O usuario do app é : admin
7. A senha é : 123123

## Configuração da API

O aplicativo se comunica com uma API para armazenar os dados dos alimentos. Certifique-se de configurar corretamente a URL da API antes de executar o aplicativo.

1. Abra o arquivo `App.js`.
2. Localize a função `submeterInformacao`.
3. No corpo da função, altere a URL `http://192.168.3.17:3306/alimento` para a URL da sua API.

```javascript
const submeterInformacao = (texto) => {
  Axios.post("URL_DA_SUA_API/alimento", { alimento: texto });
};
