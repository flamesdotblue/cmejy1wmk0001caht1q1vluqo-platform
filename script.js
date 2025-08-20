function updateTime() {
  const el = document.getElementById('time');
  const now = new Date();
  el.textContent = `It is ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}.`;
}

function main() {
  updateTime();
  setInterval(updateTime, 1000);

  const btn = document.getElementById('btn');
  const msg = document.getElementById('message');
  btn.addEventListener('click', () => {
    msg.textContent = 'Hello there! You clicked the button.';
  });

  console.log('Hello, World! App initialized.');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
