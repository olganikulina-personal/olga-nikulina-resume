/*
 * Build-time helpers for the /now page.
 *
 * - getCurrentSeason: pure, takes a Date, returns a season string for LA.
 *   Northern-hemisphere boundaries, simple month buckets. Good enough.
 * - fetchWeather: hits Open-Meteo (no auth, no rate limit worth caring about
 *   for a build-time call) and returns a short human string. On any failure
 *   it returns null \u2014 the caller falls back to the season string.
 *
 * Both run at build time only (no runtime fetch in the browser).
 */

export type NowSnapshot = {
  /** Short human string: '74\u00b0F and clear in LA' or 'late spring in LA'. */
  weatherLine: string;
  /** ISO date the page was generated. */
  generatedAt: string;
};

export function getCurrentSeason(now: Date): string {
  const m = now.getMonth(); // 0-indexed
  if (m === 11 || m <= 1) return "winter";
  if (m <= 3) return "early spring";
  if (m === 4) return "late spring";
  if (m <= 7) return "summer";
  if (m <= 9) return "early fall";
  return "late fall";
}

const LA_LAT = 34.0522;
const LA_LON = -118.2437;

type OpenMeteoCurrent = {
  current?: {
    temperature_2m?: number;
    weather_code?: number;
  };
};

// Open-Meteo's WMO weather codes, condensed to the words that fit a notebook.
function describeCode(code: number | undefined): string {
  if (code === undefined) return "out";
  if (code === 0) return "clear";
  if (code <= 3) return "partly cloudy";
  if (code <= 48) return "foggy";
  if (code <= 67) return "rainy";
  if (code <= 77) return "snowy";
  if (code <= 82) return "showery";
  if (code <= 86) return "snow showers";
  return "stormy";
}

export async function fetchWeather(): Promise<string | null> {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${LA_LAT}&longitude=${LA_LON}` +
    `&current=temperature_2m,weather_code` +
    `&temperature_unit=fahrenheit&timezone=America/Los_Angeles`;

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const data = (await res.json()) as OpenMeteoCurrent;
    const t = data.current?.temperature_2m;
    const code = data.current?.weather_code;
    if (typeof t !== "number") return null;
    return `${Math.round(t)}\u00b0F and ${describeCode(code)} in LA`;
  } catch {
    return null;
  }
}

export async function getNowSnapshot(now = new Date()): Promise<NowSnapshot> {
  const weather = await fetchWeather();
  const weatherLine = weather ?? `${getCurrentSeason(now)} in LA`;
  return {
    weatherLine,
    generatedAt: now.toISOString(),
  };
}
