const audio = document.querySelector("#audio");
const audioBg = document.querySelector("#audioBg");
const startBtn = document.querySelector("#start");
const endBtn = document.querySelector("#end");
const toggleBtn = document.querySelector("#toggle");
const toggleBgBtn = document.querySelector("#toggleBg");

const context = new AudioContext();

const gainNode = new GainNode(context);
const gainNodeBg = new GainNode(context);

const dest = context.createMediaStreamDestination();

let stream, source;

startBtn.addEventListener("click", start);
endBtn.addEventListener("click", end);
toggleBtn.addEventListener("click", toggle);
toggleBgBtn.addEventListener("click", toggleBg);

async function start() {
  if (stream) {
    return;
  }

  stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  source = context.createMediaStreamSource(stream);
  source.connect(gainNode).connect(context.destination);

  sourceBg = context.createMediaElementSource(audioBg);
  sourceBg.connect(gainNodeBg).connect(context.destination);

  context.resume();

  audio.srcObject = dest.stream;
  audio.play();
}

async function end() {
  if (!stream) {
    return;
  }

  source.disconnect(gainNode);

  audio.pause();

  stream.getTracks().forEach(item => {
    item.stop();
  });

  stream = undefined;
}

async function toggle() {
  if (!stream) {
    return;
  }

  // 静音
  if (toggleBtn.innerText === "Mute") {
    gainNode.gain.setValueAtTime(0, context.currentTime);
    toggleBtn.innerText = "Unmute";
  }
  // 取消静音
  else {
    gainNode.gain.setValueAtTime(1, context.currentTime);
    toggleBtn.innerText = "Mute";
  }
}

async function toggleBg() {
  if (!stream) {
    return;
  }

  // 静音
  if (toggleBgBtn.innerText === "Mute (BG)") {
    gainNodeBg.gain.setValueAtTime(0, context.currentTime);
    toggleBgBtn.innerText = "Unmute (BG)";
  }
  // 取消静音
  else {
    gainNodeBg.gain.setValueAtTime(1, context.currentTime);
    toggleBgBtn.innerText = "Mute (BG)";
  }
}
