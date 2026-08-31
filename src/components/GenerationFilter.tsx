export const generations = [
  { id: 1, name: '第一世代', range: [1, 151] },
  { id: 2, name: '第二世代', range: [152, 251] },
  { id: 3, name: '第三世代', range: [252, 386] },
  { id: 4, name: '第四世代', range: [387, 493] },
  { id: 5, name: '第五世代', range: [494, 649] },
  { id: 6, name: '第六世代', range: [650, 721] },
  { id: 7, name: '第七世代', range: [722, 809] },
  { id: 8, name: '第八世代', range: [810, 905] },
  { id: 9, name: '第九世代', range: [906, 1025] },
] as const;

export const getGenerationRange = (genId: number): [number, number] | null => {
  const gen = generations.find((g) => g.id === genId);
  return gen ? [gen.range[0], gen.range[1]] : null;
};
