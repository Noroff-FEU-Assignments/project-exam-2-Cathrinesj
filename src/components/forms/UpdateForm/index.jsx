import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup'; 
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import FormError from "../../common/FormError";
import { API } from "../../../constants/API"; 
import { Container, Form } from "react-bootstrap";

const url = API + 'posts/5427';

const schema = yup.object().shape({
  title: yup.string().required('Please set a Title'),
  body: yup.string(),
  media: yup.string(),
});

function UpdateForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const options = {
    headers: {
        Authorization: "Bearer ${accessToken} ",
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
      const response = await axios.put(url, data, options);
      navigate('/');
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
            <Form.Control {...register('title')} placeholder = "Title" />
            {errors.title && <FormError>{errors.title.message} </FormError>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control {...register('body')} placeholder = "Comment" />
            {errors.body && <FormError>{errors.body.message} </FormError>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control {...register('media')} placeholder = "Imaeg (URL - link)" />
            {errors.media && <FormError>{errors.media.message} </FormError>}
          </Form.Group>
          <button>{submitting ? 'Commenting'  : 'Comment'} </button>
        </fieldset>
      </form>
    </Container>
    </>
    
    )
  }
  
  export default UpdateForm;