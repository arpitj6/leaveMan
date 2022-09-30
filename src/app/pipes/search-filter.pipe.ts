import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    if (filterText) {
      return list
        ? list.filter(
            (item) =>
              item.reason.toLowerCase() == filterText.toLowerCase() ||
              item.status.toLowerCase() == filterText.toLowerCase()
          )
        : [];
    } else {
      return list;
    }
  }
}
