const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const initialState = {
  language: [
    [ true, 'Ru' ],
    [ false, 'Ua' ],
    [ false, 'En' ],
  ],
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      state.language.forEach(element => {
        if (element[0] === true) element[0] = false;
      });
      state.language.forEach(element => {
        if (element[1] === action.language) element[0] = true;
      });

      return {
        language: state.language,
      };
    }
    default:
      return state;
  }
};

export const changeLanguageAC = language => (
  { type: CHANGE_LANGUAGE, language }
);

export default headerReducer;
