const counter = document.querySelector("#counter");
const result = document.querySelector("#result");
const loadData = document.querySelector("#load-data");
const loadMissing = document.querySelector("#load-missing");
let count = 0;

document.querySelector("#increment").addEventListener("click", () => {
  count += 1; // Coloca aquí un breakpoint para observar el valor.
  counter.textContent = String(count);
});

async function requestResource(path) {
  loadData.disabled = true;
  loadMissing.disabled = true;
  result.textContent = "Cargando...";
  try {
    const response = await fetch(path, { cache: "no-store" });
    // fetch recibe las respuestas 404; hay que comprobar el estado.
    if (!response.ok) {
      result.textContent = `HTTP ${response.status}: el servidor respondió, pero no entregó el recurso solicitado.`;
      console.warn("Respuesta HTTP de error:", response.status, path);
      return;
    }
    const data = await response.json();
    result.textContent = `HTTP ${response.status}: ${data.message}`;
  } catch (error) {
    // También podría fallar la interpretación de un JSON modificado.
    result.textContent = "No se pudieron cargar los datos. Revisa Network y Console: puede fallar la conexión o el formato JSON.";
    console.error("Fallo al cargar datos:", error);
  } finally {
    loadData.disabled = false;
    loadMissing.disabled = false;
  }
}

loadData.addEventListener("click", () => requestResource("./data.json"));
loadMissing.addEventListener("click", () => requestResource("./missing.json"));
