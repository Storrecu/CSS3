'use strict';

const listadoProyectos = document.querySelector('.proyectos');
const botonAtras = document.querySelector('.btn1');
const infoPagina = document.querySelector('.info-pagina');
const botonSiguiente = document.querySelector('.btn2');
let elementosPorPagina = 6;
let paginaActual = 1;

const cambiarNumElementosPorPag = () => {
  if (window.innerWidth >= 1400) {
    return 27;
  } else if (window.innerWidth >= 1200) {
    return 16;
  } else if (window.innerWidth >= 768) {
    return 8;
  } else if (window.innerWidth >= 390) {
    return 3;
  } else if (window.innerWidth <= 320) {
    return 3;
  } else {
    return 6;
  }
};

const proyectosAcabados = [
  {
    id: '01',
    linkRef: './CSS3/practica1.html',
    imgRef: './imagenes/e1.png',
    imgAlt: 'previsualización práctica 1',
  },
  {
    id: '02',
    linkRef: './CSS3/practica2.html',
    imgRef: './imagenes/e2.png',
    imgAlt: 'previsualización práctica 2',
  },
  {
    id: '03',
    linkRef: './CSS3/practica3.html',
    imgRef: './imagenes/e3.png',
    imgAlt: 'previsualización práctica 3',
  },
  {
    id: '04',
    linkRef: './CSS3/practica4.html',
    imgRef: './imagenes/e4.png',
    imgAlt: 'previsualización práctica 4',
  },
  {
    id: '05',
    linkRef: './CSS3/practica5.html',
    imgRef: './imagenes/e5.png',
    imgAlt: 'previsualización práctica 5',
  },
  {
    id: '06',
    linkRef: './CSS3/practica6.html',
    imgRef: './imagenes/e6.png',
    imgAlt: 'previsualización práctica 6',
  },
  {
    id: '07',
    linkRef: './CSS3/practica7.html',
    imgRef: './imagenes/e7.png',
    imgAlt: 'previsualización práctica 7',
  },
  {
    id: '08',
    linkRef: './CSS3/practica8.html',
    imgRef: './imagenes/e8.png',
    imgAlt: 'previsualización práctica 8',
  },
  {
    id: '09',
    linkRef: './CSS3/practica9.html',
    imgRef: './imagenes/e9.png',
    imgAlt: 'previsualización práctica 9',
  },
  {
    id: '10',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 10',
  },
  {
    id: '11',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 11',
  },
  {
    id: '12',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 12',
  },
  {
    id: '13',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 13',
  },
  {
    id: '14',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 14',
  },
  {
    id: '15',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 15',
  },
  {
    id: '16',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 16',
  },
  {
    id: '17',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 17',
  },
  {
    id: '18',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 18',
  },
  {
    id: '19',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 19',
  },
  {
    id: '20',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 20',
  },
  {
    id: '21',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 21',
  },
  {
    id: '22',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 22',
  },
  {
    id: '23',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 23',
  },
  {
    id: '24',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 24',
  },
  {
    id: '25',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 25',
  },
  {
    id: '26',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 26',
  },
  {
    id: '27',
    linkRef: '',
    imgRef: '',
    imgAlt: 'previsualización práctica 27',
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
    botonAtras.setAttribute('disabled', true);
  } else {
    botonAtras.removeAttribute('disabled');
  }
  // Comprobar que no se pueda avanzar
  if (paginaActual === obtenerPaginasTotales()) {
    botonSiguiente.setAttribute('disabled', true);
  } else {
    botonSiguiente.removeAttribute('disabled');
  }
}

function renderizar() {
  listadoProyectos.innerHTML = '';
  elementosPorPagina = cambiarNumElementosPorPag();
  const primerosProyectos = obtenerPorcionListadoProyectos(paginaActual);
  gestionarBotones();

  console.log('proyectos a mostrar en la pagina 1', primerosProyectos);

  primerosProyectos.forEach((proyecto) => {
    const enlace = document.createElement('a');
    enlace.href = proyecto.linkRef;
    enlace.setAttribute('target', '_blank');
    const imagen = document.createElement('img');
    imagen.src = proyecto.imgRef;
    imagen.alt = proyecto.imgAlt;
    enlace.appendChild(imagen);
    const contenedorImg = document.createElement('div');
    enlace.appendChild(contenedorImg);
    contenedorImg.appendChild(imagen);
    listadoProyectos.appendChild(enlace);
  });

  infoPagina.textContent = `Página ${paginaActual} de ${obtenerPaginasTotales()}`;
}

botonAtras.addEventListener('click', retrocederPagina);
botonSiguiente.addEventListener('click', avanzarPagina);
window.addEventListener('resize', renderizar);

renderizar();
