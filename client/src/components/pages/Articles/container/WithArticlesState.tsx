import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { compose } from 'redux';
import { IStore } from '../../../../store/store';

// import { toggleAddTaskDialog } from '../../store/add-task-dialog';
// import { addTask } from '../../store/tasks';

interface ArticlesProps extends DispatchProp<IStore> {

}

const WithArticlesState = <P extends object>(Wrapped: React.ComponentType<P>) => (props: P) => {
  console.log(Wrapped, props);
  return (
    <Wrapped {...props} />
  );
}

const mapStateToProps = ({articles}: IStore) => ({
  articles
});

const mapDispatchToProps = {
  // toggleAddTaskDialog,
  // addTask
};

// export default connect(mapStateToProps, mapDispatchToProps)(WithArticlesState);

export default compose(
  connect<{}, {}, ArticlesProps>(mapStateToProps, mapDispatchToProps),
  WithArticlesState
);