import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(aBoolean: boolean, locale: string ="en"): string 
  {
    if(locale == "fr")
      return aBoolean ? "OUI" : "NON";
    return aBoolean ? "YES" : "NO";
  }

}
