## Comandos utilizados para criar esse projeto:

--Antes de iniciar esse projeto é necessário que seja instalado:

*Node.js = https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f

*Npm / Yarn (eu usei Npm mas no curso do ignite eles estão usando Yarn) = https://efficient-sloth-d85.notion.site/Instalando-o-Yarn-eca6a13be5b3467d8d2f7be15c60f322

*Visual Studio Code = https://efficient-sloth-d85.notion.site/Instalando-e-configurando-o-VSCode-c26cc9f80edf4f3486b9756573038dbb

--Lista de comandos para iniciar um projeto react, react-dom com babel e webpack configurado: 

npm init -y
npm add react
npm add react-dom
npm add @babel/core @babel/cli @babel/preset-env -D
npx babel src/index.js --out-file dist/bundle.js
npm add @babel/preset-react -D
npx babel src/index.jsx --out-file dist/bundle.js
npm add webpack webpack-cli -D
npm add babel-loader -D
npx webpack
npm add html-webpack-plugin -D
npx webpack
npm add webpack-dev-server -D
npx webpack
npm add cross-env -D
npm run dev
npm run build
npm add style-loader css-loader -D
npm add sass-loader -D
npm add node-sass -D
npm run dev


--Dependencias que foram instalas e utilizadas nos comandos acima:

React
React DOM
Babel
Webpack
Sass

*OBS: React 18 não usa mais o render, então voltei a versão para o react 17.0.1 para acompanhar as aulas.
