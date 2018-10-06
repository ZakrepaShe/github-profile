import get from 'lodash/get';

export const getReducerProp = (prop) => (state) => get(state, prop);
export const isDev = () => process.env.NODE_ENV === 'development';

