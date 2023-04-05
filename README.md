Nesse módulo aprendemos como iniciar uma aplicação React do Zero com algumas dependencias de desenvolvimento fundamentais, sem usar nenhum boiler plate.
O resultado final do projeto seria exibir uma lista dos meus repositórios no Github conforme tela abaixo:

![App Github Explorer - Lista de Repos](https://i.imgur.com/br2yplt.png)

### Comandos para rodar o projeto:

Rodar o projeto: ```npm run dev```

#### Antes de iniciar esse projeto é necessário que seja instalado:

- Node.js
- Npm / Yarn
- Visual Studio Code

### Lista de comandos para iniciar um projeto react, react-dom com babel e webpack configurado: 

```npm init -y```

```npm add react```

```npm add react-dom```

```npm add @babel/core @babel/cli @babel/preset-env -D```

```npx babel src/index.js --out-file dist/bundle.js```

```npm add @babel/preset-react -D```

```npx babel src/index.jsx --out-file dist/bundle.js```

```npm add webpack webpack-cli -D```

```npm add babel-loader -D```

```npx webpack```

```npm add html-webpack-plugin -D```

```npx webpack```

```npm add webpack-dev-server -D```

```npx webpack```

```npm add cross-env -D```

```npm run dev```

```npm run build```

```npm add style-loader css-loader -D```

```npm add sass-loader -D```

```npm add node-sass -D```

```npm run dev```

```npm add -D @pmmmwh/react-refresh-webpack-plugin react-refresh```

```npm run dev```

```npm add typescript -D```

```npm install -g typescript```

```npx tsc --init```

```npm add @babel/preset-typescript -D```

```npm add @types/react -D```

```npm add @types/react-dom -D```

### Dependencias que foram instalas e utilizadas nos comandos acima:

- React

- React DOM

- Babel (Babel é um transcompilador JavaScript gratuito e de código aberto que é usado principalmente para converter código ECMAScript 2015+ em código JavaScript compatível com versões anteriores que pode ser executado por mecanismos JavaScript mais antigos.)

- Webpack (O Webpack é um empacotador de módulos gratuito e de código aberto para JavaScript.) 

- SASS (Linguagem de extensão para CSS Pré-processado)

- React Refresh (ao alterar arquivos, o estado se mantem).

OBS: React 18 não usa mais o render, então voltei a versão para o react 17.0.1 para acompanhar as aulas.
