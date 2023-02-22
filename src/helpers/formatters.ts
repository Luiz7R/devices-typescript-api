export const formatAsCelsius = (temperature: number) => {
  return temperature % 1 === 0
    ? `${temperature.toFixed(0)}\xB0C`
    : `${temperature.toFixed(1)}\xB0C`;
};

export const formatAsPercent = (value: number) => {
  return value % 1 === 0 ? `${value.toFixed(0)}%` : `${value.toFixed(1)}%`;
};
