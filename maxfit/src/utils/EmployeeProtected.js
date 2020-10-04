import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const EmployeeProtected = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token') && parseInt(localStorage.getItem("role")) >= 3) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
export default EmployeeProtected;
