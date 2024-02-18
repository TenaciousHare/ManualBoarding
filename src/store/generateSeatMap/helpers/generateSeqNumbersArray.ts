export function generateSeqNumbersArray(seq: number): number[] {
  const seqArr = [];
  for (let i = 1; i <= seq; i++) {
    seqArr.push(i);
  }
  return seqArr;
}
