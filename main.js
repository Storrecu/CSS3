"use strict";

const listadoProyectos = document.querySelector(".proyectos");
const botonAtras = document.querySelector(".btn1");
const infoPagina = document.querySelector(".info-pagina");
const botonSiguiente = document.querySelector(".btn2");
let elementosPorPagina = 6;
let paginaActual = 1;

const cambiarNumElementosPorPag = () => {
  if (screen.width >= 1400) {
    elementosPorPagina = 24;
  } else if (screen.width >= 1200) {
    elementosPorPagina = 12;
  } else if (screen.width >= 768) {
    elementosPorPagina = 6;
  } else if (screen.width <= 320) {
    elementosPorPagina = 3;
  } else {
    elementosPorPagina = 6;
  }
  return elementosPorPagina;
};


const proyectosAcabados = [
  {
    id: "01",
    linkRef: "./practica1.html",
    imgRef: "../imagenes/e1.png",
    imgAlt: "previsualización práctica 1",
  },
  {
    id: "02",
    linkRef: "./practica2.html",
    imgRef: "../imagenes/e2.png",
    imgAlt: "previsualización práctica 2",
  },
  {
    id: "03",
    linkRef: "./practica3.html",
    imgRef: "../imagenes/e3.png",
    imgAlt: "previsualización práctica 3",
  },
  {
    id: "04",
    linkRef: "./practica4.html",
    imgRef: "../imagenes/e4.png",
    imgAlt: "previsualización práctica 4",
  },
  {
    id: "05",
    linkRef: "./practica5.html",
    imgRef: "../imagenes/e5.png",
    imgAlt: "previsualización práctica 5",
  },
  {
    id: "06",
    linkRef: "./practica6.html",
    imgRef: "../imagenes/e6.png",
    imgAlt: "previsualización práctica 6",
  },
  {
    id: "07",
    linkRef: "./practica7.html",
    imgRef: "../imagenes/e7.png",
    imgAlt: "previsualización práctica 7",
  },
  {
    id: "08",
    linkRef: "./practica8.html",
    imgRef: "../imagenes/e8.png",
    imgAlt: "previsualización práctica 8",
  },
  {
    id: "09",
    linkRef: "./practica9.html",
    imgRef: "../imagenes/e9.png",
    imgAlt: "previsualización práctica 9",
  },
  {
    id: "10",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 10",
  },
  {
    id: "11",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 11",
  },
  {
    id: "12",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 12",
  },
  {
    id: "13",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 13",
  },
  {
    id: "14",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 14",
  },
  {
    id: "15",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 15",
  },
  {
    id: "16",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 16",
  },
  {
    id: "17",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 17",
  },
  {
    id: "18",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 18",
  },
  {
    id: "19",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 19",
  },
  {
    id: "20",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 20",
  },
  {
    id: "21",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 21",
  },
  {
    id: "22",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 22",
  },
  {
    id: "23",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 23",
  },
  {
    id: "24",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 24",
  },
  {
    id: "25",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 25",
  },
  {
    id: "26",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 26",
  },
  {
    id: "27",
    linkRef: "",
    imgRef: "",
    imgAlt: "previsualización práctica 27",
  },
];

const avanzarPagina = () => {
  paginaActual += 1;
  renderizar();
};

const retrocederPagina = () => {
  paginaActual -= 1;
  renderizar();
};

function obtenerPorcionListadoProyectos(pagina = 1) {
  const corteDeInicio = (paginaActual - 1) * elementosPorPagina;
  const corteDeFinal = corteDeInicio + elementosPorPagina;
  return proyectosAcabados.slice(corteDeInicio, corteDeFinal);
}

const obtenerPaginasTotales = () => {
  return Math.ceil(proyectosAcabados.length / elementosPorPagina);
};

function gestionarBotones() {
  // Comprobar que no se pueda retroceder
  if (paginaActual === 1) {
    botonAtras.setAttribute("disabled", true);
  } else {
    botonAtras.removeAttribute("disabled");
  }
  // Comprobar que no se pueda avanzar
  if (paginaActual === obtenerPaginasTotales()) {
    botonSiguiente.setAttribute("disabled", true);
  } else {
    botonSiguiente.removeAttribute("disabled");
  }
}

function renderizar() {
  listadoProyectos.innerHTML = "";
  cambiarNumElementosPorPag();
  const primerosCincoProyectos = obtenerPorcionListadoProyectos(paginaActual);
  gestionarBotones();

  console.log("proyectos a mostrar en la pagina 1", primerosCincoProyectos);

  primerosCincoProyectos.forEach((proyecto) => {
    const enlace = document.createElement("a");
    enlace.href = proyecto.linkRef;
    enlace.setAttribute("target", "_blank");
    const imagen = document.createElement("img");
    imagen.src = proyecto.imgRef;
    imagen.alt = proyecto.imgAlt;
    enlace.appendChild(imagen);
    const contenedorImg = document.createElement("div");
    enlace.appendChild(contenedorImg);
    contenedorImg.appendChild(imagen);
    listadoProyectos.appendChild(enlace);
  });

  infoPagina.textContent = `Página ${paginaActual} de ${obtenerPaginasTotales()}`;
}

botonAtras.addEventListener("click", retrocederPagina);
botonSiguiente.addEventListener("click", avanzarPagina);

renderizar();