import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrToUsd'
})
export class InrToUsdPipe implements PipeTransform {

  transform(value: number): number {
    return value*82;
  }

}
