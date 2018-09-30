import React from 'react';

export const Capital = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const {Consumer, Provider} = React.createContext({});

export const connect = Component => {
  const hoc = props => (
    <Consumer>
      {context =>
        // eslint-disable-next-line react/prop-types
        <Component {...context} {...props} />
      }
    </Consumer>
  );
  hoc.displayName = `connected(${Component.displayName || Component.name})`;
  return hoc;
};