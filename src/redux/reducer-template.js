const REDUCER_MESSAGE_CONST_FIRST = 'REDUCER_MESSAGE_CONST_FIRST';
const REDUCER_MESSAGE_CONST_SECOND = 'REDUCER_MESSAGE_CONST_SECOND';


let initialState = {
  smth: [

  ],
};

export const reducerTemplate = (state = initialState, action) => {
  switch (action.type) {
    case REDUCER_MESSAGE_CONST_FIRST: {
      return {
        ...state,
        // write smth
      };
    }
    case REDUCER_MESSAGE_CONST_SECOND: {
      return {
        ...state,
        // write smth
      };
    }
    default:
      return state;
  }
};

export const firstActionCreator = (value) => (
  { type: REDUCER_MESSAGE_CONST_FIRST, value }
);
export const secondActionCreator = () => (
  { type: REDUCER_MESSAGE_CONST_SECOND }
);


export default reducerTemplate;
