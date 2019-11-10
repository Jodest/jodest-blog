import React from 'react';
import { compose } from 'redux';

import Form, { Input, Button } from '../Form';
import WithArticlesState from '../../Providers/Articles';

interface Props extends React.SFC {
};

const LoginForm: React.SFC<Props> = () => {
  return (
    <div>
      <Form
        // onSubmit={create}
      >
        <Input
          label="Login"
          type='text'
          name='login'
        />
        <Input
          label="Password"
          type='password'
          name='password'
        />
        <Button
          type='submit'
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

// export default LoginForm;
export default compose<Props>(
  // WithArticlesState,
)(LoginForm)
