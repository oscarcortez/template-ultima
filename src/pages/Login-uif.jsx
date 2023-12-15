import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Password } from 'primereact/password';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string('Ingresa tu correo')
        .email('Email invalido')
        .required('Email requerido'),
      password: Yup.string('Ingresa tu password')
        .min(4, 'Password debe ser 4 caracteres o mas')
        .required('Password requerido')
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <div className="pages-body login-page flex flex-column">
      <div className="align-self-center mt-auto mb-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="pages-panel card flex flex-column">
          <div className="pages-header px-3 py-2">
            <h2>Fuentes Abiertas - Login</h2>
          </div>
          <h4>Bienvenido</h4>
          <div className="pages-detail mb-6 px-6">
            Por favor, Ingrese con sus credenciales de acceso
          </div>
          <div className="input-panel flex flex-column px-3">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-envelope"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  type="text"
                  id="email"
                  name="email"
                  autoFocus
                  autoComplete="email"
                  {...formik.getFieldProps('email')}
                  className={
                    formik.errors.email && formik.touched.email
                      ? 'p-invalid'
                      : ''
                  }
                />
                <label htmlFor="email">Email</label>
              </span>
            </div>
            {formik.errors.email && formik.touched.email ? (
              <Message
                severity="error"
                text={formik.errors.email}
              />
            ) : (
              <span className="mt-6"></span>
            )}

            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <span className="p-float-label">
                <Password
                  id="password"
                  name="password"
                  toggleMask
                  {...formik.getFieldProps('password')}
                  className={
                    formik.errors.password && formik.touched.password
                      ? 'p-invalid'
                      : ''
                  }
                />
                <label htmlFor="password">Password</label>
              </span>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <Message
                severity="error"
                text={formik.errors.password}
              />
            ) : (
              <span className="mt-6"></span>
            )}
          </div>

          <Button
            type="submit"
            className="login-button mb-6 mt-6 px-3"
            label="LOGIN"></Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
