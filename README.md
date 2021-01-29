# Descripción del Proyecto como Prueba Técnica (Backend)

This project responds to the requirements of the Qrvey technical test. At no point does it pretend to be taken beyond local testing or company testing. This corresponds to the backend of the application.

# - Tech

The backend side project uses different libraries for its operation

- [Express](https://expressjs.com/) - Framework to Node.js
- [mongoose](https://mongoosejs.com/) - ORM to MongoDB
- [Puppeter](https://pptr.dev/) - Help library for creating PDF files
- [Node.js](https://nodejs.org/es/) - Development environment
- [Jest](https://jestjs.io/) - Test Runner of Testing
- [Nodemon](https://www.npmjs.com/package/nodemon) - Server in Watcher mode
- [SheetJs / XLS](https://sheetjs.com/) - Library to generate reports in XLS format
- [Joi](https://joi.dev/api/?v=17.3.0) - Library to validate schemas
- [@hapi/boom](https://hapi.dev/module/boom/) - Library to manage messages and status code
- [Supertest](https://github.com/visionmedia/supertest#readme) - Library to manage integration test

# - Install

The project requires [Node.js] (https://nodejs.org/es/) v10+ to run. Preferably the current LTS version.

#### Install Dependencies

```sh
$ npm install
```

#### Local Project

```sh
$ npm start
```

#### Project with Nodemon

```sh
$ npm start:dev
```

#### Unit and Integration Test

```sh
$ npm test
```

# - Deploy of the App

The app is deployed in a serverless cloud calle [Vercel](https://vercel.com/). The URl of the api deployed is the next:

https://qrvey-test-tecnico.vercel.app/

## Procces to deploy:

- Sign Up in Vercel web page (Just one time). Ver imagen: [Imagen](https://drive.google.com/file/d/1fke8iziN1r0gfV0AufrpwgZ9TdpAQGey/view?usp=sharing)
- Link Vercel with my Github Repo project (Just one time). Ver imagen: [Imagen](https://drive.google.com/file/d/1OmS6OpA17WzqzXACtAeRcHbDL8WBqA1q/view?usp=sharing)
- Config that make a new deploy for each push to main branch (Just one time). Ver Imagen: [Imagen]()
- Config Env vars (Just one time). Ver Imagen: [imagen]()
- Config the file vercel.json (Each time that I need a new config)
- `git push main` (Each time that I want a new deploy)
- App Deployed

## API Documentation

The next url is the api documentation: https://documenter.getpostman.com/view/6619398/TW6tLVD7

## Author:

**Sebastián Vallejo Rojas** - Desarrollador del test técnico
