# Laboratorio del navegador

Página local para observar HTML, CSS, JavaScript y HTTP. Código didáctico de apoyo; no requiere instalar dependencias del proyecto.

## Ejecutar

Necesitas Python 3 y un navegador. Desde la raíz del repositorio:

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory ./00-fundamentals/projects/browser-lab
```

Visita http://127.0.0.1:8000/. Detén el servidor con `Ctrl+C`. Si eliges otro puerto, actualiza las URLs. No abras el HTML con doble clic: `file://` no reproduce este intercambio HTTP.

## Archivos

| Archivo | Responsabilidad |
| --- | --- |
| [index.html](index.html) | Estructura y controles |
| [styles.css](styles.css) | Presentación |
| [app.js](app.js) | Contador y solicitudes |
| [data.json](data.json) | Datos servidos como archivo estático |

## Comportamientos esperados

- «Sumar uno» cambia el contador sin solicitar datos al servidor.
- «Cargar datos» solicita `data.json`, recibe 200 y muestra su mensaje.
- «Solicitar recurso inexistente» solicita `missing.json`, recibe 404 y muestra un aviso controlado. Ese archivo está ausente intencionalmente.
- Con el servidor detenido, la carga de datos muestra un fallo de red.
- Una recarga reinicia el contador: no hay persistencia.

El código evita la caché para las solicitudes de datos, comprueba el estado HTTP antes de interpretar JSON y escribe el resultado mediante `textContent`.

El servidor es estático: no hay base de datos, autenticación ni rutas de escritura. Puede devolver HTTP/1.0 según su configuración; úsalo para observar métodos, estados y cabeceras. [Referencia: Python, http.server](https://docs.python.org/3/library/http.server.html).

## Si no funciona

| Síntoma | Qué revisar |
| --- | --- |
| Conexión rechazada | Proceso activo, dirección y puerto |
| Puerto ocupado | Detener tu instancia anterior o elegir otro puerto |
| Listado de archivos inesperado | Ejecutar desde la raíz con el argumento --directory indicado |
| Cambios que no aparecen | Guardar, recargar y revisar caché |
| Botones sin respuesta | Consola y posibles breakpoints activos |
| 404 de missing.json | Es el caso de error previsto |
| Petición adicional de favicon | Puede solicitarla el navegador; no forma parte del ejercicio |

[Consigna del proyecto](../README.md) · [Ejercicios](../../exercises/README.md)
