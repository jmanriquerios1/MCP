# Learn Catalog MCP

Node.js server implementing the Model Context Protocol (MCP) to expose data from the Microsoft Learn Catalog API.

## Prerequisites
- Node.js 18+
- Azure account
- Git

## Setup
```bash
git clone <repository-url>
cd <project>
npm install
```

## Running Locally
```bash
npm start
```
Browse to `http://localhost:3000/`.

## Deployment to Azure App Service
Use the workflow provided in `.github/workflows/deploy.yml` or deploy manually with Azure CLI.

## openapi.json
Use this file to create a Power Automate Custom Connector.
