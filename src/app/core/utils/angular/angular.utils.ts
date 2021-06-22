import { SimpleChange } from '@angular/core';

export class AngularUtils {
  public static changed(simpleChange: SimpleChange): boolean {
    return simpleChange?.previousValue !== simpleChange?.currentValue;
  }
}
