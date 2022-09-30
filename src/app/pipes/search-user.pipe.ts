import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser',
})
export class SearchUserPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    if (filterText) {
      return list
        ? list.filter(
            (item) => item.name.toLowerCase() == filterText.toLowerCase()
          )
        : [];
    } else {
      return list;
    }
  }
}
