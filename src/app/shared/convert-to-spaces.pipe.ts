// custom pipe used in displaying product list
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpaces implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}
