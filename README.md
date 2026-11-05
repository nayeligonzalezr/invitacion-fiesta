# Invitación web · Mi cumpleaños #8 · Red

Invitación temática de **El ascenso de Red**, construida con React y Vite a partir de la plantilla entregada. Se eliminó todo lo correspondiente al bautizo, misa, padrinos, cuenta regresiva y apartados innecesarios. La invitación consta de portada y una sola tarjeta principal.

## Abrir en VS Code

1. Abre esta carpeta (`invitacion-cumpleanos-red`) en Visual Studio Code.
2. Abre la terminal y ejecuta `npm install`.
3. Ejecuta `npm run dev` y abre la dirección local indicada por Vite.
4. Para revisar el empaquetado final, ejecuta `npm run build`.

## Cambiar datos

Edita exclusivamente `src/config/info.jsx` para modificar fecha, hora, lugar, dirección, imágenes y vínculo de Google Maps. **El botón de Google Maps abre una búsqueda basada en la dirección indicada**; revisa el pin que aparece antes de compartirla. El texto «Confirma tu asistencia» es solo texto porque no se proporcionó número de WhatsApp; no se reutilizó el número del bautizo.

## Música

La pista incluida `public/audio/red-theme.mp3` es un instrumental **original**, preparado para esta invitación, y no una canción de la película. Se solicita reproducir de inmediato al pulsar «Abrir invitación» y tiene botón de pausar/reproducir. Si el navegador bloquea la reproducción, aparece un aviso con un botón para activarla manualmente. El MP3 fue recodificado a 44.1 kHz estéreo para mayor compatibilidad. Puedes sustituir el archivo por un MP3 cuyo uso tengas autorizado manteniendo el mismo nombre, o modificar su ruta en `src/config/info.jsx`.

## Vista previa de WhatsApp

La imagen para compartir es `public/preview-red.jpg` (1200×630). La URL absoluta en Open Graph se genera durante `npm run build`, priorizando:

1. `VITE_PUBLIC_SITE_URL`, si la configuras;
2. `VERCEL_PROJECT_PRODUCTION_URL` o `VERCEL_URL`, variables automáticas de Vercel;
3. `http://localhost:4173` solo cuando pruebas localmente.

**Si usas un dominio personalizado**, define `VITE_PUBLIC_SITE_URL=https://tudominio.com` en Vercel → Project Settings → Environment Variables, y vuelve a desplegar. No incluyas una barra final. Asegúrate de que la vista previa `https://tu-dominio/preview-red.jpg` carga públicamente antes de mandar el enlace. WhatsApp puede tardar en actualizar su caché; para compartir usa la URL final, o añade `?v=2` después de actualizar la imagen.

## Despliegue en Vercel

Sube esta carpeta a un repositorio de GitHub nuevo (sin `node_modules` ni `dist`) y en Vercel importa el repositorio. Detectará **Vite**. Configuración: Build Command: `npm run build`; Output Directory: `dist`. Si editas información o imágenes, vuelve a desplegar.

## Archivos principales

- `src/Invite.jsx`: contenido principal, música y apertura de la invitación.
- `src/components/IntroScreen.jsx`: pantalla de portada.
- `src/styles/Invite.css`: todo el diseño, animaciones y adaptación móvil.
- `src/config/info.jsx`: información editable.
- `public/images/`: imágenes para la página.
- `public/preview-red.jpg`: portada visible en enlaces y WhatsApp.
- `public/audio/red-theme.mp3`: instrumental original.

## Nota

Las imágenes de referencia del personaje fueron proporcionadas para este diseño. La invitación no está afiliada ni patrocinada por Disney.
