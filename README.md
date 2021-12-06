# Creditcard Fraud Detection
## The project for Software Engineering course


 [![Build Status](https://img.shields.io/badge/Build-passing-success)](https://nodejs.org/en/download/) [![Build Status](https://img.shields.io/badge/Node-v14.17.6-brightgreen)][node] [![Build Status](https://img.shields.io/badge/React-v17.0.2-important)][reactjs] [![Build Status](https://img.shields.io/badge/Redux-v7.5.0-orange)][redux] 
 [![Build Status](https://img.shields.io/badge/MySql-v8.0.0-success)][mysql] [![Build Status](https://img.shields.io/badge/Nestjs-v8.1.0-success)][Nestjs]

Banking name is a web banking 
ReactJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Technology

Banking name uses a number of open source projects to work properly:

- [ReactJS] - library to code frontend
- [Redux] - store state
- [ReactRouter] - Routing screen app
- [Reactstrap] - great UI boilerplate for modern web apps
- [Node] - environment to run service 
- [Nestjs] - fast node.js network app library
- [Docker] - deploy project 
- [TypeORM] - library connect service to database

And BankingName is open source with a [public repository](https://github.com/miqann/PDM-Project/tree/main/FrontEnd/src/components)
 on GitHub.

## Installation

BankingName requires [Node.js](https://nodejs.org/) v10+ to run.
#### Install project
- installing by git clone
```bash
git clone https://github.com/Laughing6901/Web_Credit_Card_Bank.git
```

After clone code successfully you need to create new two file .env (first in service folder and second in frontend folder) and config them as you want with the variable sample on .env.example.

when you done all config file, there are 2 way to run this project: 

First way:

__Notice__ : before running the app following this way you need mysql database server

Frontend:

```bash
cd Frontend
npm i
yarn start
```

Backend:

```bash
cd Backend
npm i
yarn start
```

The second way:
You can run this project on docker by using docker compose

After clone source code, you need to run

```bash
Docker-compose up -d
```

-d is optional if you want to run in the background

After running the application successfully, you can open Database folder and run all the mysql file for the example data

## Author
 [Nguyen Van Dat](https://github.com/Laughing6901)

 [Pham Nguyen Ngoc Mai](https://github.com/MayPham2571)

 [Phan Anh Ngoc](https://github.com/sarah-phan)

 [Le Thi Huynh Giao](https://github.com/huynhgiao1012)

 [Tran Hoang Thinh](https://github.com/tht216)

 [Le Thanh Phuong Nam](https://github.com/NamBobby)

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [git-repo-url]: <https://github.com/Laughing6901/Web_Credit_Card_Bank>
   [Redux]: <http://redux.js.org>
   [MySql]: <http://mysql.com>
   [node]: <http://nodejs.org>
   [Reactstrap]: <http://twitter.github.com/bootstrap/>
   [Nestjs]: <https://docs.nestjs.com>
   [ReactJS]: <https://reactjs.org>
   [Docker]: <https://www.docker.com>
   [ReactRouter]: <https://reactrouter.com>
   [TypeORM]: <https://typeorm.io/#/>