(() => {
  window.SmartRosaryHowtoI18n.registerLanguage("es", {
    common: {
      navigationLabel: "Navegación del tutorial",
      progressLabel: "Progreso del tutorial",
      language: "Idioma",
      previous: "Anterior",
      next: "Siguiente",
      stepCounter: "Paso {current} de {total}",
    },
    tutorials: {
      onoff: {
        documentTitle: "Smart Rosary: Encender y apagar",
        panelTitle: "Encender y apagar",
        panelBody: "Recorre los pasos con Siguiente o Anterior. La tarjeta señala el botón que se utiliza en cada paso.",
        steps: [
          {
            title: "Pulsar brevemente una vez",
            body: "Pulsa brevemente una vez el botón del dispositivo. SmartRosary se encenderá.",
            off: true,
            pressed: true,
          },
          {
            title: "Se muestra el fondo de pantalla",
            body: "El fondo de pantalla seleccionado se muestra durante 2 segundos.",
            booting: true,
          },
          {
            title: "La pantalla del rosario está activa",
            body: "La pantalla del rosario está activa y lista para usarse.",
            on: true,
          },
          {
            title: "Mantener pulsado 5 segundos para apagar",
            body: "Mantén pulsado el botón del dispositivo durante 5 segundos para apagar SmartRosary.",
            on: true,
            pressed: true,
          },
          {
            title: "SmartRosary está apagado",
            body: "La pantalla está apagada. SmartRosary está completamente apagado.",
            off: true,
          },
        ],
      },
      charging: {
        documentTitle: "Smart Rosary Howto: Carga",
        panelTitle: "Carga",
        panelBody: "Cargue el dispositivo utilizando un cable USB-C. Se enciende automáticamente cuando se conecta.",
        steps: [
          {
            title: "Conectar cable de carga",
            body: "Conecte el cable USB-C en el lado izquierdo del dispositivo.",
            off: true,
            plugged: false,
          },
          {
            title: "El indicador de batería muestra la carga",
            body: "El dispositivo se inicia automáticamente. Tras el inicio, el indicador de batería se anima para mostrar que SmartRosary se está cargando.",
            booting: true,
            plugged: true,
          },
          {
            title: "La carga se indica en el icono de la batería",
            body: "El icono de la batería muestra una animación de carga mientras está conectado.",
            on: true,
            plugged: true,
            charging: true,
          },
          {
            title: "Desconectar apaga el rosario automáticamente",
            body: "Al desconectar el cable, el dispositivo se apaga.",
            off: true,
            plugged: false,
          },
        ],
      },
      nav: {
        documentTitle: "Smart Rosary: Navegación",
        panelTitle: "Navegación",
        panelBody: "Toca el dispositivo y desliza hacia una posición mostrada en el mapa de navegación con forma de cruz.",
        miniNavLabel: "Mapa de navegación con forma de cruz",
        optionalNote: "(opcional si está instalado y activado)",
        historyHint: "Desliza a la izquierda para ir más al pasado y a la derecha para volver hacia ahora. Cambia el período entre día, semana, mes y año.",
        historySwipeHint: "Izquierda para historial anterior, derecha hacia ahora.",
        touchHint: "Toca el dispositivo y desliza en la dirección deseada.",
        intentionPlaceholder: "La intención aparecería en este lugar si estuviera configurada.",
        intentionSubtitle: "Junio 2026",
        intentionItems: ["Mayo 2026", "Junio 2026", "Personal"],
        points: {
          wallpaper: {
            short: "Fondo",
            title: "Cambiar el fondo de pantalla",
            body: "Desliza hacia arriba desde la pantalla del rosario. SmartRosary permanece en la pantalla de oración y muestra el siguiente fondo guardado.",
          },
          mystery: {
            short: "Misterio",
            title: "Seleccionar un Misterio",
            body: "La pantalla del extremo izquierdo permite elegir el número del misterio. Úsala cuando quieras empezar el rosario en una decena concreta.",
          },
          mysteries: {
            short: "Misterios",
            title: "Seleccionar un grupo de Misterios",
            body: "Aquí eliges el grupo de misterios, por ejemplo gozosos, luminosos, dolorosos o gloriosos. Desde este punto, deslizar hacia abajo abre las estadísticas.",
          },
          rosary: {
            short: "Rosario",
            title: "Pantalla del rosario",
            body: "Esta es la pantalla central de oración. Desde aquí accedes a Misterios a la izquierda, Intenciones a la derecha, Ajustes abajo y al fondo arriba.",
          },
          intentions: {
            short: "Intención",
            title: "Ver la Intención actual",
            body: "Si hay intenciones configuradas, aparecen aquí. Así puedes ver la intención de oración seleccionada directamente en el dispositivo.",
          },
          statsHistory: {
            short: "Historial",
            title: "Historial",
            body: "Este mosaico muestra su historial de oraciones para el período seleccionado. Contiene un gráfico de oraciones completadas por grupo de misterios.",
          },
          intentionsList: {
            short: "Intenciones",
            title: "Elegir una Intención",
            body: "Esta lista permite cambiar entre las intenciones de oración disponibles. La selección se muestra después en la pantalla de Intención.",
          },
          statsDurations: {
            short: "Tiempos",
            title: "Estadísticas: tiempos",
            body: "Este panel muestra tiempos medios típicos, como duración por cuenta, decena, rosario y coronilla.",
          },
          statsTotals: {
            short: "Totales",
            title: "Estadísticas: tiempo total",
            body: "Aquí ves el tiempo de oración acumulado. Ayuda a entender cuánto tiempo se ha dedicado a la oración en total.",
          },
          statsSets: {
            short: "Grupos",
            title: "Estadísticas: grupos de Misterios",
            body: "El gráfico muestra cuántas veces se ha rezado cada grupo de misterios, para ver rápidamente la distribución de la práctica.",
          },
          statsParts: {
            short: "Partes",
            title: "Estadísticas: partes I-V",
            body: "Las barras muestran cómo se distribuyen las partes I a V dentro de los grupos de misterios.",
          },
          settings1: {
            short: "Ajustes 1",
            title: "Ajustes 1/7: inicio",
            body: "Elige si el rosario empieza con el misterio seleccionado o continúa desde el último estado guardado.",
          },
          settings2: {
            short: "Ajustes 2",
            title: "Ajustes 2/7: háptica",
            body: "Activa o desactiva la respuesta háptica. Una vibración breve confirma las interacciones.",
          },
          settings3: {
            short: "Ajustes 3",
            title: "Ajustes 3/7: brillo de pantalla",
            body: "Ajusta el brillo de la pantalla. Bájalo para más autonomía o súbelo en entornos luminosos.",
          },
          settings4: {
            short: "Ajustes 4",
            title: "Ajustes 4/7: brillo del fondo",
            body: "Define con qué intensidad se ve el fondo detrás de la pantalla del rosario.",
          },
          settings5: {
            short: "Ajustes 5",
            title: "Ajustes 5/7: orientación",
            body: "Gira la orientación de la pantalla para adaptarla a cómo llevas o sujetas el dispositivo.",
          },
          settings6: {
            short: "Ajustes 6",
            title: "Ajustes 6/7: apagado automático",
            body: "Elige cuánto tiempo espera SmartRosary sin actividad antes de apagarse automáticamente.",
          },
          settings7: {
            short: "Info del dispositivo",
            title: "Ajustes 7/7: información del dispositivo",
            body: "La última página de ajustes muestra el ID del dispositivo, las versiones de firmware e idioma y el código QR de SmartRosary.",
          },
        },
        wallpaper: {
          short: "Fondo",
          title: "Cambiar el fondo de pantalla",
          body: "Desliza hacia arriba en la pantalla del rosario para mostrar el siguiente fondo.",
        },
        settings: {
          short: "Ajustes",
          title: "Abrir Ajustes",
          body: "Desliza hacia abajo en la pantalla del rosario para abrir Ajustes.",
          screenBody: "Selecciona un ajuste",
        },
        deviceInfo: {
          short: "Info del dispositivo",
          title: "Información del dispositivo",
          body: "Muestra el identificador del dispositivo, las versiones de firmware e idioma y un código QR que enlaza con la web de SmartRosary.",
          qrLabel: "Código QR que enlaza con la web de SmartRosary: https://drlechk.github.io/smartrosary/",
        },
        steps: [
          {
            short: "Misterio",
            title: "Seleccionar Misterio",
            body: "Elige el número del misterio utilizado en el rosario.",
          },
          {
            short: "Misterios",
            title: "Seleccionar Misterios",
            body: "Elige el grupo de misterios.",
          },
          {
            short: "Rosario",
            title: "Rosario – posición inicial",
            body: "La pantalla principal de oración y el punto de inicio de la navegación.",
          },
          {
            short: "Intención",
            title: "Ver Intención",
            body: "Muestra la intención de oración seleccionada actualmente.",
          },
          {
            short: "Intenciones",
            title: "Seleccionar Intenciones",
            body: "Elige una intención de oración disponible.",
          },
        ],
      },
    },
  });
})();
