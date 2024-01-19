import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], value: string) {
    return value ? list.filter(item => item[4] === value) : list;
  }

}