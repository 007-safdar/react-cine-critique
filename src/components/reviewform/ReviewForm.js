import React from "react";
import {Form,Button} from 'react-bootstrap';

function ReviewForm({reviewSubmitHandler,refText,defaultValue}){

return(
    <Form>
    <Form.Group className="mb-3" >
    <Form.Label>Write a Review ?</Form.Label>
  <Form.Control ref ={refText} as="textarea" placeholder={defaultValue} /></Form.Group>
      <Button onClick ={reviewSubmitHandler}variant="dark">Submit</Button>
</Form>
)
};

export default ReviewForm;