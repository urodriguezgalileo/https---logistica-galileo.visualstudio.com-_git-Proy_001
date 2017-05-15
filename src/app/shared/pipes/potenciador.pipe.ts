import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'potenciador'
})
export class PotenciadorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
