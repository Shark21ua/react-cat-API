import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import { Form, Input } from 'antd';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik, Field } from 'formik';
import Header from './Header';
import { ConnectedInput } from '../../components';
import { signInUser, checkAuth } from '../../features/auth/operations';
import schema from './validation.schema';
import './styles.scss';

const FormItem = Form.Item;

const Login = (props) => {
  const { touched, errors, handleSubmit, isLogged, location, checkAuthentication } = props;
  const { from } = location.state || { from: { pathname: "/breed" } };

  useEffect(() => {
    if (!isLogged) checkAuthentication();
  }, [isLogged, checkAuthentication]);


  if (isLogged) return <Redirect to={from.pathname} />;

  return (
    <div className="login-page">
      <Header />
      <div className="container">
        <div className="form-container">
          <Form className="form" onSubmit={handleSubmit}>
            <div className="data-container">
              <div className="welcome-title">
                Log in to your account
              </div>
              <div className="error-message">
                {errors.generalError}
              </div>
              <FormItem>
                <div className="error-message">
                  {errors.username && touched.username ? errors.username : null}
                </div>
                <Field
                  id="username"
                  name="username"
                  placeholder="Username"
                  component={ConnectedInput}
                />
              </FormItem>
              <FormItem>
                <div className="error-message">
                  {errors.password && touched.password ? errors.password : null}
                </div>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  component={ConnectedInput}
                />
              </FormItem>
              <div className="login-button">
                <Input type="submit" value="Sign In" />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  errors: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  checkAuthentication: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({
  isLogged: auth.isLogged,
});

const mapDispatchToProps = {
  signInUser,
  checkAuthentication: checkAuth
};

const formikEnhancer = withFormik({
  validationSchema: schema,
  handleSubmit: async (values, { props, setFieldError, setSubmitting }) => {
    const { username, password } = values;

    try {
      setSubmitting(true);
      await props.signInUser({
        username,
        password
      });
    } catch (error) {
      setFieldError('generalError', error.message);
    } finally {
      setSubmitting(false);
    }
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps), formikEnhancer)(Login);
