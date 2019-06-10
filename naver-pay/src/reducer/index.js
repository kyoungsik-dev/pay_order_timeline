import { setLanguage } from '../action/index';  

const initialState = {
  langKey: 'ko'
};

const myApp = (state = initialState, action) => {  
  console.log(state, action);
  switch (action.type) {
    case 'LANG_SET':
      return {
        ...state, langKey: action.langKey
      };
    default:
      return state;
  }
}
export default myApp;