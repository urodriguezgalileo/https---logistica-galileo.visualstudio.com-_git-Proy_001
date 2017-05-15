import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumadorArray'
})
export class SumadorArrayPipe implements PipeTransform {
/*
  transform(values: number[]): any {
    let res = 0;
    values.forEach(element => {
      res += element;
    });
    return res;
  }*/

  transform(value: number): number {
    /*let res = 0;
    values.forEach(element => {
      res += element;
    });*/
    return value + 3;
  }

}