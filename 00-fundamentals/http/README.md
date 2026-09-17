# HTTP

[Volver al módulo](../README.md) · [Prácticas](../exercises/README.md)

## ¿Qué es?

HTTP es un protocolo de aplicación para intercambiar solicitudes y respuestas. El cliente pide actuar sobre un recurso y el servidor comunica el resultado mediante un estado, cabeceras (headers) y, cuando corresponde, un cuerpo.

No transporta solamente páginas: también puede transportar JSON, imágenes y otros datos. Una página suele necesitar varias solicitudes para obtener HTML, CSS, JavaScript y recursos adicionales. [Referencia: MDN, visión general de HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview).

## ¿Por qué existe?

Cliente y servidor necesitan un contrato común aunque estén escritos en lenguajes distintos. El método expresa la intención; el estado comunica el resultado; las cabeceras describen el mensaje y el cuerpo contiene los datos.

## ¿Cómo funciona?

### Petición y respuesta

Ejemplo ilustrativo en formato HTTP/1.1:

```http
GET /data.json HTTP/1.1
Host: 127.0.0.1:8000
Accept: application/json

```

`GET` es el método; `/data.json`, el destino; `Host`, el host con puerto; `Accept`, el tipo de respuesta que prefiere el cliente. La línea vacía separa cabeceras y cuerpo.

Respuesta esquemática, con algunas cabeceras omitidas:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"message":"Hola desde el servidor local"}
```

`Content-Type` describe el contenido enviado; no es lo mismo que `Accept`. El archivo del laboratorio permite observar un intercambio equivalente. La versión que muestre el servidor puede ser HTTP/1.0; no necesitas que coincida con la representación didáctica.

### Métodos y estados

| Método | Intención |
| --- | --- |
| GET | Obtener una representación |
| HEAD | Obtener cabeceras como en GET, sin cuerpo de respuesta |
| POST | Pedir que el recurso procese los datos enviados |
| PUT | Crear o reemplazar el estado del recurso de destino |
| PATCH | Aplicar una modificación parcial |
| DELETE | Solicitar eliminar la asociación del recurso de destino |

GET y HEAD tienen semántica segura: no solicitan modificar el estado del servidor. Idempotente significa que repetir la misma petición tiene el mismo efecto pretendido que hacerla una vez; no exige respuestas idénticas. PUT y DELETE son idempotentes; POST no lo garantiza.

| Familia | Significado | Ejemplos |
| --- | --- | --- |
| 1xx | Información provisional | 100 Continue |
| 2xx | Éxito | 200 OK, 201 Created, 204 No Content |
| 3xx | Redirección o uso de una representación almacenada | 301, 302, 304 Not Modified |
| 4xx | Problema asociado a la solicitud | 400, 401, 403, 404 |
| 5xx | Fallo del servidor al atenderla | 500, 502, 503 |

401 indica falta de credenciales válidas; 403, rechazo de acceso. Un 404 significa que no se encontró una representación del recurso o no se quiere revelar su existencia. Las semánticas de métodos y estados se definen en [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html); PATCH se estudia con más detalle en el módulo de APIs.

### Cabeceras que conviene reconocer

- `Content-Type`: formato del cuerpo.
- `Accept`: formatos de respuesta aceptables para el cliente.
- `Location`: ubicación usada, por ejemplo, en una redirección.
- `Cache-Control`: instrucciones de caché.
- `Set-Cookie`: el servidor solicita almacenar una cookie.
- `Cookie`: el cliente envía cookies aplicables.

HTTP es sin estado: el protocolo no exige recordar peticiones anteriores. Las aplicaciones pueden mantener sesiones mediante cookies y almacenamiento del servidor. Una conexión persistente no equivale a una sesión de usuario. [Referencia: MDN, HTTP y estado](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview).

### HTTP, HTTPS y versiones

HTTPS protege el intercambio mediante TLS: confidencialidad, integridad y autenticación del servidor mediante certificados. No demuestra que el contenido del sitio sea honesto. HTTP/1.1 y HTTP/2 normalmente usan TCP; HTTP/3 utiliza QUIC sobre UDP. Los conceptos de método, estado y cabeceras permanecen, aunque cambie la representación de los mensajes. [Referencia: MDN, evolución de HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Evolution_of_HTTP).

## Ejemplo

Con el laboratorio encendido y desde una segunda terminal de PowerShell:

```powershell
curl.exe -i http://127.0.0.1:8000/data.json
curl.exe -I http://127.0.0.1:8000/data.json
curl.exe -i http://127.0.0.1:8000/no-existe.json
```

En Windows se escribe `curl.exe` para invocar el ejecutable; `curl` puede ser un alias en Windows PowerShell. Si el ejecutable no está disponible, realiza la observación desde Network.

En la primera petición deberías ver 200 y JSON; en la segunda, cabeceras sin cuerpo; en la tercera, 404 y un cuerpo de error HTML. `-i` incluye cabeceras y `-I` realiza HEAD.

El servidor estático no implementa una API CRUD. No esperes que POST, PUT o DELETE creen o modifiquen archivos.

## Errores comunes

- Confundir 404 con falta de conexión: para recibir un 404 hubo una respuesta HTTP.
- Confundir JSON con HTTP: JSON es un formato de datos, HTTP es el protocolo.
- Pensar que un 200 garantiza que la página funciona: JavaScript puede fallar después.
- Esperar que `fetch` rechace automáticamente un 404: el laboratorio revisa `response.ok` para detectarlo. [Referencia: MDN, uso de Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
- Considerar 304 un error: permite reutilizar una representación almacenada.

## Lo que aprendí

Registra una petición real: método, URL, estado, Content-Type y qué contenía el cuerpo. Explica con tus palabras la diferencia entre respuesta HTTP y error de conexión.

## Ejercicios

Resuelve los ejercicios 4 y 5 de la [guía de prácticas](../exercises/README.md). Compara el mismo recurso en terminal y Network antes de elaborar una conclusión.
