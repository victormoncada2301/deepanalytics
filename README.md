# Deep Analytics Challenge

Este proyecto es una aplicación que muestra el listado de productos .

La aplicación se divide en dos partes:

- **Cliente**: Construido con React, encargado de la interfaz de usuario.
- **Servidor**: Construido con Node.js y Express, que se comunica con la API de MercadoLibre y expone servicios documentados en Swagger.

## Tabla de Contenidos

1. [Tecnologías](#tecnologías)
2. [Características](#características)
3. [Instalación](#instalación)
4. [Scripts Disponibles](#scripts-disponibles)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Testing](#testing)
7. [Swagger API Documentation](#swagger-api-documentation)
8. [Extras](#extras)
9. [Autor](#autor)

## Tecnologías

- **Cliente**: React, Create React App, SCSS
- **Servidor**: Node.js, Express, Axios
- **Documentación**: Swagger
- **Testing**: Jest, React Testing Library

## Características

### Cliente
1. **Listado de productos**: Los usuarios pueden ver una lista de resultados.
   
![image](https://github.com/user-attachments/assets/d754b53e-cdf7-4c73-93b8-34421196b823)

### Servidor
1. **Endpoint del listado de productos **: Proporciona información detallada de todos los productos.
2.  **Endpoint de categoria de productos **: Proporciona información detallada de la categoria de productos 

Se puede revisar la documentación de los servicios en la pagina: http://localhost:3001/api-docs/

![image](https://github.com/user-attachments/assets/2635526f-f513-4185-a010-f556f324f978)

## Instalación

Para instalar y ejecutar este proyecto, sigue estos pasos:

### Requisitos Previos
- Node.js y npm instalados en tu máquina.

### Paso a Paso
1. Clona el repositorio:
    ```bash
    git clone https://github.com/victormoncada2301/spa-mercadolibre.git
    ```

2. Instala las dependencias del cliente y del servidor:
    ```bash
    # Navegar al cliente
    cd client
    npm install

    # Navegar al servidor
    cd ../server
    npm install
    ```

3. Configura el archivo `.env` en el servidor con la URL base de la API de MercadoLibre:
    ```plaintext
    REACT_APP_API_URL=http://localhost:3001
    ```

## Scripts Disponibles

### Cliente

En el directorio `client`, puedes ejecutar:

- `npm start`: Inicia la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000).

### Servidor

En el directorio `server`, puedes ejecutar:

- `npm start`: Inicia el servidor en [http://localhost:3001](http://localhost:3001).

## Estructura del Proyecto

```plaintext
mercadolibre-challenge/
├── client/              # Aplicación de cliente (React)
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   │   ├── Global/  # Componentes globales como Loading y SearchBox
│   │   │   └── Pages/   # Componentes de páginas como ProductDetail y SearchResults
│   ├── .env             # Variables de entorno para el cliente
│   └── package.json
├── server/              # Servidor Node.js y API
│   ├── src/
│   │   ├── controllers/ # Controladores para los endpoints
│   │   ├── routes/      # Definición de rutas del servidor
│   ├── swaggerConfig.js # Configuración de Swagger
│   ├── .env             # Variables de entorno para el servidor
│   └── package.json
└── README.md
