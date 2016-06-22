# Mustang Boilerplate (Gulp)

Boilerplate para automatizar tarefas comuns no desenvolvimento Front-End.

[![Build Status](https://travis-ci.org/faeliaso/mustang-boilerplate.svg?branch=master)](https://travis-ci.org/faeliaso/mustang-boilerplate)
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](http://faeliaso.mit-license.org/)

### Estrutura
##### Desenvolvimento

```
app/
├── _includes/
│   ├── *.pug
├── _layouts/
│   ├── _default.pug
├── fonts/
├── images/
├── scripts/
│   ├── main.js
├── styles/
│   ├── main.scss
├── apple-touch-icon.png
├── favicon.ico
└── index.pug
```

##### Produção

```
build/
├── fonts/
├── images/
├── scripts/
├── styles/
├── apple-touch-icon.png
├── favicon.ico
└── index.html
```

**Observações**: Foi utilizado `gulp-data` para anexar dados nos arquivos `.pug` (antigo jade) e com isso facilitando o desenvolvimento do projeto. É só configurar o arquivo `_data.json` conforme a demanda.

### Como usar (abra seu terminal/cmd)

```shell
# Clone o repositório
$ git clone https://github.com/faeliaso/mustang-boilerplate.git

# Acesse a pasta clonada
$ cd mustang-boilerplate

# Instale as dependências (npm)
$ npm install

# Instale as dependências (bower)
$ bower install

# Execute o gulp para gerar o build e .tmp
$ gulp

# Execute o serve temporário
$ gulp serve

# ou
# Execute o serve do build
$ gulp serve:dist
```

Pronto! Se tudo ocorrer direitinho seu navegador irá abrir com uma página demo, e depois é só HardWork Papai! ;)

### Contribuir
Abra uma [issue](https://github.com/faeliaso/mustang-boilerplate/issues/new) ou  envie um `pull request`.

```shell
# Fork o repositório!!!
# Crie sua "feature branch"
$ git checkout -b minha-nova-feature

# Comente suas alterações
$ git commit -m 'Comentando minha feature'

# Suba sua branch
$ git push origin minha-nova-feature
```

### Licença
[MIT License](http://faeliaso.mit-license.org/) © faeliaso
