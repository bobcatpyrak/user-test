import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pw'
})
export class PasswordHidePipe implements PipeTransform {

  transform(password: string): string 
  {
    let length = password.length;
    let hidden = "";
    let i = 0;
    while(i < length)
    {
      hidden += "#";
      i++;
    }
    return hidden;
  }

}
