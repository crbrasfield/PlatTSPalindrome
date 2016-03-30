import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import CheckinputViewControl from '../checkinput/checkinput.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context = {
        userInput: '',
        error: ''
    };

    enter() {
        let word = this.context.userInput.trim(),
            wordLowercase = word.toLowerCase()
                if (this.utils.isEmpty(word)) {
                    this.context.error = "You forgot to enter a word";
                    return;
                }
        this.navigator.navigate(CheckinputViewControl, {
            parameters: {
                word: wordLowercase
            }
        }
    )}
}

register.viewControl('home-vc', HomeViewControl, [CheckinputViewControl]);
