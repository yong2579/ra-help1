# c3-ui

## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## Production

Build the application in production mode by running:

```sh
npm run build
```

## DataProvider

The included data provider use [ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server). It fits REST APIs powered by [JSON Server](https://github.com/typicode/json-server), such as [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

You'll find an `.env` file at the project root that includes a `VITE_JSON_SERVER_URL` variable. Set it to the URL of your backend. By default, we set it to targets [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Build

cd C:\Z_DRIVE\c3-ui
az login
az acr build --registry C3DevContainerReg --image c3-ui .
az containerapp create --name c3-ui --resource-group C3-DEV --environment c3-env --image c3devcontainerreg.azurecr.io/c3-ui --target-port 80 --ingress external --registry-server c3devcontainerreg.azurecr.io --query properties.configuration.ingress.fqdn
