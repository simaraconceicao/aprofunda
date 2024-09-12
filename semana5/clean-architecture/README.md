# como criar um projeto com typescript e jest

## inserir ts

1- instalar typescript glogal

````
npm install -g typescript
````


2- Inciar o projeto com npm

````
npm init -y 
````

3- Instalar dependencias que usaremos no projeto

````
npm install express
````

````
npm install typescript ts-node-dev @types/node @types/express
````

4- Iniciar o tsconfig

````
npx tsc --init
````

5 - Criar script

````
"scripts": {
  "start": "ts-node-dev --respawn src/index.ts"
}
````

## inserir jest


1- Instalar o jest

````
npm install jest ts-jest @types/jest
````

2- Instalar o supertest

````
npm install supertest @types/supertest
````

3- Inicializar o jestconfig

````
npx ts-jest config:init
````

4- criar o script

````
"scripts": {
  "test": "jest"
}
````