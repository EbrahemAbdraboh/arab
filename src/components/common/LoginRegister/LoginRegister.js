import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import './LoginRegister.scss';


export const LoginRegister = () => (
  <Formik
    initialValues={{ email: "", password: "" }}

    validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "ضروري إدخال البريد الإلكتروني";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "بريد إلكتروني غير متطابق";
      }

      const passwordRegex = /(?=.*[0-9])/;
      if (!values.password) {
        errors.password = "ضروري إدخال كلمة المرور";
      } else if (values.password.length < 8) {
        errors.password = "كلمة المرور قصيرة جداً ، لابد أن تتضمن 8 حروف على الأقل";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "ضروري أن تتضمن كلمة المرور رقم على الأقل";
      }

      return errors;
    }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("ضروري إدخال البريد الإلكتروني"),
      password: Yup.string()
        .required("ضروري إدخال كلمة المرور")
        .min(8, "كلمة المرور قصيرة جداً ، لابد أن تتضمن 8 حروف على الأقل")
        .matches(/(?=.*[0-9])/, "ضروري أن تتضمن كلمة المرور رقم على الأقل")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return(
        <div className="login-register-wrapper">
          <Tab.Container defaultActiveKey="login">
            <Nav variant="pills" className="login-register-tab-list">
              <Nav.Item>
                <Nav.Link eventKey="login">
                  <h4>دخول</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="register">
                  <h4>تسجيل</h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <div className="login-form-container">
                  <div className="login-register-form">
                    <form onSubmit={handleSubmit}>
                    <label htmlFor="email">البريد الإلكتروني</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder=""
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email && "error"}
                      />
                      {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                      )}
                      <label htmlFor="password">كلمة المرور</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder=""
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                      />
                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                      <div className="button-box">

                        <button type="submit" disabled={isSubmitting}>
                          <span>دخول</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="register">
                <div className="login-form-container">
                  <div className="login-register-form">
                    <form>
                    <label htmlFor="username">اسم المستخدم</label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder=""
                      />

                      <label htmlFor="email">البريد الإلكتروني</label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder=""
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                        />
                        {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                        )}
                        <label htmlFor="password">كلمة المرور</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder=""
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.password && touched.password && "error"}
                        />
                        {errors.password && touched.password && (
                          <div className="input-feedback">{errors.password}</div>
                        )}
                      <div className="button-box">
                        <button type="submit" disabled={isSubmitting}>
                          <span>تسجيل</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      );
    }}
    </Formik>
);
