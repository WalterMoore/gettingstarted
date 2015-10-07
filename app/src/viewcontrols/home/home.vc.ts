import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    canNavigateTo(): boolean {
        if(this.userRepository.userid === 0) {
            this.navigator.navigate('login-vc');
            return false;
        }
    }
    context: any = {};
}

register.viewControl('home-vc', HomeViewControl);
