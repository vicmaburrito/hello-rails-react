const URL = '/api/things.json';

// Action types
const LOAD_THINGS = 'LOAD_THINGS';
const GET_THINGS = 'GET_THINGS';

const initialState = { messages: [], loading: true };

// Action Creators
export const getThing = () => (dispatch) => {
  dispatch({ type: LOAD_THINGS });

  const fetchThings = async () => {
    try {
      const fetching = await fetch(URL);
      const messages = await fetching.json();
      const payload = messages.things.map((msg)=> ({
        id: msg.id,
        message: msg.guid,
      }));
      dispatch({ type: GET_THINGS, payload});
    } catch (e) {
      console.log(e);
    }
  };
  fetchThings();
};

// Reducers
export const thingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_THINGS:
      return {...state, loading: true }
    case GET_THINGS:
      return {...state, loading: false, messages: action.payload }
    default:
      return state;
  }
};
