import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import UserRepository from '../../repositories/user/user.repo';

export default class RegisterViewControl extends BaseViewControl {
    templateString: string = require('./register.vc.html');

    context: any = {};
}

register.viewControl('register-vc', RegisterViewControl, [UserRepository]);
        constructor(private userRepository: UserRepository) {
    super();
}