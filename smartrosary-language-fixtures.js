window.SMARTROSARY_LANG_FIXTURES = window.SMARTROSARY_LANG_FIXTURES ?? [];
window.registerNvsEditorFixture = (fixture) => {
  window.SMARTROSARY_LANG_FIXTURES.push(fixture);
};

window.SMARTROSARY_INTENTIONS = window.SMARTROSARY_INTENTIONS ?? {};
window.registerSmartRosaryIntentions = (fixture) => {
  window.SMARTROSARY_INTENTIONS[fixture.code] = fixture;
};
