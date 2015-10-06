import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class UserService extends BaseService {

}

register.injectable('user-svc', UserService);
