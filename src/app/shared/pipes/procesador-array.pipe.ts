import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'procesadorArray'
})
export class ProcesadorArrayPipe implements PipeTransform {

  transform(values: any, args?: any): any {
    for (var index = 0; index < values.length; index++) {
      values[index] += args[0];
    }
    return values;
  }

}
