export const Types = {
  GET_REQUEST: 'post-comments/GET_REQUEST',
  GET_SUCCESS: 'post-comments/GET_SUCCESS',
  GET_FAILURE: 'post-comments/GET_FAILURE',
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),
  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: error,
  }),
};
