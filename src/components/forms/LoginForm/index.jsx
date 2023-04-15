import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup'; 
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import FormError from "../../common/FormError";
import { API } from "../../../constants/API"; 
import AuthContext from "../../../context/AuthContext";
import { Form } from "react-bootstrap";

const url = API + 'auth/login'

const schema = yup.object().shape({
  email: yup.string().required('Please enter your e-mail'), 
  password: yup.string().required('Please enter your password'),
});

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const {
    register, 
    handleSubmit,
    reset, 
    formState: { errors }, 
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [ ,setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    reset();

    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      navigate('/posts');
    } catch (error) {
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      {loginError && <FormError>{FormError}</FormError>}
      <fieldset disabled={submitting}>
        <Form.Group>
          <Form.Control {...register('email')} placeholder = "email"/>
          {errors.email && <FormError>{errors.email.message} </FormError>}
        </Form.Group>

        <Form.Group>
          <Form.Control
          {...register('password')}
          placeholder="Password"
          type="password"/>
          {errors.password && <FormError>{errors.password.message} </FormError>}
        </Form.Group>
        <button>{submitting ? 'Logging in'  : 'Log In'} </button>
      </fieldset>
    </form>
  )
}

export default LoginForm;