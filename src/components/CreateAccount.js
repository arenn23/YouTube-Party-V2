import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { GoogleApiButton } from './GoogleApiButton';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

//Component to hold layout of the form.
//Controlled form
//Cancel button routes back to Landing component.
//Submit button routes back to Landing via onSubmit component
const CreateAccountForm = props => {
  return (
    <>
      <Form style={{ marginBottom: '130px' }} onSubmit={props.handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={props.name}
            onChange={props.handleChange}
            placeholder="First Last"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={props.email}
            onChange={props.handleChange}
            placeholder="email@email.com"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={props.password}
            onChange={props.handleChange}
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="verifyPassword">Verify Password</Label>
          <Input
            type="password"
            id="verifyPassword"
            name="verifyPassword"
            value={props.verifyPassword}
            onChange={props.handleChange}
            placeholder="Verify Password"
          />
        </FormGroup>
        <Button className="btn btn-light" type="submit" value="submit">
          Create Account
        </Button>
        <Link to="/">
          <Button className="btn btn-danger">Cancel</Button>
        </Link>
      </Form>
      <Footer />
    </>
  );
};

//Display component for Create an Account page.
//Imports and renders GoogleApiButton and the CreatAccountForm component in this file.
class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      verifyPassword: '',
      submitted: false,
    };
  }

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
    console.log(this.state);
  };

  //Will route back to Landing component once triggered
  handleSubmit = event => {
    this.setState({ submitted: true });
    window.location.href = '/';
    event.preventDefault();
  };

  render() {
    return (
      <>
        <Header />
        <div className="d-flex justify-content-center mt-5 mb-2">
          <h3>Create an Account</h3>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <GoogleApiButton />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <CreateAccountForm
            formData={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </>
    );
  }
}

export default CreateAccount;
