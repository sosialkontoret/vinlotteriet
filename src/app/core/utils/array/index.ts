export class ArrayUtils {
  /**
   * Create an array of n length, each item filled with its own index.
   * indexArray(3) === [0,1,2]
   *
   * @param count
   * @private
   */
  public static indexedArray(count: number): number[] {
    return Array.from(Array(count).keys());
  }

  /**
   * Create an array of n length, then mapping the array with the index as input
   *
   * @param count
   * @param mapFunc map function to run for each key
   * @private
   */
  public static mapN<T>(count: number, mapFunc: (index: number) => T): T[] {
    return this.indexedArray(count).map(mapFunc);
  }
}
