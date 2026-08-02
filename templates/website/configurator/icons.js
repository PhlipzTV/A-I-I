// Preset icon set (same minimalist stroke style as the AII main site),
// so non-technical use doesn't require hand-writing SVG markup.
const ICON_PRESETS = {
  website: {
    label: "Website",
    svg: '<svg viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" stroke-width="2"/><path d="M6 17h36" stroke="currentColor" stroke-width="2"/><circle cx="11" cy="13.5" r="1.2" fill="currentColor"/><circle cx="15" cy="13.5" r="1.2" fill="currentColor"/></svg>',
  },
  chatbot: {
    label: "Chatbot / Assistent",
    svg: '<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M11 37l4-4M33 15l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  },
  agent: {
    label: "KI-Agent",
    svg: '<svg viewBox="0 0 48 48" fill="none"><circle cx="14" cy="14" r="5" stroke="currentColor" stroke-width="2"/><circle cx="34" cy="14" r="5" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="34" r="5" stroke="currentColor" stroke-width="2"/><path d="M17 17l4 12M31 17l-4 12M19 14h10" stroke="currentColor" stroke-width="2"/></svg>',
  },
  integration: {
    label: "Integration / Automatisierung",
    svg: '<svg viewBox="0 0 48 48" fill="none"><path d="M8 24a16 16 0 0 1 27-11.3M40 24a16 16 0 0 1-27 11.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M35 8v6h-6M13 40v-6h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  consulting: {
    label: "Beratung / Konzept",
    svg: '<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2"/><rect x="26" y="8" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2"/><rect x="8" y="26" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2"/><rect x="26" y="26" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2"/></svg>',
  },
  support: {
    label: "Betreuung / Support",
    svg: '<svg viewBox="0 0 48 48" fill="none"><path d="M24 6l4.5 9.2L38 16.6l-7 6.9 1.6 9.6L24 28.6l-8.6 4.5L17 23.5l-7-6.9 9.5-1.4L24 6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  },
  tools: {
    label: "Werkzeug / Handwerk",
    svg: '<svg viewBox="0 0 48 48" fill="none"><path d="M30 8a8 8 0 0 0-10.6 10.6L8 30v6h6l11.4-11.4A8 8 0 0 0 36 14l-6 6-4-4 6-6a8 8 0 0 0-2-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  },
  shield: {
    label: "Sicherheit / Vertrauen",
    svg: '<svg viewBox="0 0 48 48" fill="none"><path d="M24 6l14 5v11c0 10-6 16-14 20-8-4-14-10-14-20V11l14-5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M18 24l4 4 8-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  clock: {
    label: "Termine / Zeit",
    svg: '<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2"/><path d="M24 15v9l6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
};
