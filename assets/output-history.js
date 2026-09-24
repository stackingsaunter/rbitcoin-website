/* All moments remain readable when scripts are unavailable. */
document.querySelectorAll('.output-history').forEach(figure => {
  const controls = figure.querySelector('.output-controls');
  const buttons = [...controls.querySelectorAll('button')];
  const states = [...figure.querySelectorAll('.output-state')];
  const announcement = figure.querySelector('.output-announcement');
  function select(stage, announce = true) {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.stage === stage)));
    states.forEach(state => { state.hidden = state.dataset.state !== stage; });
    const current = states.find(state => !state.hidden);
    if (announce) announcement.textContent = `${current.querySelector('h3').textContent}. ${current.querySelector('p').textContent}`;
  }
  figure.classList.add('is-enhanced');
  select('created', false);
  controls.hidden = false;
  buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.stage)));
});
