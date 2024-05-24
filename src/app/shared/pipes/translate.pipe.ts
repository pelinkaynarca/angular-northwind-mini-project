import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value==="Beverages") {
      return "İçecekler";
    } else if(value==="Condiments"){
      return "Çeşniler";
    } else if(value==="Confections"){
      return "Şekerlemeler";
    }else if(value==="Dairy Products"){
      return "Süt Ürünleri";
    }else if(value==="Grains/Cereals"){
      return "Tahıllar";
    }else if(value==="Meat/Poultry"){
      return "Et Ürünleri";
    }else if(value==="Produce"){
      return "Tarım Ürünleri";
    }else if(value==="Seafood"){
      return "Deniz Ürünleri";
    }
    return "";
  }

}
