import React from 'react'
import {FileDrop} from './FileDrop/';
import {Form, FormGroup, Label,Input,Col} from 'reactstrap';

export const UserProfile=()=> {
  return(
  <FormGroup row>
    <Label for="pw" sm={12}>
      new password
    </Label>
    <Col sm={8}>
    <Input
      id="pwd"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
    </Col>
    <Col sm={4}>
    <Input
      id="button"
      name="change password"
      onClick={()=>console.log('Change password...')}
      placeholder="password placeholder"
      type="password"
    />
    </Col>
  </FormGroup>
  )
}
