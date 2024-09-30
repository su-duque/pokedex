import { FastAverageColor } from 'fast-average-color';

export const getColorFromUrl = async (url: string) => {
  const averageColor = new FastAverageColor();
  const color = await averageColor.getColorAsync(url);
  if (color.error) return null;
  return color.hex;
};
