const RESOURCES = ['request', 'success', 'failure'];

export const createReducer = (initialState, actionHandlers) => (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};

export const createActionTypes = (base) => {
  const res = {};

  RESOURCES.forEach((type) => {
    res[type] = `${base}_${type}`;
  });

  return res;
};

export const createAction = type => (req, args) => ({ type, payload: req, args });
