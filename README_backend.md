## Módulo Backend - Sistema de Referencias Hospitalarias

Este módulo contiene el servidor backend que provee las APIs y gestiona la base de datos del sistema de referencias hospitalarias.

---

##  Requisitos

- Docker y Docker Compose instalados y funcionando
- Motor de base de datos compatible (MySQL, PostgreSQL, etc., según configuración)
- Node.js versión 18.x (incluido en la imagen Docker)

---

##  Pasos de instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Univalle-PSII/sedes-referencias.git
   cd sedes-referencias/backend-nest-dev


## Configuración necesaria
  Archivo .env en la raíz del backend con variables de entorno, por ejemplo:

      DB_HOST=mysql_sedes  # Nombre del contenedor de MySQL
      DB_PORT=3306
      DB_USERNAME=root
      DB_PASSWORD=sedespassword
      DB_DATABASE=sedes_referencia
El Dockerfile del backend debe incluir:

    Imagen base adecuada (por ejemplo, node:18)
    Instalación de dependencias
    Copia del código fuente
    Exposición del puerto (ej. 3000)
    Comando para iniciar el servidor (npm start o equivalente)

## Ejecución
Al ejecutar docker-compose up, el backend se levanta automáticamente y queda accesible en:
    http://localhost:3000

 ## Cómo verificar que funciona
   El backend responde con estado HTTP 200 a las peticiones API, por ejemplo:
   
         GET http://localhost:3000/api/hospitales
         
  Se pueden crear, actualizar y consultar datos desde el frontend sin errores.
  
  Los logs en la terminal Docker muestran que el servidor está corriendo sin errores.
