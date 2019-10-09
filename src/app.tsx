import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './components/layout';
import Form from './components/form';
import EditableCard from './containers/editable-card';
import {
  selectors,
  actions,
} from './store/journal';
import { Student } from './types';
import './app.css';

const App: React.FC = () => {
  const students = useSelector<any, Array<Student>>(selectors.getStudents);

  const isVisibleFormForNewStudent = useSelector<any, boolean>(
    selectors.isVisibleFormForNewStudent,
  );

  const dispatch = useDispatch();

  const onClickAdd = useCallback(() => {
    dispatch(actions.create());
  }, [dispatch]);

  const onCreate = useCallback((student: Student) => {
    dispatch(actions.confirmCreating(student));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(actions.cancelCreating());
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
