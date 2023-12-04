branch html-css-js

fonte: https://github.com/caiorn/CRUD-HTML-CSS-JS-JSON

branch angular

ng new crud-simples

cd crud-simples 
npm i bootstrap@5.3.2 popper@1.0.1 jquery@3.7.1

arquivo angular.json

projects > architect > build > styles 
[
    "src/styles.scss",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
]

projects > architect > build > scripts 
[
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]

ng add @angular/material
npm i @angular/material-moment-adapter@15.2.9
npm i moment

executar o projeto

cd crud-simples
npm i
npm run start