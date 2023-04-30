import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup'; 
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import FormError from "../../common/FormError";
import { API } from "../../../constants/API"; 
import { Container, Form } from "react-bootstrap";

const url = API + 'posts/5428/comment';

const schema = yup.object().shape({
  body: yup.string().required('Please leave a comment'),
});

function CommentForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  let { id } = useParams();

  const options = {
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQxMiwibmFtZSI6IkNhdGhyaW5lU0oiLCJlbWFpbCI6IkNhdEp1djQ2MzE1QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY4MTQxMDYxMn0.byp-C0Ha4rqxGlJm-c_WFZucnWQ8hpM4GDfti1Pg2G0",
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
      navigate('/post/5428/comment');
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