import React from 'react';

import AdminPanel from '../../AdminPanel';
import LoginForm from '../../LoginForm';

interface Props {
};

const AdminPage: React.SFC<Props> = () => {
  return (
    <div>
      <LoginForm />
      <AdminPanel />
    </div>
  );
};

export default AdminPage;
