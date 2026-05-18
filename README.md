# VitaGuardia

Demo publica HTML/CSS/JS sin backend, sin login obligatorio y sin base de datos.

## Despliegue en Vercel

1. Sube este repositorio a GitHub, GitLab o Bitbucket.
2. En Vercel, importa el repositorio como proyecto nuevo.
3. Deja el framework como `Other`.
4. Build command: vacio.
5. Output directory: `./`.
6. No configures variables de entorno para esta demo.
7. Despliega.

Tambien puedes desplegar con CLI:

```powershell
npm i -g vercel
vercel
vercel --prod
```

## Nota sobre datos

El formulario de newsletter guarda una confirmacion local en el navegador con `localStorage`. No envia datos a un servidor y no escribe en disco durante el arranque.
