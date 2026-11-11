# Seminario Permanente de Teoría de Continuos e Hiperespacios

Sitio web estático de una sola página (HTML + CSS + JavaScript) para el seminario
de la Facultad de Ciencias, UAEMéx. Usa la misma arquitectura y el mismo diseño
que el sitio del Seminario Multidisciplinario de Divulgación Científica de
Vanguardia. No necesita servidor, base de datos ni instalación: basta con subir
esta carpeta tal cual.

## Estructura

```
index.html                  Página principal: llama a cada sección como si fuera una función
partes/                     Una sección de la página por archivo:
  01-barra-superior.html      Barra superior y menú desplegable (Objetivos, Comité, Programa)
  02-portada.html             Portada (título, ilustración animada y cuenta regresiva)
  03-programa.html            Programa 2026B y semestre 2026A
  04-introduccion.html        Introducción y antecedentes
  05-temas.html               Nube de temas (enlaza a las categorías del blog)
  06-pie-de-pagina.html       Pie de página
  07-fichas.html              Fichas de información (ventanas emergentes)
css/
  estilos.css               Estilos base (heredados del sitio del Seminario Multidisciplinario)
  hiperespacios.css         Estilos propios de este seminario
js/
  00-cargador.js            Carga cada archivo de partes/ dentro de index.html
  00-escala.js              Ajusta el tamaño de la página según la pantalla
  00-animaciones.js         Efectos de aparición
  01-barra-superior.js      Barra superior, menú desplegable y enlaces internos
  02-portada-cuenta-regresiva.js   Tarjeta "Próxima sesión"
  03-programa-resumenes.js  Recuadro con título, resumen y enlace al blog de cada sesión
  03-programa-datos.js      Títulos y resúmenes (el único archivo que se edita para cambiarlos)
  07-fichas.js              Ventanas de información
img/                        Logotipos institucionales, logo del seminario (SVG) y flores
```

## Cómo probarlo en tu computadora

La página descarga sus partes, así que **debe abrirse desde un servidor**:

- `python3 -m http.server 8000` dentro de la carpeta y abre <http://localhost:8000>, o
- la extensión *Live Server* de Visual Studio Code.

## Tareas frecuentes

**Agregar una sesión**
1. En `partes/03-programa.html`, dentro de la tarjeta del mes, copia un
   `<li data-id="AAAA-MM-DD" tabindex="0">...</li>` y cambia día, ponente,
   modalidad (`<small>`) y título breve (`<i class="tt">`).
2. En `js/03-programa-datos.js` agrega su título, resumen y enlace al blog con la
   misma fecha como llave.
3. Si la tarjeta del mes tenía el aviso «Próximas sesiones por anunciar»
   (`<li class="tba">`), bórralo.

La cuenta regresiva de la portada se actualiza sola (martes a las 12:00 h).

**Completar el Comité Organizador**
En `partes/01-barra-superior.html`, dentro del panel `id="com"`, hay un bloque
comentado «PARA COMPLETAR»: descoméntalo y escribe los nombres.

**Cambiar de semestre (por ejemplo, a 2027A)**
1. Busca "2026B" en `partes/` y actualízalo.
2. Cambia `data-anio` de los bloques `.months` si cambia el año.
3. Actualiza `js/03-programa-datos.js`.

**Agregar un tema**
En `partes/05-temas.html` copia una línea `<a class="tema w2" ...>`; la clase
`w1`…`w5` controla el tamaño.

## Cómo publicarlo

Sube **todo el contenido de la carpeta** a GitHub Pages, Netlify, Cloudflare
Pages o al servidor de la Facultad.
