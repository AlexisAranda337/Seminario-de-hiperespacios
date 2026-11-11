/* ==========================================================================
   02-portada-cuenta-regresiva.js · Tarjeta "Próxima sesión" de la portada
   --------------------------------------------------------------------------
   Lee las conferencias directamente del programa (las tarjetas .mcard):
     · el mes sale del título de la tarjeta (<h3>Agosto.</h3>)
     · el día, del número .d de cada <li>
     · el ponente y la institución, de <b> y <small>
   y cada segundo muestra cuánto falta para la siguiente.

   Para cambiar de semestre basta con editar el programa en index.html y el
   año (ANIO) y la hora (HORA_UTC) de más abajo.
   ========================================================================== */
(function () {
  var tarjeta = document.getElementById("nxt");
  if (!tarjeta) return;

  /* ---------- Configuración ---------- */
  var ANIO = 2026; // año por omisión (cada bloque .months puede indicar data-anio)
  var HORA_UTC = 18; // 18:00 UTC = 12:00 h en la Ciudad de México (UTC-6)
  var DURACION_MS = 2 * 3600000; // la sesión se considera "en curso" 2 horas (12:00 a 14:00)
  var BLOG = "https://seminariocontinuoshiperespacios.wordpress.com/";

  var MESES = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  var DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

  /* ---------- 1. Leer las conferencias del programa ---------- */
  var conferencias = [];

  [].forEach.call(document.querySelectorAll(".mcard"), function (tarjetaMes) {
    // "Agosto." -> "agosto" -> 7 (enero = 0)
    var palabra = (tarjetaMes.querySelector("h3").textContent.match(/[A-Za-zÁÉÍÓÚáéíóú]+/) || [""])[0];
    var mes = MESES.indexOf(palabra.toLowerCase());
    if (mes < 0) return;

    var bloque = tarjetaMes.closest(".months");
    var anio = parseInt((bloque && bloque.dataset.anio) || ANIO, 10);

    // Solo las sesiones confirmadas (con data-id); las "por anunciar" se omiten
    [].forEach.call(tarjetaMes.querySelectorAll("li[data-id]"), function (li) {
      var dia = parseInt(li.querySelector(".d").textContent, 10);
      var titulo = li.querySelector(".tt");
      conferencias.push({
        inicio: Date.UTC(anio, mes, dia, HORA_UTC, 0, 0), // instante exacto de inicio
        anio: anio,
        mes: mes,
        dia: dia,
        ponente: li.querySelector("b").textContent,
        institucion: titulo ? titulo.textContent : li.querySelector("small").textContent,
      });
    });
  });

  // De la más próxima a la más lejana
  conferencias.sort(function (a, b) {
    return a.inicio - b.inicio;
  });

  /* ---------- 2. Actualizar la tarjeta ---------- */
  function porId(id) {
    return document.getElementById(id);
  }
  function dosDigitos(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  function actualizar() {
    var ahora = Date.now();

    // La siguiente conferencia es la primera que aún no termina
    var siguiente = null;
    for (var k = 0; k < conferencias.length; k++) {
      if (conferencias[k].inicio + DURACION_MS > ahora) {
        siguiente = conferencias[k];
        break;
      }
    }

    // Ya pasaron todas: mensaje de cierre y contadores en cero
    if (!siguiente) {
      porId("nxt-n").textContent = "Próxima sesión por anunciar";
      porId("nxt-i").textContent = "Los avisos se publican en el blog del seminario";
      porId("nxt-d").innerHTML = '<a href="' + BLOG + '" target="_blank" rel="noopener">Ir al blog ›</a>';
      porId("nd").textContent = porId("nh").textContent = porId("nm").textContent = porId("ns").textContent = "00";
      return;
    }

    var faltan = Math.max(0, siguiente.inicio - ahora);
    var segundos = Math.floor(faltan / 1000);

    porId("nd").textContent = dosDigitos(Math.floor(segundos / 86400)); // días
    porId("nh").textContent = dosDigitos(Math.floor((segundos % 86400) / 3600)); // horas
    porId("nm").textContent = dosDigitos(Math.floor((segundos % 3600) / 60)); // minutos
    porId("ns").textContent = dosDigitos(segundos % 60); // segundos

    porId("nxt-n").textContent = faltan === 0 ? "En curso: " + siguiente.ponente : siguiente.ponente;
    porId("nxt-i").textContent = siguiente.institucion;

    // "Martes 18 de agosto · 12:00 h"
    var nombreDia = DIAS[new Date(Date.UTC(siguiente.anio, siguiente.mes, siguiente.dia)).getUTCDay()];
    porId("nxt-d").textContent =
      nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1) +
      " " + siguiente.dia + " de " + MESES[siguiente.mes] + " · 12:00 h";
  }

  actualizar();
  setInterval(actualizar, 1000);
})();
