// 根级别的 mutation
import * as types from './mutation-types';

export default {
  [types.SET_NAME](state, name) {
    state.name = name;
  }
}
