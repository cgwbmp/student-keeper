import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './components/layout';
import Form from './components/form';
import EditableCard from './containers/editable-card';
import {
  selectors as studentsSelectors,
  actions as studentsActions,
} from './store/students';
import {
  selectors as uiSelectors,
  actions as uiActions,
} from './store/ui';
import { Student } from './types';
import './app.css';

const App: React.FC = () => {
  const students = useSelector<{}, Array<Student>>(studentsSelectors.get);

  const isVisibleFormForNewStudent = useSelector<{}, boolean>(
    uiSelectors.isVisibleFormForNewStudent,
  );

  const dispatch = useDispatch();

  const onClickAdd = useCallback(() => {
    dispatch(uiActions.startAddNewStudent());
  }, [dispatch]);

  const onCreate = useCallback((student: Student) => {
    dispatch(uiActions.endAddNewStudent());
    dispatch(studentsActions.add(student));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(uiActions.endAddNewStudent());
  }, [dispatch]);

  return (
    <Layout
      onClickAdd={onClickAdd}
    >
      {students.map(student => (
        <EditableCard
          key={student.id}
          id={student.id}
          fullName={student.fullName}
          birthday={student.birthday}
          academicPerformance={student.academicPerformance}
        />
      ))}
      {(isVisibleFormForNewStudent) ? (
        <Form
          onCreate={onCreate}
          onCancel={onCancel}
        />
      ) : null}
    </Layout>
  );
};

export default App;
