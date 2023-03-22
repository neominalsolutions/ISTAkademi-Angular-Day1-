import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generation',
})
export class GenerationPipe implements PipeTransform {
  transform(age: number, ...args: any[]): string {
    if (age >= 13 && age <= 22) {
      return 'Z kuşağı';
    } else if (age > 22 && age <= 35) {
      return 'Y kuşağı';
    } else if (age < 13) {
      return 'Alfa kuşağı';
    } else if (age > 35 && age <= 45) {
      return 'X kuşağı';
    } else return 'Yaşlı';
  }
}
