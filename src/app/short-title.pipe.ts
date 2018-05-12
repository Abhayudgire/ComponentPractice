import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortTitle'})
export class ShortTitlePipe implements PipeTransform {

  transform( title: string, limit: number ) {
    if ( !title) { return null; }
    ( limit ) ? limit : 5;

    return title.substr(0, limit) + '...';
  }
}
