import React, { useState, useCallback } from 'react';
import Layout from './components/layout';
import Form from './components/form';
import Card from './components/card';
import { Student, Triggers } from './types';
import './app.css';

const App: React.FC = () => {
  const [students, setStudents] = useState<Array<Student>>([]);

  const [editingStudents, setEditingStudents] = useState<Triggers>({});

  const [formVisibility, setFormVisibility] = useState<boolean>(false);

  const onClickAdd = useCallback(() => {
    setFormVisibility(true);
  }, []);

  const onCreate = useCallback((student: Student) => {
    setStudents([...students, student]);
    setFormVisibility(false);
  }, [students]);

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
    setStudents(
      students.map(student => (
        (student.id === changedStudent.id) ? changedStudent : student
      )),
    );
    setEditingStudents({
      ...editingStudents,
      [changedStudent.id]: false,
    });
  }, [students, editingStudents]);

  const onDelete = useCallback((studentId: string) => {
    setStudents(students.filter(({ id }) => id !== studentId));
  }, [students]);

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
