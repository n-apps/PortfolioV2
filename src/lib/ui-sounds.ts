import {
  hover as playHover,
  init,
  pop as playPop,
  swoosh as playSwoosh,
  toggle as playToggle,
} from '@rexa-developer/tiks';

let initialized = false;

function ensureInitialized() {
  if (initialized) return;
  init({ theme: 'soft', volume: 0.12 });
  initialized = true;
}

export function playToggleSound(enabled: boolean) {
  ensureInitialized();
  playToggle(enabled);
}

export function playHoverSound() {
  ensureInitialized();
  playHover();
}

export function playPopSound() {
  ensureInitialized();
  playPop();
}

export function playTransitionSound() {
  ensureInitialized();
  playSwoosh();
}
