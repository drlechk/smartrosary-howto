(() => {
  window.SmartRosaryHowtoI18n.registerLanguage("la", {
    common: {
      navigationLabel: "Navigatio institutionis",
      progressLabel: "Progressus institutionis",
      language: "Lingua",
      previous: "Retro",
      next: "Porro",
      stepCounter: "Gradus {current} ex {total}",
    },
    tutorials: {
      onoff: {
        documentTitle: "Smart Rosary: Accendere et exstinguere",
        panelTitle: "Accendere et exstinguere",
        panelBody: "Per gradus Porro vel Retro procede. Chartula globulum in quoque gradu adhibendum indicat.",
        steps: [
          {
            title: "Semel breviter preme",
            body: "Globulum instrumenti semel breviter preme. SmartRosary accenditur.",
            off: true,
            pressed: true,
          },
          {
            title: "Imago fundi ostenditur",
            body: "Imago fundi electa per 2 secundas ostenditur.",
            booting: true,
          },
          {
            title: "Pagina rosarii activa est",
            body: "Pagina rosarii activa est et adhiberi potest.",
            on: true,
          },
          {
            title: "Per 5 secundas preme ut exstinguatur",
            body: "Globulum instrumenti per 5 secundas tene ut SmartRosary exstinguatur.",
            on: true,
            pressed: true,
          },
          {
            title: "SmartRosary exstinctum est",
            body: "Conspicuum obscurum est. SmartRosary omnino exstinctum est.",
            off: true,
          },
        ],
      },
      charging: {
        documentTitle: "Smart Rosary Howto: De incursu",
        panelTitle: "Incursus",
        panelBody: "Instrumentum per filum USB-C incurre. Sponte accenditur cum annectitur.",
        steps: [
          {
            title: "Filum incursionis insere",
            body: "Filum USB-C in latere sinistro instrumenti infige.",
            off: true,
            plugged: false,
          },
          {
            title: "Index pilae onerationem ostendit",
            body: "Instrumentum sponte incipit. Post initium, index pilae animatione ostendit SmartRosary onerari.",
            booting: true,
            plugged: true,
          },
          {
            title: "Incursus in imagine altilium ostenditur",
            body: "Imago altilium incursionem animatam ostendit dum connexum est.",
            on: true,
            plugged: true,
            charging: true,
          },
          {
            title: "Deiunctio rosarium sponte extinguit",
            body: "Cum filum deiungis, instrumentum extinguitur.",
            off: true,
            plugged: false,
          },
        ],
      },
      nav: {
        documentTitle: "Smart Rosary: Navigatio",
        panelTitle: "Navigatio",
        panelBody: "Instrumentum tange et ad locum in tabula navigationis cruciformi monstratum trahe.",
        miniNavLabel: "Tabula navigationis cruciformis",
        optionalNote: "(optionale, si institutum et activum est)",
        touchHint: "Instrumentum tange et in partem desideratam trahe.",
        intentionPlaceholder: "Intentio hoc loco appareret si configurata esset.",
        intentionSubtitle: "Iunius 2026",
        intentionItems: ["Maius 2026", "Iunius 2026", "Propria"],
        points: {
          wallpaper: {
            short: "Fundus",
            title: "Imaginem fundi mutare",
            body: "Ex pagina rosarii sursum trahe. SmartRosary in pagina orationis manet et sequentem imaginem fundi servatam ostendit.",
          },
          mystery: {
            short: "Mysterium",
            title: "Unum Mysterium eligere",
            body: "Pagina extrema sinistra numerum mysterii eligit. Ea utere si rosarium a certa decade incipere vis.",
          },
          mysteries: {
            short: "Mysteria",
            title: "Ordinem Mysteriorum eligere",
            body: "Hic ordo mysteriorum eligitur, ut gaudiosa, luminosa, dolorosa vel gloriosa. Hinc deorsum trahendo statistica aperiuntur.",
          },
          rosary: {
            short: "Rosarium",
            title: "Pagina rosarii",
            body: "Haec est pagina centralis orationis. Hinc ad Mysteria sinistra, ad Intentiones dextra, ad Optiones deorsum, et ad Fundum sursum pervenis.",
          },
          intentions: {
            short: "Intentio",
            title: "Intentionem praesentem videre",
            body: "Si intentiones configuratae sunt, hic apparent. Sic intentionem orationis electam directe in instrumento videre potes.",
          },
          statsHistory: {
            short: "Historia",
            title: "Historia",
            body: "Hic titulus historiam orationum tuarum pro tempore electo ostendit. Tabulam continet orationum completarum per gregem mysteriorum.",
          },
          intentionsList: {
            short: "Intentiones",
            title: "Intentionem eligere",
            body: "Haec index inter intentiones orationis praesto mutare sinit. Electa deinde in pagina Intentionis ostenditur.",
          },
          statsDurations: {
            short: "Tempora",
            title: "Statistica: tempora",
            body: "Haec tessera tempora media ostendit, inter grana, decades, rosarium et coronulam.",
          },
          statsTotals: {
            short: "Summae",
            title: "Statistica: tempus totum",
            body: "Hic tempus orationis congestum vides. Sic facile perspicitur quantum temporis in oratione consumptum sit.",
          },
          statsSets: {
            short: "Ordines",
            title: "Statistica: ordines Mysteriorum",
            body: "Schema ostendit quotiens quisque ordo mysteriorum oratus sit, ut distributio cito legatur.",
          },
          statsParts: {
            short: "Partes",
            title: "Statistica: partes I-V",
            body: "Virgae ostendunt quomodo partes I ad V intra ordines mysteriorum distribuantur.",
          },
          settings1: {
            short: "Opt. 1",
            title: "Optiones 1/7: initium",
            body: "Elige utrum rosarium a mysterio electo incipiat an statum novissime servatum recipiat.",
          },
          settings2: {
            short: "Opt. 2",
            title: "Optiones 2/7: tactus",
            body: "Responsionem hapticam activa vel exstingue. Brevis vibratio actiones confirmat.",
          },
          settings3: {
            short: "Opt. 3",
            title: "Optiones 3/7: claritas screen",
            body: "Claritatem conspicui compone. Minue ad usum diuturniorem vel auge in loco claro.",
          },
          settings4: {
            short: "Opt. 4",
            title: "Optiones 4/7: claritas fundi",
            body: "Constitue quam clare imago fundi post paginam rosarii appareat.",
          },
          settings5: {
            short: "Opt. 5",
            title: "Optiones 5/7: orientatio",
            body: "Orientationem conspicui verte ut modo gerendi vel tenendi instrumenti congruat.",
          },
          settings6: {
            short: "Opt. 6",
            title: "Optiones 6/7: exstinctio automatica",
            body: "Elige quam diu SmartRosary sine actione maneat antequam se ipsum exstinguat.",
          },
          settings7: {
            short: "Info dispositivi",
            title: "Optiones 7/7: notitiae dispositivi",
            body: "Ultima pagina identitatem dispositivi, versiones firmware et linguae, atque codicem QR SmartRosary ostendit.",
          },
        },
        wallpaper: {
          short: "Fundus",
          title: "Imaginem fundi mutare",
          body: "In pagina rosarii sursum trahe ut sequens imago fundi ostendatur.",
        },
        settings: {
          short: "Optiones",
          title: "Optiones aperire",
          body: "In pagina rosarii deorsum trahe ut Optiones aperiantur.",
          screenBody: "Optionem elige",
        },
        deviceInfo: {
          short: "Info dispositivi",
          title: "Notitiae dispositivi",
          body: "Identitatem dispositivi, versiones firmware et linguae, atque codicem QR ad paginam SmartRosary ostendit.",
          qrLabel: "Codex QR ad paginam SmartRosary: https://drlechk.github.io/smartrosary/",
        },
        steps: [
          {
            short: "Mysterium",
            title: "Mysterium eligere",
            body: "Numerum mysterii ad rosarium adhibendum elige.",
          },
          {
            short: "Mysteria",
            title: "Mysteria eligere",
            body: "Ordinem mysteriorum elige.",
          },
          {
            short: "Rosarium",
            title: "Rosarium – locus initialis",
            body: "Pagina principalis orationis et initium navigationis.",
          },
          {
            short: "Intentio",
            title: "Intentionem videre",
            body: "Intentionem orationis nunc electam ostendit.",
          },
          {
            short: "Intentiones",
            title: "Intentiones eligere",
            body: "Intentionem orationis praesto positam elige.",
          },
        ],
      },
    },
  });
})();
