import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePipe',
})

export class UppercasePipePipe implements PipeTransform {

  transform(value: string): string { //modifica il value in modo che ottenga una string, uppercase!
    return value.toUpperCase();
  }
}
