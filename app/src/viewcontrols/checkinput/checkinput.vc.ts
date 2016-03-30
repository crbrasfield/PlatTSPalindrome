import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class CheckinputViewControl extends BaseViewControl {
    templateString: string = require('./checkinput.vc.html');

    context: {  
        userInput: string,
        userInputReverse: string,
        result: string
    };


    navigatedTo(parameter: {word:string}) {
        let word = parameter.word;
        this.context.userInput = word;
        this.context.userInputReverse = this.reverseString(word);
        console.log(this.context.userInputReverse);
        if (this.context.userInput === this.context.userInputReverse) {
            this.context.result = "Your word is a palindrome!"
        } else {
            this.context.result = "Your word was not a palindrom!"
        }
        
    }
    
   reverseString(str:string) {
   var temp = '';
   var i = str.length;

   while (i > 0) {
       temp += str.substring(i - 1, i);
       i--;
   }


   return temp;
}
    
    
}

register.viewControl('checkinput-vc', CheckinputViewControl);
