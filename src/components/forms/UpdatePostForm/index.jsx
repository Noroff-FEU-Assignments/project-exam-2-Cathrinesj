import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup'; 
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import FormError from "../../common/FormError";
import { API } from "../../../constants/API"; 
import { Container, Form } from "react-bootstrap";
import AuthContext from "../../../context/AuthContext";

const schema = yup.object().shape({
  title: yup.string(),
  body: yup.string(),
  media: yup.string(),
});


function UpdatePostForm() {
  const [auth] = useContext(AuthContext);
  const accessToken = auth.accessToken;
  let { id } = useParams();
  const url = API + `posts/${id}`;
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const options = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
  }
  
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
          <h1>Update post</h1>
          <Form.Group className="mb-3">
            <Form.Control {...register('title')} placeholder = "Title" />
            {errors.title && <FormError>{errors.title.message} </FormError>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control {...register('body')} placeholder = "Text" />
            {errors.body && <FormError>{errors.body.message} </FormError>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control {...register('media')} placeholder = "Image (URL - link)" />
            {errors.media && <FormError>{errors.media.message} </FormError>}
          </Form.Group>
          <button>{submitting ? 'Updating'  : 'Update'} </button>
         </fieldset>
      </form>
    </Container>
    </>
    
    )
  }
  
  export default UpdatePostForm;