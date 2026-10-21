/*
 * Build-time weather for the home header.
 *
 * Open-Meteo requires no API key. If the request is unavailable during a
 * build, the header falls back to the current season in Los Angeles.
 */

type OpenMeteoCurrent = {
  current?: {
    temperature_2m?: number;
    weather_code?: number;
  };
};

export type WeatherKind = "clear" | "cloudy" | "foggy" | "rainy" | "snowy" | "stormy";

export type WeatherSnapshot = {
  kind: WeatherKind;
  line: string;
};

const LA_LAT = 34.0522;
const LA_LON = -118.2437;

function getCurrentSeason(now: Date): string {
  const month = now.getMonth();
  if (month === 11 || month <= 1) return "winter";
  if (month <= 3) return "early spring";
  if (month === 4) return "late spring";
  if (month <= 7) return "summer";
  if (month <= 9) return "early fall";
  return "late fall";
}

function describeWeatherCode(code: number | undefined): { kind: WeatherKind; label: string } {
  if (code === undefined || code === 0) return { kind: "clear", label: "clear" };
  if (code <= 3) return { kind: "cloudy", label: "partly cloudy" };
  if (code <= 48) return { kind: "foggy", label: "foggy" };
  if (code <= 67) return { kind: "rainy", label: "rainy" };
  if (code <= 77) return { kind: "snowy", label: "snowy" };
  if (code <= 86) return { kind: "rainy", label: "showery" };
  return { kind: "stormy", label: "stormy" };
}

async function fetchWeather(): Promise<WeatherSnapshot | null> {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${LA_LAT}&longitude=${LA_LON}` +
    `&current=temperature_2m,weather_code` +
    `&temperature_unit=fahrenheit&timezone=America/Los_Angeles`;

  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) return null;

    const data = (await response.json()) as OpenMeteoCurrent;
    const temperature = data.current?.temperature_2m;
    if (typeof temperature !== "number") return null;

    const weather = describeWeatherCode(data.current?.weather_code);
    return {
      kind: weather.kind,
      line: `${Math.round(temperature)}°F and ${weather.label}`,
    };
  } catch {
    return null;
  }
}

export async function getWeatherSnapshot(now = new Date()): Promise<WeatherSnapshot> {
  return (await fetchWeather()) ?? {
    kind: "clear",
    line: getCurrentSeason(now),
  };
}
