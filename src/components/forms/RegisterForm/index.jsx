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
import { ReactComponent as ReactLogo } from "../../../images/logo/logo.svg"; 

const url = API + 'auth/register'

const schema = yup.object().shape({
  name: yup.string().required('Please enter a username'),
  email: yup.string().email('Must be a stud.noroff.no or noroff.no mail').required('Please enter your e-mail'), 
  password: yup.string().min(8).required('Please enter your password'),
});

function RegisterForm() {
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
      navigate('/login');
    } catch (error) {
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
    <div>
      <ReactLogo/>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register User</h2>
      {loginError && <FormError>{loginError}</FormError>}
      <fieldset disabled={submitting}>
      <Form.Group>
          <Form.Control
          {...register('name')} placeholder="Username" type="name"/>
          {errors.name && <FormError>{errors.name.message} </FormError>}
        </Form.Group>
        <Form.Group>
          <Form.Control {...register('email')} placeholder = "Email (must be stud.noroff or noroff e-mail)"/>
          {errors.email && <FormError>{errors.email.message} </FormError>}
        </Form.Group>
        <Form.Group>
          <Form.Control
          {...register('password')} placeholder="Password" type="password"/>
          {errors.password && <FormError>{errors.password.message} </FormError>}
        </Form.Group>
        <Form.Group>
          <Form.Control
          {...register('avatar')} placeholder="Avatar (URL-Link)" type="avatar"/>
        </Form.Group>
        <Form.Group>
          <Form.Control
          {...register('banner')} placeholder="Banner Image (URL-Link)" type="banner"/>
        </Form.Group>
        <button>{submitting ? 'Registering'  : 'Register'} </button>
      </fieldset>
    </form>
    </>
  )
}

export default RegisterForm;