(() => {
  const button = document.getElementById('tgRedirectBtn');
  const totalSeconds = 3;
  const countdownSec = document.getElementById('countdownSec');
  const countdownText = document.getElementById('countdownText');
  const timerCircle = document.getElementById('timerCircle');
  document.getElementById('redirectTimer').hidden = false;
  const deadline = Date.now() + totalSeconds * 1000;
  const interval = setInterval(() => {
    const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    countdownSec.textContent = remaining;
    countdownText.textContent = remaining;
    timerCircle.style.strokeDashoffset = ((totalSeconds - remaining) / totalSeconds) * 100;
    if (remaining === 0) {
      clearInterval(interval);
      window.location.href = button.href;
    }
  }, 1000);
  button.addEventListener('click', () => clearInterval(interval));
})();
