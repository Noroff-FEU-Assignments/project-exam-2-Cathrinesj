import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { useForm } from "react-hook-form";
import * as yup from 'yup'; 
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import FormError from "../../common/FormError";
import { API } from "../../../constants/API"; 
import { Container, Form } from "react-bootstrap";



const schema = yup.object().shape({
  body: yup.string().required('Please leave a comment'),
});

function CommentForm() {
  const [auth] = useContext(AuthContext);
  const accessToken = auth.accessToken;
  let { id } = useParams();
  const url = API + `posts/${id}/comment`;
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const options = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
  }
  
  const navigate = useNavigate();
  
  const {
    register, 
    handleSubmit,
    reset, 
    formState: { errors }, 
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    reset();
    
    try {
      const response = await axios.post(url, data, options);
      navigate(0);
    } catch (error) {
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  
  
  return (
    <>
    <Container className="opacity">
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <Form.Group className="mb-3">
            <Form.Control {...register('body')} placeholder = "Comment" />
            {errors.body && <FormError>{errors.body.message} </FormError>}
          </Form.Group>
          <button>{submitting ? 'Commenting'  : 'Comment'} </button>
        </fieldset>
      </form>
    </Container>
    </>
    
    )
  }
  
  export default CommentForm;