export const compose = <T>(...fns: Array<(arg: T) => T>): ((arg: T) => T) => {
  return (x: T) =>
    fns.reduceRight((acc: T, fn: (arg: T) => T): T => fn(acc), x);
};
