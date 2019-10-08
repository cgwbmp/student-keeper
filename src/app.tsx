import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './components/layout';
import Form from './components/form';
import Card from './components/card';
import {
  selectors as studentsSelectors,
  actions as studentsActions,
} from './store/students';
import { Student, Triggers } from './types';
import './app.css';

const App: React.FC = () => {
  const students = useSelector<{}, Array<Student>>(studentsSelectors.get);

  const dispatch = useDispatch();

  const [editingStudents, setEditingStudents] = useState<Triggers>({});

  const [formVisibility, setFormVisibility] = useState<boolean>(false);

  const onClickAdd = useCallback(() => {
    setFormVisibility(true);
  }, []);

  const onCreate = useCallback((student: Student) => {
    setFormVisibility(false);
    dispatch(studentsActions.add(student));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    setFormVisibility(false);
  }, []);

  const onEdit = useCallback((studentId: string) => {
    setEditingStudents({
      ...editingStudents,
      [studentId]: true,
    });
  }, [editingStudents]);

  const onCancelEdit = useCallback((studentId?: string) => {
    if (studentId) {
      setEditingStudents({
        ...editingStudents,
        [studentId]: false,
      });
    }
  }, [editingStudents]);

  const onSave = useCallback((changedStudent: Student) => {
    setEditingStudents({
      ...editingStudents,
      [changedStudent.id]: false,
    });
    dispatch(studentsActions.save(changedStudent));
  }, [editingStudents, dispatch]);

  const onDelete = useCallback((studentId: string) => {
    dispatch(studentsActions.remove(studentId));
  }, [dispatch]);

  return (
    <Layout
      onClickAdd={onClickAdd}
    >
      {students.map(student => (
        (editingStudents[student.id]) ? (
          <Form
            key={student.id}
            data={student}
            onSave={onSave}
            onCancel={onCancelEdit}
          />
        ) : (
          <Card
            key={student.id}
            id={student.id}
            fullName={student.fullName}
            birthday={student.birthday}
            academicPerformance={student.academicPerformance}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      ))}
      {(formVisibility) ? (
        <Form
          onCreate={onCreate}
          onCancel={onCancel}
        />
      ) : null}
    </Layout>
  );
};

export default App;
