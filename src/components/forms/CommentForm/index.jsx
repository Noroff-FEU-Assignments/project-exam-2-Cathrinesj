import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup'; 
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import FormError from "../../common/FormError";
import { API } from "../../../constants/API"; 
import AuthContext from "../../../context/AuthContext";
import { Card, Form } from "react-bootstrap";

const url = API + 'posts/<id>/comment'

const schema = yup.object().shape({
  comment: yup.string().required('Please leave a comment'),
});

function CommentForm() {
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
      navigate('/post:id');
    } catch (error) {
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
    <Card className="opacity">
    <form onSubmit={handleSubmit(onSubmit)}>
      {loginError && <FormError>{loginError}</FormError>}
      <fieldset disabled={submitting}>
      <Form.Group>
          <Form.Control
          {...register('body')} placeholder="Comment" type="comment"/>
          {errors.comment && <FormError>{errors.comment.message} </FormError>}
        </Form.Group>
        <button>{submitting ? 'Commenting'  : 'Comment'} </button>
      </fieldset>
    </form>
    </Card>
    </>
  )
}

export default CommentForm;