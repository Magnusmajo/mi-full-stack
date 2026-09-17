# Navegador y DevTools

[Volver al módulo](../README.md) · [Prácticas](../exercises/README.md)

## ¿Qué es?

El navegador obtiene recursos y los transforma en una interfaz. DevTools es su conjunto de herramientas para inspeccionar la estructura, estilos, peticiones y ejecución de una página.

## ¿Por qué existe?

Ver una pantalla no revela por qué funciona o falla. DevTools permite observar datos concretos: si llegó un archivo, qué regla CSS se aplicó y qué valor tenía una variable al ejecutar una instrucción.

## ¿Cómo funciona?

### Del HTML a los píxeles

El navegador analiza HTML para construir el DOM, una representación en forma de árbol. Analiza CSS y calcula estilos; después determina geometría (layout), pinta y compone el resultado. JavaScript puede modificar el DOM y provocar nuevas actualizaciones.

Los recursos pueden descargarse en paralelo. El código y las hojas de estilo pueden influir en cuándo se procesa o muestra el contenido. El DOM que ves en Elements puede diferir del HTML original porque JavaScript lo modificó. [Referencia: MDN, funcionamiento del navegador](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work).

### Herramientas principales

En Chrome o Edge, abre el laboratorio y pulsa `F12` o `Ctrl+Shift+I`. También puedes hacer clic derecho sobre un elemento y elegir Inspeccionar. Los nombres pueden variar con el idioma.

| Panel | Qué investigar |
| --- | --- |
| Elements / Elementos | DOM, reglas CSS y modelo de caja |
| Console / Consola | Mensajes, errores y expresiones JavaScript |
| Network / Red | Solicitudes, respuestas, tamaños y tiempos |
| Sources / Fuentes | Archivos JavaScript, breakpoints y variables |
| Application / Aplicación | Cookies, almacenamiento y otros datos del sitio |

### Elements: inspección temporal

Selecciona el título del laboratorio. Cambia su texto en el DOM y modifica una regla de color en Styles. Observa el resultado y recarga.

Las modificaciones manuales habituales en Elements afectan la página cargada y se pierden al recargar; para conservarlas, edita el archivo del repositorio. Hay funciones avanzadas de persistencia que no utilizaremos aquí. [Referencia: Chrome, inspección del DOM](https://developer.chrome.com/docs/devtools/dom).

### Network: observar HTTP

Abre Network antes de recargar. Selecciona la petición del documento y revisa Headers, Response y Timing. Busca URL, método, estado y Content-Type. Después pulsa «Cargar datos» y filtra por Fetch/XHR.

Activa Disable cache mientras DevTools permanece abierto para reducir el efecto de la caché. Preserve log conserva entradas durante navegaciones. Prueba un perfil de red lenta y observa la espera; al terminar vuelve a No throttling. No concluyas que el servidor es lento a partir de una única medición local. [Referencia: Chrome, actividad de red](https://developer.chrome.com/docs/devtools/network).

### Console y Sources: investigar ejecución

En la consola del laboratorio:

```javascript
document.title
document.querySelector("#counter").textContent
console.log("Estoy observando el navegador");
```

Son expresiones de JavaScript, no comandos de PowerShell. La segunda consulta el texto visible del contador.

Abre `app.js` en Sources y coloca un breakpoint en la línea `count += 1;`. Pulsa «Sumar uno»: el navegador pausa antes de ejecutar la línea. Inspecciona `count`, avanza con Step over y reanuda. Retira el breakpoint al terminar. [Referencia: Chrome, depuración de JavaScript](https://developer.chrome.com/docs/devtools/javascript).

## Ejemplo guiado

1. Inicia el [laboratorio](../projects/browser-lab/README.md) y abre Network.
2. Recarga y localiza `index.html` o `/`, `styles.css` y `app.js`.
3. Pulsa «Cargar datos». Comprueba que `data.json` devuelve 200 y la página muestra un mensaje.
4. Pulsa «Solicitar recurso inexistente». Observa `missing.json`, su estado 404 y el aviso de la página.
5. Detén el servidor y vuelve a pulsar «Cargar datos». El script solicita sin usar caché: la petición debería fallar por conexión, sin una respuesta HTTP 404.
6. Vuelve a iniciar el servidor y repite la carga.

La página permanece visible al detener el servidor porque ya se cargó en el navegador; eso no prueba que pueda atender nuevas peticiones.

## Errores comunes

- Abrir Network después de una acción y esperar que muestre peticiones anteriores.
- Inspeccionar solo el HTML cuando el fallo está en un recurso adicional.
- Confundir un aviso intencional del laboratorio con un error no controlado.
- Dejar activada una simulación de red lenta y olvidar que altera los tiempos.
- Modificar el DOM y creer que también se editó el archivo fuente.
- Mantener JavaScript pausado y pensar que los botones dejaron de responder.

## Lo que aprendí

Documenta una observación por panel, el valor del contador antes y después de avanzar una línea y cómo distinguiste un 404 de un fallo de conexión.

## Ejercicios

Resuelve los ejercicios 6 y 7 de la [guía de prácticas](../exercises/README.md). Entrega después el [proyecto integrador](../projects/README.md).
