# Módulo Frontend 

Este módulo contiene la interfaz de usuario desarrollada en React con Vite.

---

## Requisitos

- Node.js versión 18.x (incluido en la imagen Docker)
- Docker y Docker Compose instalados y funcionando
- Navegador web moderno (Chrome, Firefox, Edge)

---

## Pasos de instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Univalle-PSII/sedes-referencias.git
   cd sedes-referencias\Frontend-React-Dev

2. Abrir Docker Desktop y asegurarse que está activo.

3. Construir la imagen Docker para el frontend y levantar el contenedor con:

    docker-compose build --no-cache
   
    docker-compose up

## Configuración necesaria
El Dockerfile para frontend está ubicado en:

  Frontend-React-Dev/Dockerfile
  
  Detalles de configuración:
  
    Imagen base: node:18    
    Directorio de trabajo dentro del contenedor: /app   
    Se copian package.json y package-lock.json para instalar dependencias con npm install   
    Se copia todo el código fuente React al contenedor    
    Se expone el puerto 5173 usado por Vite  
    Comando por defecto para arrancar el servidor de desarrollo: npm run dev

## Ejecución
Accede a la aplicación desde tu navegador en:

  http://localhost:5173/inicio


## Cómo verificar que funciona
La página carga sin errores en el navegador.

La navegación entre secciones (Hospitales, Camas, Referencias, Turnos) es fluida.

Los formularios funcionan correctamente (ej. creación de referencias).

No hay errores visibles en la consola del navegador ni en el terminal de Docker.
