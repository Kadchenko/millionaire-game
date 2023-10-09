export default function getAlphabetLetter(index: number) {
  if (index >= 0 && index < 26) {
    return String.fromCharCode('a'.charCodeAt(0) + index);
  } else {
    return '';
  }
}
