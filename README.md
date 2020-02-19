# React application with Express server

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `server` directory. The server is proxied via the `proxy` key in `package.json`.

## Using this project

Clone the project, change into the directory and install the dependencies.

```bash
git clone https://github.com/philnash/react-express-starter.git
cd react-express-starter
npm install
```

Create a `.env` file for environment variables in your server.

You can start the server on its own with the command:

```bash
npm run server
```

Run the React application on its own with the command:

```bash
npm start
```

Run both applications together with the command:

```bash
npm run dev
```

The React application will run on port 3000 and the server port 3001.


"proxy": "http://localhost:3001",

# Data Base Script

create this table on your Database

CREATE TABLE clientes(
	 ID SERIAL PRIMARY KEY,
	 Nombre varchar(50),
	 Identidad varchar(50),
	 Sexo varchar(1),
	 FechaNacimiento date,
	 Edad int,
	 Observaciones varchar(200)
);

# Configuration

Change configuration(database, user, password) on server/queries.js
