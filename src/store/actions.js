//根级别的 action
import * as types from './mutation-types';

export default{
    nameAsyn({commit},{name}){
        commit(types.SET_NAME, name);
    }
}