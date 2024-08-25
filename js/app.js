let textoIngresado = document.querySelector("#entradaTexto");
let contenedorTarjeta = document.querySelector(".contenedor-tarjeta");

let botonEncriptar = document.querySelector(".encriptar");
let botonDesencriptar = document.querySelector(".desencriptar");

botonEncriptar.addEventListener("click", () => {
  if (textoIngresado.value === "") {
    alert("El campo de texto no puede estar vacío");
    return;
  }
  contenedorTarjeta.innerHTML = "";
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.innerHTML = `
      <div class="cuerpo-tarjeta">
          <p class="texto-tarjeta">${encriptar(textoIngresado.value)}</p>
      </div>
      <div class="pie-tarjeta">
          <button class="boton-secundario boton-copia">Copiar</button>
      </div>
    `;
  textoIngresado.value = "";
  contenedorTarjeta.appendChild(tarjeta);
  let cuerpoTarjeta = document.querySelector(".cuerpo-tarjeta");
  cuerpoTarjeta.style.justifyContent = "space-between";
  // Cuando se hace click en el boton de copiar se copia el texto encriptado
  tarjeta.querySelector(".boton-copia").addEventListener("click", () => {
    let texto = tarjeta.querySelector("p").innerText;
    navigator.clipboard.writeText(texto);
  });
});

botonDesencriptar.addEventListener("click", () => {
  if (textoIngresado.value === "") {
    alert("El campo de texto no puede estar vacío");
    return;
  }
  contenedorTarjeta.innerHTML = "";
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.innerHTML = `
        <div class="cuerpo-tarjeta">
            <p class="texto-tarjeta">${desencriptar(textoIngresado.value)}</p>
        </div>
        <div class="pie-tarjeta">
          <button class="boton-secundario boton-copia">Copiar</button>
        </div>
      `;
  textoIngresado.value = "";
  contenedorTarjeta.appendChild(tarjeta);
  let cuerpoTarjeta = document.querySelector(".cuerpo-tarjeta");
  cuerpoTarjeta.style.justifyContent = "space-between";
  // Copiar el texto desemcriptado con el boton copiar
  tarjeta.querySelector(".boton-copia").addEventListener("click", () => {
    let texto = tarjeta.querySelector("p").innerText;
    navigator.clipboard.writeText(texto);
  });
});

function encriptar(texto) {
    const encriptaciones = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };
  
    return texto
      .split("") // Convierte la cadena en un array de caracteres.
      .map((letra) => encriptaciones[letra] || letra) // Reemplaza cada letra según el objeto `encriptaciones`.
      .join(""); // Une el array resultante de nuevo en una cadena.
  }

function desencriptar(textoEncriptado) {
    return textoEncriptado
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }
