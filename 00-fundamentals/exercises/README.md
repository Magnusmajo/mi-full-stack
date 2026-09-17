# Prácticas de fundamentos

[Volver al módulo](../README.md)

Resuelve en orden. Crea `answers.md` en esta carpeta para tus respuestas y comandos; no copies resultados que no hayas observado. Cada entrega debe indicar qué esperabas, qué ocurrió y por qué. Usa solo datos de esta práctica.

## 1. Explicar una navegación

Dibuja el recorrido de una visita a `https://example.com/`. Incluye navegador, DNS, conexión, servidor y respuesta. Explica dónde interviene cada uno y qué papel cumplen los recursos adicionales.

**Criterio de revisión:** diferencia Internet de Web y no atribuye a DNS la descarga del HTML.

## 2. URL y DNS

Descompón esta URL ilustrativa:

```text
https://example.com:443/catalogo?categoria=libros&pagina=2#ofertas
```

Indica esquema, host, puerto, ruta, consulta y fragmento. Ejecuta `nslookup example.com`, registra las direcciones observadas y explica por qué podrían cambiar. Si la consulta falla, registra el error y qué investigarías.

**Criterio de revisión:** identifica que el fragmento no se envía en la petición HTTP y que DNS consulta el host, no la URL completa.

## 3. Terminal y Git

Desde la raíz del repositorio:

1. Muestra la ubicación actual y lista los módulos.
2. Entra en `00-fundamentals`, lee su README en UTF-8 y vuelve a la raíz.
3. Ejecuta el ejemplo de creación de notas del [tema de terminal](../terminal/README.md).
4. Agrega una segunda línea a tus notas usando `Add-Content`.
5. Revisa `git status`, prepara únicamente tus notas y consulta `git diff --staged`.
6. Explica la diferencia entre working tree, staging y commit. Revisa cualquier cambio previamente preparado antes de confirmar.

**Criterio de revisión:** reproduce la secuencia, conserva las notas existentes y sabe qué archivos incluiría su commit.

## 4. Leer HTTP

Inicia el [laboratorio](../projects/browser-lab/README.md). Solicita `data.json` con `curl.exe -i` y con `curl.exe -I`.

Registra método, URL, estado, Content-Type y presencia de cuerpo. Compara la respuesta de la terminal con Network. No es necesario que todas las cabeceras de ambos clientes sean idénticas.

**Criterio de revisión:** explica GET frente a HEAD y distingue cabeceras de datos.

## 5. Clasificar fallos

Solicita `/no-existe.json` mientras el servidor funciona. Luego detén el servidor e intenta cargar datos con el botón.

| Situación | ¿Llegó respuesta HTTP? | Estado o error observado | Hipótesis |
| --- | --- | --- | --- |
| Archivo existente | Completar | Completar | Completar |
| Archivo inexistente | Completar | Completar | Completar |
| Servidor detenido | Completar | Completar | Completar |

**Criterio de revisión:** diferencia 404 de conexión rechazada sin inventar un código HTTP para esta última.

## 6. DOM, estilos y red

1. Modifica el título desde Elements y observa qué pasa al recargar.
2. Modifica el título en `index.html`, guarda y recarga. Compara.
3. Inspecciona el modelo de caja de un botón: contenido, padding, borde y margen.
4. Activa una red lenta, solicita datos y anota el efecto; restaura No throttling.
5. Identifica qué acción dispara la solicitud de JSON y cuál solo modifica el contador.

**Criterio de revisión:** distingue un cambio en memoria de un cambio en el archivo y usa evidencia de Network para justificar sus conclusiones.

## 7. Breakpoint

En Sources coloca un breakpoint en `count += 1;`. Recarga si necesitas empezar con cero y pulsa «Sumar uno». Registra el valor antes de ejecutar, después de avanzar una línea y después de actualizar el DOM.

Como desafío, cambia el incremento para sumar dos desde el archivo del repositorio y vuelve a inspeccionar la ejecución.

**Criterio de revisión:** explica por qué cambiar una variable y actualizar su representación visible son instrucciones diferentes.

## Antes de pedir revisión

- [ ] Las respuestas están redactadas con mis palabras.
- [ ] Los comandos incluyen desde qué carpeta se ejecutaron.
- [ ] Distingo resultados esperados de observaciones reales.
- [ ] Registro dudas y errores, además de los aciertos.
- [ ] Revisé el diff y puedo explicar cada modificación.

Tras la revisión, incorpora tus conclusiones en cada tema y enlaza las evidencias en [progress.md](../../docs/progress.md). El material entregado no marca automáticamente el aprendizaje como completado.
