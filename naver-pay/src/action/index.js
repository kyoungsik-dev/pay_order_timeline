// action type(명령어)
export const LANG_SET = 'LANG_SET';


// action creators(액션 메서드)
export function setLanguage(langKey) {  
  return { 'type': LANG_SET, langKey};
}
