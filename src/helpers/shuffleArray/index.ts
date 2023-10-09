export default function shuffleArray(arr: any[]) {
  return [...arr].sort(function () {
    return Math.random() - 0.5;
  });
}
