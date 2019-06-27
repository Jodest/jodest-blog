import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import { toggleAddTaskDialog } from '../../store/add-task-dialog';
// import { addTask } from '../../store/tasks';

const WithArticlesState = (Wrapped) => (props) => {
  return (
    <Wrapped {...props} />
  );
}

const mapStateToProps = () => ({
  // addTaskDialog
});

const mapDispatchToProps = {
  // toggleAddTaskDialog,
  // addTask
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithArticlesState
);