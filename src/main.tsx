import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './styles/index.css';

const egg = String.raw`
╭────────────────────────────────────────╮
│  romamakes.com                         │
│                                        │
│  Привіт, curious inspector 👀          │
│                                        │
│  Thanks for checking under the hood.   │
╰────────────────────────────────────────╯
`;

const isDarkTheme = (() => {
  if (typeof window === 'undefined') return false;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') return true;
  if (saved === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
})();

console.log(
  `%c${egg}`,
  `font-family: ui-monospace, SFMono-Regular, Menlo, monospace; color: ${isDarkTheme ? '#F55817' : '#0a0a0a'}; font-size: 12px; line-height: 1.35; font-weight: 500;`,
);

createRoot(document.getElementById('root')!).render(<App />);
