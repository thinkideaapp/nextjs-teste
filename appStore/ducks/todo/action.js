export const Types = {
  GET_INSERT_REQUEST: 'todo-action/GET_INSERT_REQUEST',
  GET_UPDATE_REQUEST: 'todo-action/GET_UPDATE_REQUEST',
  GET_DELETE_REQUEST: 'todo-action/GET_DELETE_REQUEST',

  GET_SUCCESS: 'todo-action/GET_SUCCESS',
  GET_FAILURE: 'todo-action/GET_FAILURE',
};

const initialState = {
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.GET_INSERT_REQUEST ||
      Types.GET_UPDATE_REQUEST ||
      Types.GET_DELETE_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.GET_SUCCESS:
      return {
        loading: false,
        error: null,
      };
    case Types.GET_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getInsertRequest: data => ({
    type: Types.GET_INSERT_REQUEST,
    payload: data,
  }),
  getUpdateRequest: data => ({
    type: Types.GET_UPDATE_REQUEST,
    payload: { data },
  }),
  getDeleteRequest: data => ({
    type: Types.GET_DELETE_REQUEST,
    payload: { data },
  }),
  // REMOVE O LOADING
  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  // REMOVER O LOADING E EXIBIR MSG AO USUARIO
  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: error,
  }),
};
