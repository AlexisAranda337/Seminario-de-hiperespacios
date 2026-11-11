/* ==========================================================================
   03-programa-datos.js · Título y resumen de cada sesión
   --------------------------------------------------------------------------
   Esta es la ÚNICA parte que hay que editar para cambiar los resúmenes.

   · La llave ("2026-08-18") es la fecha de la sesión y debe coincidir
     con el atributo data-id del <li> correspondiente en partes/03-programa.html.
   · "resumen" va entre comillas invertidas (`) y admite varios párrafos:
     basta con dejar una línea en blanco entre ellos.
   · "enlace" (opcional) es la entrada del blog con el resumen completo y los
     datos de conexión; el recuadro muestra un enlace «Ver en el blog ›».
   · Si una sesión aún no tiene resumen, déjalo como "" y el recuadro
     mostrará únicamente el título.

   NOTA: los resúmenes de abajo son versiones breves; el texto completo de
   cada ponente está en el blog.
   ========================================================================== */
var BLOG = "https://seminariocontinuoshiperespacios.wordpress.com/";

window.CONFERENCIAS = {
  /* ---------------------------- Semestre 2026B ---------------------------- */
  "2026-08-18": {
    titulo: `Funciones inducidas al hiperespacio de los subconjuntos cerrados totalmente disconexos`,
    resumen: `Para un espacio de Hausdorff X se estudia el hiperespacio TD(X) de sus subconjuntos cerrados, no vacíos y totalmente disconexos, con la topología de Vietoris. Dada una función continua f, se considera la función inducida TD(f), que envía cada conjunto A en su imagen f(A).

Se analiza la relación entre f y TD(f) respecto de cinco clases de funciones: abiertas, cerradas, cocientes, semiabiertas y ligeras.`,
    enlace: BLOG + "2026/08/",
  },

  "2026-09-22": {
    titulo: `Fuertemente mezclante contra fuertemente grueso transitivo: ¿cuándo coinciden?`,
    resumen: `Se comparan dos nociones de recurrencia en sistemas dinámicos topológicos: ser fuertemente mezclante y ser fuertemente grueso transitivo. En el intervalo y en la circunferencia ambas propiedades son equivalentes, lo que sirve de guía para estudiarlas en gráficas finitas y en continuos unidimensionales más generales.

Después se exploran los límites de esa equivalencia, con ejemplos de espacios donde deja de cumplirse.`,
    enlace: BLOG + "2026/09/",
  },

  "2026-10-20": {
    titulo: `Conexidad local y conexidad cíclica de los hiperespacios Cε(X)`,
    resumen: `Para un continuo X, Cε(X) es el hiperespacio de los subcontinuos de diámetro a lo más ε, con la métrica de Hausdorff.

Primero se presenta un continuo hereditariamente localmente conexo cuyos hiperespacios Cε(X) no son localmente conexos, lo que responde una pregunta de E. L. McDowell. Después se esboza la prueba de que, si X es encadenable, cada Cε(X) es cíclicamente conexo, respondiendo una pregunta de M. E. Aguilera y A. Illanes.`,
    enlace: BLOG + "2026/10/15/conexidad-local-y-conexidad-ciclica-de-los-hiperespacios-c_varepsilonx/",
  },

  /* ---------------------------- Semestre 2026A ---------------------------- */
  "2026-02-17": {
    titulo: `Especificación, obstrucciones y problemas abiertos`,
    resumen: `La especificación, introducida por R. Bowen, es una propiedad de los sistemas dinámicos topológicos que vincula la dinámica del sistema con sus medidas invariantes.

Se da una motivación topológica de la propiedad, se revisa su comportamiento en el intervalo y su relación con la mezcla topológica en espacios unidimensionales: ambas coinciden para funciones continuas en [0,1], pero no en ciertos continuos de dimensión uno. Se cierra con problemas abiertos.`,
    enlace: BLOG + "2026/02/",
  },

  "2026-03-17": {
    titulo: `Continuos tipo árbol y dendritas en límites inversos generalizados`,
    resumen: `Los límites inversos generalizados extienden la noción clásica de límite inverso con funciones de enlace continuas.

La plática reporta resultados recientes en torno a una pregunta de Tom Ingram: qué condiciones suficientes sobre las funciones de enlace en [0,1] garantizan que el límite inverso sea un continuo tipo árbol. Se discuten generalizaciones de teoremas de Ingram y de H. Kato, con ejemplos y contraejemplos.`,
    enlace: BLOG + "2026/03/",
  },

  "2026-04-14": {
    titulo: `Generic objects in topology: an overview`,
    resumen: `Un recorrido por las propiedades genéricas (típicas) en topología desde principios del siglo XX: del trabajo de Mazurkiewicz sobre el subcontinuo genérico del disco cerrado al resultado de Bing (1951), que identifica a ese continuo genérico con el pseudoarco.

También se comenta cómo los sistemas dinámicos han planteado nuevas preguntas en esta área y se presentan problemas abiertos surgidos del trabajo doctoral del ponente.`,
    enlace: BLOG + "2026/04/",
  },

  "2026-05-19": {
    titulo: `Nuevas clases de conjuntos no estorbadores de un continuo`,
    resumen: `Se presentan varios modelos de nuevos hiperespacios construidos a partir de los conjuntos no estorbadores de un continuo, y su relación con otros hiperespacios conocidos, como NB(X) y NB*(X).

Se enuncian algunos resultados relevantes sobre estos nuevos hiperespacios.`,
    enlace: BLOG + "2026/05/",
  },
};
