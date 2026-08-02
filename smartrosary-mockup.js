(() => {
  let isSmartRosaryMockupInitialized = false;

  async function initSmartRosaryMockup() {
      if (isSmartRosaryMockupInitialized) return null;

      let statsData = window.MOCKUP_STATS_DATA || null;
      let historyDataBuffer = null;

      if (window.MOCKUP_HISTORY_B64) {
        const binaryString = atob(window.MOCKUP_HISTORY_B64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        historyDataBuffer = bytes.buffer;
      }

      const beads = document.getElementById("beads");
      const controlsToggle = document.getElementById("controls-toggle");
      const controlsPanel = document.getElementById("controls-panel");
      const viewControl = document.getElementById("view-control");
      const languageControl = document.getElementById("language-control");
      const firmwareVersionControl = document.getElementById("firmware-version-control");
      const languageVersionControl = document.getElementById("language-version-control");
      const mysteriesSelectionControl = document.getElementById("mysteries-selection-control");
      const mysterySelectionControl = document.getElementById("mystery-selection-control");
      const timeControl = document.getElementById("time-control");
      const browserTimeControl = document.getElementById("browser-time-control");
      const batteryControl = document.getElementById("battery-control");
      const brightnessControl = document.getElementById("brightness-control");
      const brightnessOutput = document.getElementById("brightness-output");
      const beadControl = document.getElementById("bead-control");
      const beadOutput = document.getElementById("bead-output");
      const bleControl = document.getElementById("ble-control");
      const backgroundControl = document.getElementById("background-control");
      const backgroundOpacityControl = document.getElementById("background-opacity-control");
      const backgroundOpacityOutput = document.getElementById("background-opacity-output");
      const downloadSvg = document.getElementById("download-svg");
      const device = document.querySelector(".device");
      const deviceKnob = document.querySelector(".device__knob");
      const deviceKnobHit = document.querySelector(".device__knob-hit");
      const screenPanels = Array.from(document.querySelectorAll(".screen-panel"));
      const screenPanelByName = Object.fromEntries(screenPanels.map((panel) => [panel.dataset.screen, panel]));
      const navButtons = Array.from(document.querySelectorAll(".nav-button"));
      const advanceRosaryButton = document.querySelector(".nav-center-button");
      const screenBg = document.querySelector(".screen__bg");
      const timeDisplay = document.getElementById("time-display");
      const rosaryMysteryTitle = document.getElementById("rosary-mystery-title");
      const rosaryMysteryScrollText = document.getElementById("rosary-mystery-scroll-text");
      const batteryFill = document.querySelector(".battery__fill");
      const bluetooth = document.querySelector(".bluetooth");
      const mysteriesMenu = document.querySelector(".mysteries__menu");
      const mysteriesTitle = document.getElementById("mysteries-title");
      const mysteryRowEmpty = document.getElementById("mystery-row-empty");
      const mysteryRowPrimary = document.getElementById("mystery-row-primary");
      const mysteryRowSecondary = document.getElementById("mystery-row-secondary");
      const mysteryTitle = document.getElementById("mystery-title");
      const mysteryRoller = document.querySelector(".mystery-view .mystery__roller");
      const mysteryRows = Array.from(document.querySelectorAll(".mystery-view .mystery__row"));
      const intentionsTitle = document.getElementById("intentions-title");
      const intentionsMonth = document.getElementById("intentions-month");
      const intentionsBody = document.getElementById("intentions-body");
      const intentionsListTitle = document.getElementById("intentions-list-title");
      const intentionsListRoller = document.getElementById("intentions-list-roller");
      const intentionsListRows = Array.from(document.querySelectorAll(".intentions-list__roller .mystery__row"));
      const settingSwitches = Array.from(document.querySelectorAll(".settings__switch"));
      const settingsNum = document.getElementById("settings-num");
      const settingsTitle = document.getElementById("settings-title");
      const settingsOptionSelected = document.getElementById("settings-option-selected");
      const settingsOptionLast = document.getElementById("settings-option-last");
      const settings2Num = document.getElementById("settings2-num");
      const settings2Title = document.getElementById("settings2-title");
      const settings2OptionHaptic = document.getElementById("settings2-option-haptic");
      const settings3Num = document.getElementById("settings3-num");
      const settings3Title = document.getElementById("settings3-title");
      const settings3OptionBrightness = document.getElementById("settings3-option-brightness");
      const settings3Value = document.getElementById("settings3-value");
      const settings3Slider = document.getElementById("settings3-slider");
      const settings3SliderFill = document.querySelector(".settings3-view .settings__slider-fill");
      const settings3SliderKnob = document.querySelector(".settings3-view .settings__slider-knob");
      const settings4Num = document.getElementById("settings4-num");
      const settings4Title = document.getElementById("settings4-title");
      const settings4OptionTapBrightness = document.getElementById("settings4-option-tap-brightness");
      const settings4Value = document.getElementById("settings4-value");
      const settings4Slider = document.getElementById("settings4-slider");
      const settings4SliderFill = document.querySelector(".settings4-view .settings__slider-fill");
      const settings4SliderKnob = document.querySelector(".settings4-view .settings__slider-knob");
      const settings5Num = document.getElementById("settings5-num");
      const settings5Title = document.getElementById("settings5-title");
      const settings5OptionOrientation = document.getElementById("settings5-option-orientation");
      const settings6Num = document.getElementById("settings6-num");
      const settings6Title = document.getElementById("settings6-title");
      const settings6OptionShutdown = document.getElementById("settings6-option-shutdown");
      const settings6ShutdownNever = document.getElementById("settings6-shutdown-never");
      const datetimeNum = document.getElementById("datetime-num");
      const datetimeTitle = document.getElementById("datetime-title");
      const datetimeSubtitle = document.getElementById("datetime-subtitle");
      const datetimeRollers = {
        hour: document.querySelector(".datetime__roller--hour"),
        minute: document.querySelector(".datetime__roller--minute"),
        second: document.querySelector(".datetime__roller--second"),
        day: document.querySelector(".datetime__roller--day"),
        month: document.querySelector(".datetime__roller--month"),
        year: document.querySelector(".datetime__roller--year"),
      };
      const settings7Url = document.getElementById("settings7-url");
      const settings7More = document.getElementById("settings7-more");
      const settings7Qr = document.getElementById("settings7-qr");
      const fwupdateTitle = document.getElementById("fwupdate-title");
      const fwupdateFile = document.getElementById("fwupdate-file");
      const fwupdatePercent = document.getElementById("fwupdate-percent");
      const fwupdateBytes = document.getElementById("fwupdate-bytes");
      const statsTitles = Array.from(document.querySelectorAll(".stats__title"));
      const statsDurationsSubtitle = document.getElementById("stats-durations-subtitle");
      const statsTotalsSubtitle = document.getElementById("stats-totals-subtitle");
      const statsSetsSubtitle = document.getElementById("stats-sets-subtitle");
      const statsPartsSubtitle = document.getElementById("stats-parts-subtitle");
      const statsAvgBead = document.getElementById("stats-avg-bead");
      const statsAvgDecade = document.getElementById("stats-avg-decade");
      const statsAvgRosary = document.getElementById("stats-avg-rosary");
      const statsAvgChaplet = document.getElementById("stats-avg-chaplet");
      const statsTotalRosary = document.getElementById("stats-total-rosary");
      const statsTotalDecades = document.getElementById("stats-total-decades");
      const statsTotalBeads = document.getElementById("stats-total-beads");
      const statsTotalChaplet = document.getElementById("stats-total-chaplet");
      const statsSetLegend = document.getElementById("stats-set-legend");
      const statsPartsBars = document.getElementById("stats-parts-bars");
      const statsPartKey = document.getElementById("stats-part-key");
      const statsHistoryTitle = document.getElementById("stats-history-title");
      const statsHistorySelector = document.getElementById("stats-history-selector");
      const statsHistoryLabel = document.getElementById("stats-history-label");
      const statsHistoryChart = document.getElementById("stats-history-chart");
      const statsHistoryLegend = document.getElementById("stats-history-legend");
      const requiredElements = [
        beads,
        controlsToggle,
        controlsPanel,
        viewControl,
        languageControl,
        firmwareVersionControl,
        languageVersionControl,
        mysteriesSelectionControl,
        mysterySelectionControl,
        timeControl,
        browserTimeControl,
        batteryControl,
        brightnessControl,
        brightnessOutput,
        beadControl,
        beadOutput,
        bleControl,
        backgroundControl,
        backgroundOpacityControl,
        backgroundOpacityOutput,
        downloadSvg,
        device,
        deviceKnob,
        deviceKnobHit,
        advanceRosaryButton,
        screenBg,
        timeDisplay,
        rosaryMysteryTitle,
        rosaryMysteryScrollText,
        batteryFill,
        bluetooth,
        mysteriesMenu,
        mysteriesTitle,
        mysteryRowEmpty,
        mysteryRowPrimary,
        mysteryRowSecondary,
        mysteryTitle,
        mysteryRoller,
        intentionsTitle,
        intentionsMonth,
        intentionsBody,
        intentionsListTitle,
        intentionsListRoller,
        settingsNum,
        settingsTitle,
        settingsOptionSelected,
        settingsOptionLast,
        settings2Num,
        settings2Title,
        settings2OptionHaptic,
        settings3Num,
        settings3Title,
        settings3OptionBrightness,
        settings3Value,
        settings3Slider,
        settings3SliderFill,
        settings3SliderKnob,
        settings4Num,
        settings4Title,
        settings4OptionTapBrightness,
        settings4Value,
        settings4Slider,
        settings4SliderFill,
        settings4SliderKnob,
        settings5Num,
        settings5Title,
        settings5OptionOrientation,
        settings6Num,
        settings6Title,
        settings6OptionShutdown,
        settings6ShutdownNever,
        settings7Url,
        settings7More,
        settings7Qr,
        fwupdateTitle,
        fwupdateFile,
        fwupdatePercent,
        fwupdateBytes,
        statsDurationsSubtitle,
        statsTotalsSubtitle,
        statsSetsSubtitle,
        statsPartsSubtitle,
        statsAvgBead,
        statsAvgDecade,
        statsAvgRosary,
        statsAvgChaplet,
        statsTotalRosary,
        statsTotalDecades,
        statsTotalBeads,
        statsTotalChaplet,
        statsSetLegend,
        statsPartsBars,
        statsPartKey,
        statsHistoryTitle,
        statsHistorySelector,
        statsHistoryLabel,
        statsHistoryChart,
        statsHistoryLegend,
      ];

      if (requiredElements.some((element) => !element) || intentionsListRows.length === 0 || statsTitles.length === 0) return null;

      isSmartRosaryMockupInitialized = true;
      const mysteriesCopy = {
        pl: {
          title: "Tajemnice",
          mysteryTitle: "Tajemnica",
          settingsNum: "1/8",
          settingsTitle: "Ustawienia",
          settingsOptionSelected: "Rozpocznij różaniec z wybraną Tajemnicą",
          settingsOptionLast: "Rozpocznij różaniec z ostatnim stanem",
          settings2Num: "2/8",
          settings2Title: "Ustawienia",
          settings2OptionHaptic: "Haptyczna informacja zwrotna (wibracja)",
          settings3Num: "4/8",
          settings3Title: "Ustawienia",
          settings3OptionBrightness: "Jasność ekranu",
          settings3Value: "60%",
          settings4Num: "6/8",
          settings4Title: "Ustawienia",
          settings4OptionTapBrightness: "Jasność tapety",
          settings4Value: "0%",
          settings5Num: "7/8",
          settings5Title: "Ustawienia",
          settings5OptionOrientation: "Orientacja ekranu",
          settings6Num: "3/8",
          settings6Title: "Ustawienia",
          settings6OptionShutdown: "Auto wyłączenie",
          settings7Url: "rosary-A1B2D3E4",
          settings7More: "v1.28 · pl v1.0",
          fwupdateTitle: "Aktualizacja systemu",
          fwupdateFile: "firmware.bin",
          fwupdatePercent: "20%",
          fwupdateBytes: "(294 kB / 1471 kB)",
          empty: "-",
          primary: "radosne (pon./so.)",
          secondary: "światła (czw.)",
        },
        en: {
          title: "Mysteries",
          mysteryTitle: "Mystery",
          settingsNum: "1/8",
          settingsTitle: "Settings",
          settingsOptionSelected: "Start rosary with selected Mystery",
          settingsOptionLast: "Start rosary with last state",
          settings2Num: "2/8",
          settings2Title: "Settings",
          settings2OptionHaptic: "Haptic feedback (vibration)",
          settings3Num: "4/8",
          settings3Title: "Settings",
          settings3OptionBrightness: "Screen brightness",
          settings3Value: "60%",
          settings4Num: "6/8",
          settings4Title: "Settings",
          settings4OptionTapBrightness: "Wallpaper brightness",
          settings4Value: "0%",
          settings5Num: "7/8",
          settings5Title: "Settings",
          settings5OptionOrientation: "Screen orientation",
          settings6Num: "3/8",
          settings6Title: "Settings",
          settings6OptionShutdown: "Auto shutdown",
          settings7Url: "rosary-A1B2D3E4",
          settings7More: "v1.28 · en v1.0",
          fwupdateTitle: "System update",
          fwupdateFile: "firmware.bin",
          fwupdatePercent: "20%",
          fwupdateBytes: "(294 kB / 1471 kB)",
          empty: "-",
          primary: "joyful (Mon./Sat.)",
          secondary: "luminous (Thu.)",
        },
        de: {
          title: "Geheimnisse",
          mysteryTitle: "Geheimnis",
          settingsNum: "1/8",
          settingsTitle: "Einstellungen",
          settingsOptionSelected: "Rosenkranz mit gewähltem Geheimnis starten",
          settingsOptionLast: "Rosenkranz mit letztem Zustand starten",
          settings2Num: "2/8",
          settings2Title: "Einstellungen",
          settings2OptionHaptic: "Haptische Rückmeldung (Vibration)",
          settings3Num: "4/8",
          settings3Title: "Einstellungen",
          settings3OptionBrightness: "Bildschirmhelligkeit",
          settings3Value: "60%",
          settings4Num: "6/8",
          settings4Title: "Einstellungen",
          settings4OptionTapBrightness: "Hintergrundhelligkeit",
          settings4Value: "0%",
          settings5Num: "7/8",
          settings5Title: "Einstellungen",
          settings5OptionOrientation: "Bildschirmausrichtung",
          settings6Num: "3/8",
          settings6Title: "Einstellungen",
          settings6OptionShutdown: "Automatisches Herunterfahren",
          settings7Url: "rosary-A1B2D3E4",
          settings7More: "v1.28 · de v1.0",
          fwupdateTitle: "Systemaktualisierung",
          fwupdateFile: "firmware.bin",
          fwupdatePercent: "20%",
          fwupdateBytes: "(294 kB / 1471 kB)",
          empty: "-",
          primary: "freudenreiche (Mo./Sa.)",
          secondary: "lichtreiche (Do.)",
        },
      };
      const totalBeads = 59;
      const languageFixtures = Object.fromEntries(
        (window.SMARTROSARY_LANG_FIXTURES ?? []).map((fixture) => {
          const namespaces = {};

          fixture.state.entries.forEach((entry) => {
            namespaces[entry.namespace] ??= {};
            namespaces[entry.namespace][entry.key] = entry.value;
          });

          return [fixture.code, namespaces];
        }),
      );
      const intentionFixtures = window.SMARTROSARY_INTENTIONS ?? {};
      const intentionsSelectionControl = document.createElement("select");
      const mysteryNumberEntries = ["-", "I", "II", "III", "IV", "V"];
      const sets = statsData?.stats?.sets || {};
      const setsParts = statsData?.setsParts || {};
      const statsSetValues = [
        sets.none || 0,
        sets.joyful || 0,
        sets.luminous || 0,
        sets.sorrowful || 0,
        sets.glorious || 0,
        (statsData?.stats?.totals?.chaplets || 0) * 5
      ];
      const statsSetColors = ["#808080", "#3399ff", "#ffcc00", "#cc0000", "#00cc00", "#8b4513"];
      const statsPartValues = [
        setsParts.none || [0,0,0,0,0],
        setsParts.joyful || [0,0,0,0,0],
        setsParts.luminous || [0,0,0,0,0],
        setsParts.sorrowful || [0,0,0,0,0],
        setsParts.glorious || [0,0,0,0,0],
      ];
      const statsPartColors = [
        ["#9e9e9e", "#8f8f8f", "#808080", "#717171", "#626262"],
        ["#99ccff", "#66b2ff", "#3399ff", "#1a7fd6", "#0066cc"],
        ["#ffff80", "#ffdb4d", "#ffcc00", "#e6b800", "#cc9a00"],
        ["#ff6666", "#ff3333", "#cc0000", "#990000", "#730000"],
        ["#66ff66", "#33e633", "#00cc00", "#00a300", "#007a00"],
      ];
      const loopStart = 4;
      const beadsPerDecade = 10;
      const screenBase = 240;
      const radius = 110;
      const cx = 120;
      const cy = 120;
      const angleStep = 360 / (totalBeads - loopStart);
      const qrRows = "1fdd3d7f,105ccb41,17565a5d,175aa45d,17407c5d,10531641,1fd5557f,00097d00,19c2ca2f,0f2d7c7f,11c3e4c1,1a869c0b,0d559d82,1508fc7f,06dc24ad,0ead4dd3,1e4eea82,1025307b,03ebf1b5,013a9c23,1a5d99f9,0018ff11,1fc43f5d,10556f12,175adbfa,17493421,1743fa8f,105a9d2b,1fd5997a"
        .split(",")
        .map((row) => Number.parseInt(row, 16));
      const tailPositions = [
        [cx, 2 * radius - 38],
        [cx, 2 * radius - 26],
        [cx, 2 * radius - 14],
        [cx, 2 * radius - 2],
      ];
      let browserTimeTimer = null;
      let currentView = viewControl.value;
      let transitionTimer = null;
      let currentHistoryBucketIndex = 1;
      let currentHistoryOffset = 0;
      const historyBucketKeys = ["l045", "l046", "l047", "l048"];
      const historyBucketFallbacks = ["day", "week", "month", "year"];
      const historyBucketBars = [12, 7, 31, 12];

      function formatHistoryLabel(bucketIndex, startTs, endTs) {
         const s = new Date(startTs * 1000);
         const e = new Date((endTs - 1) * 1000);

         const fmt = (d) => `${d.getDate()}.${d.getMonth() + 1}.${String(d.getFullYear()).slice(-2).padStart(2, '0')}`;
         const fmtMY = (d) => `${d.getMonth() + 1}.${String(d.getFullYear()).slice(-2).padStart(2, '0')}`;

         if (bucketIndex === 0) {
            return fmt(s);
         } else if (bucketIndex === 1) {
            return `${fmt(s)}-${fmt(e)}`;
         } else if (bucketIndex === 2) {
            return fmtMY(s);
         } else if (bucketIndex === 3) {
            return `${s.getFullYear()}`;
         }
         return "";
      }

      function getHistoryDataset(bucketIndex, offset) {
        const numBars = historyBucketBars[bucketIndex];
        const data = Array.from({length: numBars}, () => ({total: 0, segments: []}));

        const anchorTime = Math.floor(Date.now() / 1000);
        const anchorDate = new Date(anchorTime * 1000);
        let startTs = 0;
        let endTs = 0;

        if (bucketIndex === 0) {
          anchorDate.setDate(anchorDate.getDate() + offset);
          startTs = new Date(anchorDate.getFullYear(), anchorDate.getMonth(), anchorDate.getDate()).getTime() / 1000;
          endTs = startTs + 86400;
        } else if (bucketIndex === 1) {
          const daysSinceSunday = anchorDate.getDay();
          anchorDate.setDate(anchorDate.getDate() - daysSinceSunday + (offset * 7));
          startTs = new Date(anchorDate.getFullYear(), anchorDate.getMonth(), anchorDate.getDate()).getTime() / 1000;
          endTs = startTs + 7 * 86400;
        } else if (bucketIndex === 2) {
          anchorDate.setMonth(anchorDate.getMonth() + offset);
          startTs = new Date(anchorDate.getFullYear(), anchorDate.getMonth(), 1).getTime() / 1000;
          endTs = new Date(anchorDate.getFullYear(), anchorDate.getMonth() + 1, 1).getTime() / 1000;
        } else if (bucketIndex === 3) {
          anchorDate.setFullYear(anchorDate.getFullYear() + offset);
          startTs = new Date(anchorDate.getFullYear(), 0, 1).getTime() / 1000;
          endTs = new Date(anchorDate.getFullYear() + 1, 0, 1).getTime() / 1000;
        }

        const label = formatHistoryLabel(bucketIndex, startTs, endTs);
        if (!historyDataBuffer) return { data, label };

        const view = new DataView(historyDataBuffer);
        const recordSize = 5;
        const recordCount = Math.floor(historyDataBuffer.byteLength / recordSize);

        for (let i = 0; i < recordCount; i++) {
          const ts = view.getUint32(i * recordSize, true);
          const b0 = view.getUint8(i * recordSize + 4);

          if (ts < startTs || ts >= endTs) continue;

          const intention = (b0 & 1) === 1;
          const noDateTime = ((b0 >> 1) & 1) === 1;
          if (noDateTime) continue;
          const dec = (b0 >> 2) & 7;
          const pk = (b0 >> 5) & 7;

          let idx = 0;
          if (bucketIndex === 0) {
            idx = Math.floor((ts - startTs) / (2 * 3600));
          } else if (bucketIndex === 1 || bucketIndex === 2) {
            idx = Math.floor((ts - startTs) / 86400);
          } else if (bucketIndex === 3) {
            const d = new Date(ts * 1000);
            idx = d.getMonth();
          }

          if (idx >= 0 && idx < numBars) {
            let segmentSet = 0, segmentPart = 0, weight = 1;
            if (dec === 0) {
               segmentSet = 5;
               segmentPart = 0;
               weight = 5;
            } else {
               segmentSet = (pk <= 4) ? pk : 0;
               segmentPart = (dec >= 1 && dec <= 5) ? dec - 1 : 0;
            }

            let barData = data[idx];
            let existingSeg = barData.segments.find(s => s.set === segmentSet && s.part === segmentPart && s.intention === intention);
            if (existingSeg) {
              existingSeg.count += weight;
            } else {
              barData.segments.push({ count: weight, set: segmentSet, part: segmentPart, intention });
            }
            barData.total += weight;
          }
        }

        return {
          data: data,
          label: formatHistoryLabel(bucketIndex, startTs, endTs)
        };
      }
      let currentRosaryMysteryScrollKey = "";
      let currentIntentionId = null;
      const navigationMap = {
        mystery: { right: "mysteries" },
        mysteries: { left: "mystery", right: "rosary", down: "stats-history" },
        "stats-history": { up: "mysteries", down: "stats-durations" },
        "stats-durations": { up: "stats-history", down: "stats-totals" },
        "stats-totals": { up: "stats-durations", down: "stats-sets" },
        "stats-sets": { up: "stats-totals", down: "stats-parts" },
        "stats-parts": { up: "stats-sets" },
        rosary: { left: "mysteries", right: "intentions", down: "settings1" },
        intentions: { left: "rosary", right: "intentions-list" },
        "intentions-list": { left: "intentions" },
        settings1: { up: "rosary", down: "settings2" },
        settings2: { up: "settings1", down: "settings6" },
        settings6: { up: "settings2", down: "settings3" },
        settings3: { up: "settings6", down: "datetime" },
        datetime: { up: "settings3", down: "settings4" },
        settings4: { up: "datetime", down: "settings5" },
        settings5: { up: "settings4", down: "settings7" },
        settings7: { up: "settings5" },
      };
      const screenPositions = {
        mystery: { x: -2, y: 0 },
        mysteries: { x: -1, y: 0 },
        "stats-history": { x: -1, y: 1 },
        "stats-durations": { x: -1, y: 2 },
        "stats-totals": { x: -1, y: 3 },
        "stats-sets": { x: -1, y: 4 },
        "stats-parts": { x: -1, y: 5 },
        rosary: { x: 0, y: 0 },
        intentions: { x: 1, y: 0 },
        "intentions-list": { x: 2, y: 0 },
        settings1: { x: 0, y: 1 },
        settings2: { x: 0, y: 2 },
        settings6: { x: 0, y: 3 },
        settings3: { x: 0, y: 4 },
        datetime: { x: 0, y: 5 },
        settings4: { x: 0, y: 6 },
        settings5: { x: 0, y: 7 },
        settings7: { x: 0, y: 8 },
        fwupdate: { x: 1, y: 6 },
      };
      const transitionClasses = [
        "screen-panel--enter-left",
        "screen-panel--enter-right",
        "screen-panel--enter-up",
        "screen-panel--enter-down",
        "screen-panel--exit-left",
        "screen-panel--exit-right",
        "screen-panel--exit-up",
        "screen-panel--exit-down",
        "screen-panel--exiting",
        "screen-panel--no-transition",
      ];

      const toPercent = (value) => `${(value / screenBase) * 100}%`;
      const formatClockTime = (date) => date.toLocaleTimeString("en-GB", { hour12: false });
      const normalizeIndex = (index, length) => ((index % length) + length) % length;
      const getLanguageData = () => languageFixtures[languageControl.value] ?? languageFixtures.pl;
      const getLangText = (key, fallback = "") => getLanguageData()?.lang?.[key] ?? fallback;
      const getMysteriesEntries = () => {
        const entries = getLanguageData()?.mysteries?.mS?.split("\n").filter(Boolean) ?? ["-", "radosne (pon.|so.)", "świałta (czw.)"];

        return entries.length > 0 ? entries : ["-"];
      };
      const fallbackIntentions = {
        code: "en",
        selected: "2026-06",
        entries: [
          {
            id: "2026-06",
            label: "June 2026",
            body: "Let us pray that our communities may recognize Christ's presence in daily life and respond with prayer and service.",
          },
        ],
      };

      for (let i = 0; i < totalBeads; i += 1) {
        const dot = document.createElement("span");
        const isTail = i < 4;
        const isRed = i === 0 || (!isTail && (i - loopStart) % (beadsPerDecade + 1) === 0);
        const size = isRed ? 10 : 8;
        let x;
        let y;

        dot.className = `bead bead--${isRed ? "red" : "blue"}`;
        dot.dataset.bead = String(i + 1);
        dot.addEventListener("pointerdown", toggleBeadActivation);

        if (isTail) {
          [x, y] = tailPositions[i];
        } else {
          const angle = (90 + (i - loopStart) * angleStep) * (Math.PI / 180);
          x = cx + Math.trunc(radius * Math.cos(angle));
          y = cy + Math.trunc(radius * Math.sin(angle));
        }

        dot.style.left = toPercent(x - size / 2);
        dot.style.top = toPercent(y - size / 2);
        dot.style.width = toPercent(size);
        dot.style.height = toPercent(size);
        beads.appendChild(dot);
      }

      beadControl.max = String(totalBeads);

      function renderSettingsQr() {
        const ns = "http://www.w3.org/2000/svg";
        const group = document.createElementNS(ns, "g");

        group.setAttribute("fill", "#000");
        group.setAttribute("transform", "translate(4 4)");

        qrRows.forEach((row, y) => {
          for (let x = 0; x < 29; x += 1) {
            if ((row & (1 << (28 - x))) === 0) continue;

            const module = document.createElementNS(ns, "rect");
            module.setAttribute("x", String(x));
            module.setAttribute("y", String(y));
            module.setAttribute("width", "1");
            module.setAttribute("height", "1");
            group.appendChild(module);
          }
        });

        settings7Qr.appendChild(group);
      }

      function updateTime() {
        timeDisplay.textContent = timeControl.value || "18:25:09";
      }

      function formatTwoDigits(value) {
        return String(value).padStart(2, "0");
      }

      function setDatetimeRoller(roller, values) {
        if (!roller) return;

        const rows = Array.from(roller.querySelectorAll(".mystery__row"));
        rows.forEach((row, index) => {
          const span = row.querySelector("span");

          if (span) span.textContent = values[index] ?? "";
          row.classList.toggle("mystery__row--selected", index === 1);
        });
      }

      function updateDatetimeRollers() {
        const now = new Date();
        const previousDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
        const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();

        setDatetimeRoller(datetimeRollers.hour, [
          formatTwoDigits((hour + 23) % 24),
          formatTwoDigits(hour),
          formatTwoDigits((hour + 1) % 24),
        ]);
        setDatetimeRoller(datetimeRollers.minute, [
          formatTwoDigits((minute + 59) % 60),
          formatTwoDigits(minute),
          formatTwoDigits((minute + 1) % 60),
        ]);
        setDatetimeRoller(datetimeRollers.second, [
          formatTwoDigits((second + 59) % 60),
          formatTwoDigits(second),
          formatTwoDigits((second + 1) % 60),
        ]);
        setDatetimeRoller(datetimeRollers.day, [
          formatTwoDigits(previousDay.getDate()),
          formatTwoDigits(now.getDate()),
          formatTwoDigits(nextDay.getDate()),
        ]);
        setDatetimeRoller(datetimeRollers.month, [
          formatTwoDigits(month === 1 ? 12 : month - 1),
          formatTwoDigits(month),
          formatTwoDigits(month === 12 ? 1 : month + 1),
        ]);
        setDatetimeRoller(datetimeRollers.year, [
          String(year - 1),
          String(year),
          String(year + 1),
        ]);
      }

      function updateBrowserTime() {
        const now = new Date();
        const formattedTime = formatClockTime(now);

        timeControl.value = formattedTime;
        timeDisplay.textContent = formattedTime;
      }

      function updateBrowserTimeMode() {
        const shouldUseBrowserTime = browserTimeControl.value === "on";

        timeControl.disabled = shouldUseBrowserTime;
        if (browserTimeTimer) {
          clearInterval(browserTimeTimer);
          browserTimeTimer = null;
        }

        if (shouldUseBrowserTime) {
          updateBrowserTime();
          browserTimeTimer = setInterval(updateBrowserTime, 1000);
          return;
        }

        updateTime();
      }

      function updateBattery() {
        const percent = Number(batteryControl.value);
        const maxWidth = 46;
        batteryFill.setAttribute("width", String((maxWidth * percent) / 100));
      }

      function updateActiveBead() {
        beads.querySelectorAll(".bead--active, .bead--current").forEach((bead) => {
          bead.classList.remove("bead--active");
          bead.classList.remove("bead--current");
        });

        const activeBead = Number(beadControl.value);
        beadOutput.textContent = activeBead > 0 ? String(activeBead) : "None";
        if (activeBead <= 0) {
          syncMysteryFromActiveBead();
          return;
        }

        beads.querySelectorAll(".bead").forEach((bead) => {
          if (Number(bead.dataset.bead) <= activeBead) {
            bead.classList.add("bead--active");
          }
        });
        beads.querySelector(`[data-bead="${activeBead}"]`)?.classList.add("bead--current");
        syncMysteryFromActiveBead();
      }

      function toggleBeadActivation(event) {
        event.preventDefault();
        event.stopPropagation();

        const bead = event.target.closest(".bead");
        if (!bead) return;

        const beadNumber = Number(bead.dataset.bead);
        const currentBead = Number(beadControl.value);

        beadControl.value = currentBead === beadNumber ? "0" : String(beadNumber);
        updateActiveBead();
      }

      function advanceRosaryBead() {
        const currentBead = Number(beadControl.value) || 0;
        const nextBead = currentBead >= totalBeads ? 0 : currentBead + 1;

        beadControl.value = String(nextBead);
        updateActiveBead();
      }

      function updateBle() {
        bluetooth.classList.toggle("bluetooth--off", bleControl.value === "off");
      }

      function applyDeviceView(viewName) {
        const isMysteries = viewName === "mysteries";
        const isStats = viewName.startsWith("stats-");
        const isMystery = viewName === "mystery";
        const isIntentions = viewName === "intentions";
        const isIntentionsList = viewName === "intentions-list";
        const isSettings1 = viewName === "settings1";
        const isSettings2 = viewName === "settings2";
        const isSettings3 = viewName === "settings3";
        const isSettings4 = viewName === "settings4";
        const isSettings5 = viewName === "settings5";
        const isSettings6 = viewName === "settings6";
        const isSettings7 = viewName === "settings7";
        const isDatetime = viewName === "datetime";
        const isFwUpdate = viewName === "fwupdate";
        const isSettings = isSettings1 || isSettings2 || isSettings3 || isSettings4 || isSettings5 || isSettings6 || isSettings7 || isDatetime;

        device.classList.toggle("device--mysteries", isMysteries);
        device.classList.toggle("device--stats", isStats);
        device.classList.toggle("device--mystery", isMystery);
        device.classList.toggle("device--intentions", isIntentions);
        device.classList.toggle("device--intentions-list", isIntentionsList);
        device.classList.toggle("device--fwupdate", isFwUpdate);
        device.classList.toggle("device--settings", isSettings);
        device.classList.toggle("device--settings1", isSettings1);
        device.classList.toggle("device--settings2", isSettings2);
        device.classList.toggle("device--settings3", isSettings3);
        device.classList.toggle("device--settings4", isSettings4);
        device.classList.toggle("device--settings5", isSettings5);
        device.classList.toggle("device--settings6", isSettings6);
        device.classList.toggle("device--settings7", isSettings7);
        device.classList.toggle("device--datetime", isDatetime);
        device.classList.toggle("device--rosary", !isMysteries && !isStats && !isMystery && !isIntentions && !isIntentionsList && !isSettings && !isFwUpdate);
      }

      function getTransitionDirection(fromView, toView) {
        const from = screenPositions[fromView];
        const to = screenPositions[toView];

        if (!from || !to) return "right";

        const deltaX = to.x - from.x;
        const deltaY = to.y - from.y;

        if (Math.abs(deltaX) >= Math.abs(deltaY) && deltaX !== 0) {
          return deltaX > 0 ? "right" : "left";
        }

        return deltaY > 0 ? "down" : "up";
      }

      function getTransitionClassNames(direction) {
        if (direction === "left") return { enter: "screen-panel--enter-left", exit: "screen-panel--exit-right" };
        if (direction === "up") return { enter: "screen-panel--enter-up", exit: "screen-panel--exit-down" };
        if (direction === "down") return { enter: "screen-panel--enter-down", exit: "screen-panel--exit-up" };

        return { enter: "screen-panel--enter-right", exit: "screen-panel--exit-left" };
      }

      function updateNavButtons() {
        navButtons.forEach((button) => {
          const direction = button.dataset.navDirection;
          const target = navigationMap[currentView]?.[direction];
          let hasAction = currentView === "rosary" && direction === "up";

          if (currentView === "stats-history") {
            if (direction === "left") hasAction = true;
            if (direction === "right") hasAction = currentHistoryOffset < 0;
          }

          button.disabled = !target && !hasAction;
          button.setAttribute("aria-disabled", String(!target && !hasAction));
        });
      }

      function cycleBackground() {
        const options = Array.from(backgroundControl.options);
        const currentIndex = Math.max(0, options.findIndex((option) => option.value === backgroundControl.value));
        const nextIndex = normalizeIndex(currentIndex + 1, options.length);

        backgroundControl.value = options[nextIndex].value;
        updateBackground();
      }

      function showViewImmediately(nextView) {
        currentView = nextView;
        viewControl.value = nextView;
        applyDeviceView(nextView);
        updateNavButtons();

        if (transitionTimer) {
          clearTimeout(transitionTimer);
          transitionTimer = null;
        }

        screenPanels.forEach((panel) => {
          const isActive = panel.dataset.screen === nextView;

          panel.classList.remove("screen-panel--active", ...transitionClasses);
          panel.classList.toggle("screen-panel--active", isActive);
          panel.setAttribute("aria-hidden", String(!isActive));
        });
      }

      function setView(nextView, { animate = true, direction = getTransitionDirection(currentView, nextView) } = {}) {
        if (!screenPanelByName[nextView]) return;

        const previousView = currentView;
        const previousPanel = screenPanelByName[previousView];
        const nextPanel = screenPanelByName[nextView];

        if (nextView === previousView) {
          applyDeviceView(nextView);
          updateNavButtons();
          return;
        }

        if (!animate) {
          showViewImmediately(nextView);
          return;
        }

        currentView = nextView;
        viewControl.value = nextView;
        applyDeviceView(nextView);
        updateNavButtons();

        if (transitionTimer) {
          clearTimeout(transitionTimer);
          transitionTimer = null;
        }

        screenPanels.forEach((panel) => {
          if (panel !== previousPanel && panel !== nextPanel) {
            panel.classList.remove("screen-panel--active", ...transitionClasses);
            panel.setAttribute("aria-hidden", "true");
          }
        });

        const { enter, exit } = getTransitionClassNames(direction);

        previousPanel?.classList.remove("screen-panel--active", ...transitionClasses);
        previousPanel?.classList.add("screen-panel--exiting", exit);
        previousPanel?.setAttribute("aria-hidden", "true");

        nextPanel.classList.remove(...transitionClasses);
        nextPanel.classList.add("screen-panel--active", enter);
        nextPanel.setAttribute("aria-hidden", "false");

        nextPanel.getBoundingClientRect();
        nextPanel.classList.remove(enter);

        transitionTimer = setTimeout(() => {
          if (previousPanel) {
            previousPanel.classList.add("screen-panel--no-transition");
            previousPanel.classList.remove("screen-panel--exiting", exit);
            previousPanel.getBoundingClientRect();
            previousPanel.classList.remove("screen-panel--no-transition");
          }
          transitionTimer = null;
        }, 280);
      }

      function navigate(direction) {
        if (currentView === "rosary" && direction === "up") {
          cycleBackground();
          return;
        }

        if (currentView === "stats-history") {
          if (direction === "left") {
            currentHistoryOffset -= 1;
            renderStats();
            updateNavButtons();
            return;
          } else if (direction === "right") {
            if (currentHistoryOffset < 0) {
              currentHistoryOffset += 1;
              renderStats();
              updateNavButtons();
            }
            return;
          }
        }

        const target = navigationMap[currentView]?.[direction];

        if (!target) return;

        setView(target, { animate: false });
      }

      function renderMysteriesSelector(entries) {
        const selectedIndex = mysteriesSelectionControl.value === ""
          ? 0
          : Math.min(Number(mysteriesSelectionControl.value) || 0, entries.length - 1);

        mysteriesSelectionControl.innerHTML = "";
        entries.forEach((entry, index) => {
          const option = document.createElement("option");
          option.value = String(index);
          option.textContent = entry;
          mysteriesSelectionControl.appendChild(option);
        });
        mysteriesSelectionControl.value = String(selectedIndex);
      }

      function renderMysteriesRoller() {
        const entries = getMysteriesEntries();
        const selectedIndex = Math.min(Number(mysteriesSelectionControl.value) || 0, entries.length - 1);
        const visibleRows = [mysteryRowEmpty, mysteryRowPrimary, mysteryRowSecondary];
        const visibleIndexes = [
          normalizeIndex(selectedIndex - 1, entries.length),
          selectedIndex,
          normalizeIndex(selectedIndex + 1, entries.length),
        ];

        visibleRows.forEach((row, rowIndex) => {
          const text = entries[visibleIndexes[rowIndex]];

          row.dataset.index = String(visibleIndexes[rowIndex]);
          row.textContent = text;
          row.classList.toggle("mysteries__row--selected", rowIndex === 1);
          row.classList.toggle("mysteries__row--empty", text === "-");
        });
      }

      function renderMysteryRoller() {
        const selectedIndex = Number(mysterySelectionControl.value) || 0;
        const visibleIndexes = [
          normalizeIndex(selectedIndex - 1, mysteryNumberEntries.length),
          selectedIndex,
          normalizeIndex(selectedIndex + 1, mysteryNumberEntries.length),
        ];

        mysteryRows.forEach((row, rowIndex) => {
          row.dataset.index = String(visibleIndexes[rowIndex]);
          row.querySelector("span").textContent = mysteryNumberEntries[visibleIndexes[rowIndex]];
          row.classList.toggle("mystery__row--selected", rowIndex === 1);
        });
      }

      function getIntentionsData() {
        return intentionFixtures[languageControl.value] ?? intentionFixtures.en ?? Object.values(intentionFixtures)[0] ?? fallbackIntentions;
      }

      function getIntentionEntries() {
        const entries = getIntentionsData().entries ?? [];

        return entries.length > 0 ? entries : fallbackIntentions.entries;
      }

      function getSelectedIntentionIndex(entries = getIntentionEntries()) {
        const selectedId = currentIntentionId ?? getIntentionsData().selected;
        const selectedIndex = entries.findIndex((entry) => entry.id === selectedId);

        return selectedIndex >= 0 ? selectedIndex : 0;
      }

      function setSelectedIntentionIndex(index) {
        const entries = getIntentionEntries();
        const normalizedIndex = normalizeIndex(Number(index) || 0, entries.length);

        currentIntentionId = entries[normalizedIndex]?.id ?? null;
        intentionsSelectionControl.value = String(normalizedIndex);
        renderIntentionsRoller();
        renderIntentionDetail();
      }

      function renderIntentionsRoller() {
        const entries = getIntentionEntries();
        const selectedIndex = getSelectedIntentionIndex(entries);
        const visibleIndexes = [
          normalizeIndex(selectedIndex - 1, entries.length),
          selectedIndex,
          normalizeIndex(selectedIndex + 1, entries.length),
        ];

        intentionsSelectionControl.value = String(selectedIndex);
        intentionsListRows.forEach((row, rowIndex) => {
          const entry = entries[visibleIndexes[rowIndex]];

          row.dataset.index = String(visibleIndexes[rowIndex]);
          row.querySelector("span").textContent = entry?.label ?? "";
          row.classList.toggle("mystery__row--selected", rowIndex === 1);
        });
      }

      function renderIntentionDetail() {
        const entries = getIntentionEntries();
        const selectedIndex = getSelectedIntentionIndex(entries);
        const entry = entries[selectedIndex] ?? entries[0] ?? fallbackIntentions.entries[0];

        currentIntentionId = entry.id;
        intentionsMonth.textContent = entry.label;
        intentionsBody.textContent = entry.body;
      }

      function renderRosaryMysteryTitle() {
        const selectedIndex = Math.min(Number(mysteriesSelectionControl.value) || 0, 5);

        rosaryMysteryTitle.textContent = getLanguageData()?.mysteries?.[`mT${selectedIndex}`] ?? "";
      }

function renderRosaryMysteryScrollText() {
  const mysteryIndex = getMysteryIndexForActiveBead(Number(beadControl.value) || 0);
  const mysteriesIndex = Math.min(Number(mysteriesSelectionControl.value) || 0, 5);
  const scrollKey = `m${mysteryIndex}${mysteriesIndex}`;
  const scrollText = getLanguageData()?.mysteries?.[`m${mysteryIndex}${mysteriesIndex}`] ?? "";

  if (scrollKey === currentRosaryMysteryScrollKey && rosaryMysteryScrollText.textContent === scrollText) {
    return;
  }

  currentRosaryMysteryScrollKey = scrollKey;

  rosaryMysteryScrollText.classList.remove("rosary-mystery-scroll__text--static");
  rosaryMysteryScrollText.textContent = scrollText;
  rosaryMysteryScrollText.dataset.scrollText = "";
  rosaryMysteryScrollText.style.animation = "none";
  rosaryMysteryScrollText.style.transform = "translateX(0)";

  rosaryMysteryScrollText.getBoundingClientRect();

  const textWidth = rosaryMysteryScrollText.scrollWidth;
  const containerWidth = rosaryMysteryScrollText.parentElement.clientWidth;

  if (textWidth <= containerWidth) {
    rosaryMysteryScrollText.classList.add("rosary-mystery-scroll__text--static");
    return;
  }

  const distance = textWidth;
  const speed = 120;
  const duration = distance / speed;

  rosaryMysteryScrollText.dataset.scrollText = ` ${scrollText}`;
  rosaryMysteryScrollText.style.setProperty("--scroll-distance", `${distance}px`);

  rosaryMysteryScrollText.getBoundingClientRect();

  rosaryMysteryScrollText.style.animation = `rosary-mystery-scroll ${duration}s linear infinite`;
}

      function getMysteryIndexForActiveBead(activeBead) {
        if (activeBead < loopStart + 1) return 0;

        return Math.min(5, Math.floor((activeBead - (loopStart + 1)) / (beadsPerDecade + 1)) + 1);
      }

      function syncMysteryFromActiveBead() {
        const mysteryIndex = getMysteryIndexForActiveBead(Number(beadControl.value) || 0);

        if (mysterySelectionControl.value !== String(mysteryIndex)) {
          mysterySelectionControl.value = String(mysteryIndex);
          renderMysteryRoller();
        }

        renderRosaryMysteryScrollText();
      }

      function getRosaryBeadForMystery(index) {
        if (index <= 0) return 0;

        return loopStart + 1 + (index - 1) * (beadsPerDecade + 1);
      }

      function preselectRosaryFromMystery() {
        const selectedIndex = Number(mysterySelectionControl.value) || 0;

        beadControl.value = String(getRosaryBeadForMystery(selectedIndex));
        updateActiveBead();
      }

      function updateVersionInfo() {
        settings7Url.textContent = "rosary-A1B2D3E4";
        settings7More.textContent = `${firmwareVersionControl.value} · ${languageControl.value} ${languageVersionControl.value}`;
      }

      function renderStats() {
        const statTitle = getLangText("l037", "Statistics");
        const statSetLabels = ["l038", "l039", "l040", "l041", "l042", "l043"].map((key, index) =>
          getLangText(key, ["-", "J", "L", "S", "G", "C"][index]),
        );
        const withColon = (text) => `${text} :`;

        statsTitles.forEach((title) => {
          title.textContent = statTitle;
        });
        statsDurationsSubtitle.textContent = getLangText("l023", "Duration & averages");
        statsTotalsSubtitle.textContent = getLangText("l028", "Totals (time)");
        statsSetsSubtitle.textContent = getLangText("l033", "Mystery sets");
        statsPartsSubtitle.textContent = getLangText("l035", "Parts I-V per set");
        statsAvgBead.textContent = withColon(getLangText("l024", "Avg bead"));
        statsAvgDecade.textContent = withColon(getLangText("l025", "Avg decade"));
        statsAvgRosary.textContent = withColon(getLangText("l026", "Avg rosary"));
        statsAvgChaplet.textContent = withColon(getLangText("l027", "Avg chaplet"));
        statsTotalRosary.textContent = withColon(getLangText("l029", "Rosary"));
        statsTotalDecades.textContent = withColon(getLangText("l030", "Decades"));
        statsTotalBeads.textContent = withColon(getLangText("l031", "Beads"));
        statsTotalChaplet.textContent = withColon(getLangText("l032", "Chaplet"));

        function formatDuration(ms) {
          if (!ms) return "0s";
          const totalSec = Math.floor(ms / 1000);
          if (totalSec < 60) return `${totalSec}s`;
          const min = Math.floor(totalSec / 60);
          const s = totalSec % 60;
          return s > 0 ? `${min}m ${s}s` : `${min}m`;
        }

        function formatTotal(ms) {
          if (!ms) return "0h 00m";
          const totalMin = Math.floor(ms / 60000);
          const hours = Math.floor(totalMin / 60);
          const mins = totalMin % 60;
          return `${hours}h ${mins.toString().padStart(2, '0')}m`;
        }

        const dur = statsData?.stats?.durations || {};
        statsAvgBead.nextElementSibling.textContent = formatDuration(dur.avgBeadMs);
        statsAvgDecade.nextElementSibling.textContent = formatDuration(dur.avgDecadeMs);
        statsAvgRosary.nextElementSibling.textContent = formatDuration(dur.avgRosaryMs);
        statsAvgChaplet.nextElementSibling.textContent = formatDuration(dur.avgChapletMs);

        statsTotalRosary.nextElementSibling.textContent = formatTotal(Number(dur.totalRosaryMs));
        statsTotalDecades.nextElementSibling.textContent = formatTotal(Number(dur.totalDecadeMs));
        statsTotalBeads.nextElementSibling.textContent = formatTotal(Number(dur.totalBeadMs));
        statsTotalChaplet.nextElementSibling.textContent = formatTotal(Number(dur.totalChapletMs));

        function createLegendItem(label, color, valueInFifths) {
          const whole = Math.floor(valueInFifths / 5);
          const frac = valueInFifths % 5;

          const item = document.createElement("span");
          item.style.display = "inline-flex";
          item.style.alignItems = "center";

          const swatch = document.createElement("i");
          swatch.className = "stats-color";
          swatch.style.backgroundColor = color;
          swatch.style.boxShadow = `0 0 6px ${color}`;

          item.appendChild(swatch);
          item.appendChild(document.createTextNode(`${label} ${whole}`));

          if (frac > 0) {
            const dots = document.createElement("div");
            dots.style.display = "inline-flex";
            dots.style.flexDirection = "column-reverse";
            dots.style.marginLeft = "4px";
            dots.style.gap = "1px";
            for (let i = 0; i < frac; i++) {
              const dot = document.createElement("div");
              dot.style.width = "calc(var(--screen-size) * 2 / 240)";
              dot.style.height = "calc(var(--screen-size) * 2 / 240)";
              dot.style.backgroundColor = "#ffffff";
              dots.appendChild(dot);
            }
            item.appendChild(dots);
          }
          return item;
        }

        statsSetLegend.replaceChildren();
        const donut = document.querySelector(".stats__donut");
        if (donut) {
          const totalSetCount = statsSetValues.reduce((a, b) => a + b, 0);
          if (totalSetCount > 0) {
            let currentDeg = 0;
            const conicStops = statsSetValues.map((value, index) => {
              if (value === 0) return null;
              const deg = (value / totalSetCount) * 360;
              const stop = `${statsSetColors[index]} ${currentDeg}deg ${currentDeg + deg}deg`;
              currentDeg += deg;
              return stop;
            }).filter(Boolean);
            donut.style.background = `conic-gradient(from 90deg, ${conicStops.join(", ")})`;
          } else {
            donut.style.background = `conic-gradient(from 90deg, #808080 0deg 360deg)`;
          }
        }

        const setRows = [[0, 1, 2], [3, 4], [5]];
        setRows.forEach((rowIndices) => {
          const rowDiv = document.createElement("div");
          rowDiv.className = "stats__legend-row";
          rowIndices.forEach((index) => {
            const label = statSetLabels[index];
            rowDiv.appendChild(createLegendItem(label, statsSetColors[index], statsSetValues[index]));
          });
          statsSetLegend.appendChild(rowDiv);
        });

        const rowTotals = statsPartValues.map((values) => values.reduce((sum, value) => sum + value, 0));
        const maxTotal = Math.max(...rowTotals);

        statsPartsBars.replaceChildren();
        statsPartValues.forEach((values, setIndex) => {
          const row = document.createElement("div");
          const label = document.createElement("span");
          const bar = document.createElement("div");
          const total = document.createElement("strong");

          row.className = "stats-bar";
          label.textContent = statSetLabels[setIndex];
          values.forEach((value, partIndex) => {
            const segment = document.createElement("i");
            const width = maxTotal > 0 ? (value / maxTotal) * 100 : 0;

            segment.style.setProperty("--w", `${width}%`);
            segment.style.setProperty("--c", statsPartColors[setIndex][partIndex]);
            bar.appendChild(segment);
          });
          total.textContent = String(rowTotals[setIndex]);
          row.append(label, bar, total);
          statsPartsBars.appendChild(row);
        });

        statsPartKey.replaceChildren();
        ["I", "II", "III", "IV", "V"].forEach((label, index) => {
          const item = document.createElement("span");
          const swatch = document.createElement("i");

          swatch.style.backgroundColor = statsPartColors[0][index];
          swatch.style.boxShadow = `0 0 6px ${statsPartColors[0][index]}`;
          item.append(swatch, document.createTextNode(label));
          statsPartKey.appendChild(item);
        });

        statsHistoryTitle.textContent = getLangText("l044", "History");
        const bucketKey = historyBucketKeys[currentHistoryBucketIndex];
        const bucketFallback = historyBucketFallbacks[currentHistoryBucketIndex];
        statsHistorySelector.textContent = getLangText(bucketKey, bucketFallback);
        statsHistoryChart.replaceChildren();
        statsHistoryLegend.replaceChildren();

        const historyDataResult = getHistoryDataset(currentHistoryBucketIndex, currentHistoryOffset);
        const currentDataset = historyDataResult.data;
        statsHistoryLabel.textContent = historyDataResult.label;
        const maxHistory = Math.max(...currentDataset.map(d => d.total), 0);
        let legendValues = [0, 0, 0, 0, 0, 0];

        if (maxHistory > 0) {
          currentDataset.forEach((dayData) => {
            const bar = document.createElement("div");
            bar.className = "stats__history-bar";
            if (dayData.total > 0) {
              const h = (dayData.total / maxHistory) * 100;
              bar.style.height = `${h}%`;

              const sortedSegments = [...dayData.segments].sort((a, b) => {
                const getRank = (s) => {
                  const segIndex = (s.set === 5) ? 25 : (s.set * 5 + s.part);
                  if (!s.intention) {
                    return segIndex === 25 ? 0 : 100 - segIndex;
                  } else {
                    return segIndex === 25 ? 200 : 300 - segIndex;
                  }
                };
                return getRank(a) - getRank(b);
              });

              sortedSegments.forEach(seg => {
                legendValues[seg.set] += seg.count;

                const segment = document.createElement("div");
                segment.className = "stats__history-segment";
                if (seg.intention) segment.classList.add("stats__history-segment--intention");

                const segH = (seg.count / dayData.total) * 100;
                segment.style.setProperty("--h", `${segH}%`);

                if (seg.set === 5) {
                  segment.style.setProperty("--c", statsSetColors[5]);
                } else {
                  segment.style.setProperty("--c", statsPartColors[seg.set][seg.part]);
                }
                bar.appendChild(segment);
              });
            }
            statsHistoryChart.appendChild(bar);
          });
        }

        const rows = [[0, 1, 2], [3, 4], [5]];
        rows.forEach((rowIndices) => {
          const rowDiv = document.createElement("div");
          rowDiv.className = "stats__legend-row";
          rowIndices.forEach((index) => {
            const label = statSetLabels[index];
            rowDiv.appendChild(createLegendItem(label, statsSetColors[index], legendValues[index]));
          });
          statsHistoryLegend.appendChild(rowDiv);
        });
      }

      function updateLanguage() {
        const mysteriesEntries = getMysteriesEntries();

        renderMysteriesSelector(mysteriesEntries);
        mysteriesTitle.textContent = getLangText("l001", "Mysteries");
        mysteryTitle.textContent = getLangText("l002", "Mystery");
        intentionsTitle.textContent = getLangText("l003", "Intention");
        intentionsListTitle.textContent = getLangText("l004", "Intentions");
        renderIntentionsRoller();
        renderIntentionDetail();
        settingsNum.textContent = "1/8";
        settingsTitle.textContent = getLangText("l005", "Settings");
        settingsOptionSelected.textContent = getLangText("l006", "Start the rosary\nwith the selected Mystery");
        settingsOptionLast.textContent = getLangText("l007", "Start the rosary\nwith the last state");
        settings2Num.textContent = "2/8";
        settings2Title.textContent = getLangText("l005", "Settings");
        settings2OptionHaptic.textContent = getLangText("l009", "Haptic feedback\n(vibration)");
        settings3Num.textContent = "4/8";
        settings3Title.textContent = getLangText("l005", "Settings");
        settings3OptionBrightness.textContent = getLangText("l010", "Screen brightness");
        setDisplayBrightness(brightnessControl.value);
        settings4Num.textContent = "6/8";
        settings4Title.textContent = getLangText("l005", "Settings");
        settings4OptionTapBrightness.textContent = getLangText("l011", "Wallpaper brightness");
        settings5Num.textContent = "7/8";
        settings5Title.textContent = getLangText("l005", "Settings");
        settings5OptionOrientation.textContent = getLangText("l012", "Screen orientation");

        settings6Num.textContent = "3/8";
        settings6Title.textContent = getLangText("l005", "Settings");
        settings6OptionShutdown.textContent = getLangText("l021", "Auto shutdown\nafter inactivity");
        settings6ShutdownNever.textContent = getLangText("l022", "Never");

        if (datetimeNum) datetimeNum.textContent = "5/8";
        if (datetimeTitle) datetimeTitle.textContent = getLangText("l005", "Settings");
        if (datetimeSubtitle) datetimeSubtitle.textContent = getLangText("l055", "Date/time");

        updateVersionInfo();
        fwupdateTitle.textContent = getLangText("l013", "System\nupdate");
        fwupdateFile.textContent = "firmware.bin";
        fwupdatePercent.textContent = "20%";
        fwupdateBytes.textContent = "(294 kB / 1471 kB)";
        renderStats();
        document.documentElement.lang = languageControl.value;
        renderMysteriesRoller();
        renderMysteryRoller();
        renderRosaryMysteryTitle();
        renderRosaryMysteryScrollText();
        updateBackground();
      }

      function updateBackground() {
        const imageName = backgroundControl.value;
        const opacity = Number(backgroundOpacityControl.value);
        const normalizedOpacity = imageName ? opacity / 100 : 0;

        backgroundOpacityOutput.textContent = `${opacity}%`;
        device.style.setProperty("--wallpaper-opacity", String(normalizedOpacity));
        settings4Value.textContent = `${opacity}%`;
        settings4Slider.setAttribute("aria-valuenow", String(opacity));
        settings4SliderFill.style.width = `${opacity}%`;
        settings4SliderKnob.style.left = `${opacity}%`;
        screenBg.style.opacity = String(normalizedOpacity);
        screenBg.style.backgroundImage = imageName ? `url("./bg/${imageName}.png")` : "none";
      }

      function setDisplayBrightness(percent) {
        const brightness = Math.max(1, Math.min(100, Math.round(Number(percent) || 1)));
        const simulatedBrightness = 20 + ((brightness - 1) / 99) * 80;
        const dimOpacity = 1 - simulatedBrightness / 100;

        brightnessControl.value = String(brightness);
        brightnessOutput.textContent = `${brightness}%`;
        settings3Value.textContent = `${brightness}%`;
        settings3Slider.setAttribute("aria-valuenow", String(brightness));
        settings3SliderFill.style.width = `${brightness}%`;
        settings3SliderKnob.style.left = `${brightness}%`;
        device.style.setProperty("--display-dim-opacity", String(dimOpacity));
      }

      function getSliderPercent(slider, event, min = 0, max = 100) {
        const rect = slider.getBoundingClientRect();
        const rawPercent = ((event.clientX - rect.left) / rect.width) * 100;

        return Math.max(min, Math.min(max, Math.round(rawPercent)));
      }

      function attachSliderInteraction(slider, updateValue, { min = 0, max = 100 } = {}) {
        const applyPointerValue = (event) => {
          updateValue(getSliderPercent(slider, event, min, max));
        };

        slider.setAttribute("role", "slider");
        slider.setAttribute("tabindex", "0");
        slider.setAttribute("aria-valuemin", String(min));
        slider.setAttribute("aria-valuemax", String(max));

        slider.addEventListener("pointerdown", (event) => {
          slider.setPointerCapture(event.pointerId);
          applyPointerValue(event);
        });
        slider.addEventListener("pointermove", (event) => {
          if (!slider.hasPointerCapture(event.pointerId)) return;

          applyPointerValue(event);
        });
        slider.addEventListener("keydown", (event) => {
          const currentValue = Number(slider.getAttribute("aria-valuenow")) || 0;
          let nextValue = currentValue;

          if (event.key === "ArrowLeft" || event.key === "ArrowDown") nextValue -= 1;
          if (event.key === "ArrowRight" || event.key === "ArrowUp") nextValue += 1;
          if (event.key === "Home") nextValue = 0;
          if (event.key === "End") nextValue = 100;
          if (nextValue === currentValue) return;

          event.preventDefault();
          updateValue(Math.max(min, Math.min(max, nextValue)));
        });
      }

      function nextFrame() {
        return new Promise((resolve) => requestAnimationFrame(() => resolve()));
      }

      function selectOption(control, index) {
        control.value = String(index);
        control.dispatchEvent(new Event("change", { bubbles: true }));
      }

      function attachRollerInteraction(roller, rows, control, getLength) {
        let pointerStartY = 0;
        let pointerMoved = false;

        roller.addEventListener("pointerdown", (event) => {
          pointerStartY = event.clientY;
          pointerMoved = false;
          roller.setPointerCapture(event.pointerId);
        });

        roller.addEventListener("pointermove", (event) => {
          const deltaY = event.clientY - pointerStartY;

          if (Math.abs(deltaY) > 8) {
            pointerMoved = true;
          }
        });

        roller.addEventListener("pointerup", (event) => {
          const deltaY = event.clientY - pointerStartY;
          const currentIndex = Number(control.value) || 0;

          if (Math.abs(deltaY) > 14) {
            const direction = deltaY < 0 ? 1 : -1;
            selectOption(control, normalizeIndex(currentIndex + direction, getLength()));
            return;
          }

          if (!pointerMoved) {
            const selectedRow = rows.find((row) => row.contains(event.target));
            if (selectedRow?.dataset.index) {
              selectOption(control, selectedRow.dataset.index);
            }
          }
        });
      }

      settingSwitches.forEach((switchEl) => {
        switchEl.setAttribute("role", "switch");
        switchEl.setAttribute("tabindex", "0");
        switchEl.setAttribute("aria-checked", "false");
        switchEl.addEventListener("click", () => {
          const isOn = switchEl.classList.toggle("settings__switch--on");

          switchEl.setAttribute("aria-checked", String(isOn));
        });
        switchEl.addEventListener("keydown", (event) => {
          if (event.key !== " " && event.key !== "Enter") return;

          event.preventDefault();
          switchEl.click();
        });
      });

      attachSliderInteraction(settings3Slider, (percent) => {
        setDisplayBrightness(percent);
      }, { min: 1 });
      attachSliderInteraction(settings4Slider, (percent) => {
        settings4Slider.setAttribute("aria-valuenow", String(percent));
        backgroundOpacityControl.value = String(percent);
        updateBackground();
      });
      attachRollerInteraction(
        mysteriesMenu,
        [mysteryRowEmpty, mysteryRowPrimary, mysteryRowSecondary],
        mysteriesSelectionControl,
        () => getMysteriesEntries().length,
      );
      attachRollerInteraction(mysteryRoller, mysteryRows, mysterySelectionControl, () => mysteryNumberEntries.length);
      attachRollerInteraction(
        intentionsListRoller,
        intentionsListRows,
        intentionsSelectionControl,
        () => getIntentionEntries().length,
      );

      controlsToggle.addEventListener("click", () => {
        const isCollapsed = controlsPanel.classList.toggle("controls--collapsed");

        controlsToggle.setAttribute("aria-expanded", String(!isCollapsed));
        controlsToggle.textContent = isCollapsed ? "Show controls" : "Hide controls";
      });
      navButtons.forEach((button) => {
        button.addEventListener("click", () => {
          navigate(button.dataset.navDirection);
        });
      });
      advanceRosaryButton.addEventListener("click", advanceRosaryBead);
      deviceKnobHit.addEventListener("pointerdown", () => {
        deviceKnob.classList.add("device__knob--pressed");
      });
      ["pointerup", "pointercancel", "pointerleave", "blur"].forEach((eventName) => {
        deviceKnobHit.addEventListener(eventName, () => {
          deviceKnob.classList.remove("device__knob--pressed");
        });
      });
      deviceKnobHit.addEventListener("click", advanceRosaryBead);
      statsHistorySelector.addEventListener("click", () => {
        currentHistoryBucketIndex = (currentHistoryBucketIndex + 1) % historyBucketKeys.length;
        currentHistoryOffset = 0;
        renderStats();
        updateNavButtons();
      });
      viewControl.addEventListener("change", () => {
        setView(viewControl.value, { animate: false });
      });
      languageControl.addEventListener("change", updateLanguage);
      firmwareVersionControl.addEventListener("change", updateVersionInfo);
      languageVersionControl.addEventListener("change", updateVersionInfo);
      mysteriesSelectionControl.addEventListener("change", () => {
        renderMysteriesRoller();
        renderRosaryMysteryTitle();
        renderRosaryMysteryScrollText();
      });
      mysterySelectionControl.addEventListener("change", () => {
        renderMysteryRoller();
        preselectRosaryFromMystery();
      });
      intentionsSelectionControl.addEventListener("change", () => {
        setSelectedIntentionIndex(intentionsSelectionControl.value);
      });
      timeControl.addEventListener("input", updateTime);
      browserTimeControl.addEventListener("change", updateBrowserTimeMode);
      batteryControl.addEventListener("change", updateBattery);
      brightnessControl.addEventListener("input", () => {
        setDisplayBrightness(brightnessControl.value);
      });
      beadControl.addEventListener("input", updateActiveBead);
      bleControl.addEventListener("change", updateBle);
      backgroundControl.addEventListener("change", updateBackground);
      backgroundOpacityControl.addEventListener("input", updateBackground);
      updateBrowserTimeMode();
      updateDatetimeRollers();
      setInterval(updateDatetimeRollers, 1000);
      settings4Slider.setAttribute("aria-valuenow", backgroundOpacityControl.value);
      setDisplayBrightness(brightnessControl.value);
      updateBattery();
      updateActiveBead();
      updateBle();
      renderSettingsQr();
      applyDeviceView(currentView);
      updateNavButtons();
      updateLanguage();
      updateBackground();

      async function assetToDataUrl(path) {
        if (window.SMARTROSARY_ASSET_DATA?.[path]) {
          return window.SMARTROSARY_ASSET_DATA[path];
        }

        if (window.location.protocol === "file:") {
          throw new Error(`Missing embedded asset data for ${path}`);
        }

        try {
          const response = await fetch(path);
          if (!response.ok) {
            throw new Error(`Unable to fetch ${path}`);
          }

          const blob = await response.blob();

          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          });
        } catch (error) {
          throw new Error(`Unable to embed ${path}: ${error.message}`);
        }
      }

      async function createDeviceSvg(viewName) {
        const rect = device.getBoundingClientRect();
        const knobHeadroom = rect.width * 0.06;
        const width = Math.ceil(rect.width);
        const height = Math.ceil(rect.height + knobHeadroom);

        return window.domToSvg.toSvg(device, {
          width,
          height,
          paddingTop: knobHeadroom,
          prepareClone: async (clone) => {
            const overlayUrl = await assetToDataUrl("./assets/overlay.png");
            const clonedOverlay = clone.querySelector(".glass-overlay");
            if (clonedOverlay) {
              clonedOverlay.style.backgroundImage = `url("${overlayUrl}")`;
            }

            if ((viewName === "rosary" || viewName === "settings4") && backgroundControl.value) {
              const backgroundUrl = await assetToDataUrl(`./bg/${backgroundControl.value}.png`);
              const clonedBackground = clone.querySelector(".screen__bg");
              if (clonedBackground) {
                clonedBackground.style.backgroundImage = `url("${backgroundUrl}")`;
                clonedBackground.style.opacity = String(Number(backgroundOpacityControl.value) / 100);
              }
            }
          },
        });
      }

      function downloadSvgFile(svg, filename) {
        const blob = new Blob([svg], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          URL.revokeObjectURL(url);
          link.remove();
        }, 1000);
      }

      async function downloadDeviceSvg() {
        const viewName = viewControl.value;
        const svg = await createDeviceSvg(viewName);

        downloadSvgFile(svg, `smart-rosary-device-${viewName}.svg`);
      }

      downloadSvg.addEventListener("click", () => {
        downloadDeviceSvg().catch((error) => {
          console.error("SVG download failed", error);
          alert("SVG download failed. See browser console for details.");
        });
      });
  }

  window.SmartRosaryMockup = { init: initSmartRosaryMockup };

  if (window.SMARTROSARY_MOCKUP_AUTO_INIT !== false) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initSmartRosaryMockup, { once: true });
    } else {
      initSmartRosaryMockup();
    }
  }
})();
