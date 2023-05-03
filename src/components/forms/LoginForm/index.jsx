import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup'; 
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import FormError from "../../common/FormError";
import { API } from "../../../constants/API"; 
import AuthContext from "../../../context/AuthContext";
import { Container, Form } from "react-bootstrap";
import { ReactComponent as ReactLogo } from "../../../images/logo/logo.svg"; 

const url = API + 'auth/login';

const schema = yup.object().shape({
  email: yup.string().email('Must be a stud.noroff.no or noroff.no mail').required('Please enter your e-mail'), 
  password: yup.string().min(8).required('Please enter your password'),
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
  
  const [,setAuth] = useContext(AuthContext);
  
  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    reset();
    
    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      navigate('/posts');
      console.log(response);
    } catch (error) {
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }

  }

  
  return (
    <>
    <Container className="opacity">
      <div>
        <ReactLogo/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control {...register('email')} placeholder = "email" />
            {errors.email && <FormError>{errors.email.message} </FormError>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control {...register('password')} placeholder="Password" type="password"/>
            {errors.password && <FormError>{errors.password.message} </FormError>}
          </Form.Group>
          <button>{submitting ? 'Logging in'  : 'Log In'} </button>
        </fieldset>
      </form>
      <div>
        <Link to="/registeruser">Register new User</Link>
      </div>
    </Container>
    </>
    
    )
  }
  
  export default LoginForm;