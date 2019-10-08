import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/card';
import Form from '../../components/form';
import {
  actions as studentsActions,
} from '../../store/students';
import {
  selectors as uiSelectors,
  actions as uiActions,
} from '../../store/ui';
import { Student } from '../../types';

interface EditableCardProps extends Student {
}

const EditableCard: React.FC<EditableCardProps> = (props: EditableCardProps) => {
  const {
    id,
    fullName,
    birthday,
    academicPerformance,
  } = props;

  const isVisibleForm = useSelector<{}, boolean>(
    state => uiSelectors.isVisibleEditFormStudent(state, id),
  );

  const dispatch = useDispatch();

  const onEdit = useCallback((studentId: string) => {
    dispatch(uiActions.startEditStudent(studentId));
  }, [dispatch]);

  const onCancel = useCallback((studentId?: string) => {
    if (studentId) {
      dispatch(uiActions.endEditStudent(studentId));
    }
  }, [dispatch]);

  const onSave = useCallback((changedStudent: Student) => {
    dispatch(uiActions.endEditStudent(changedStudent.id));
    dispatch(studentsActions.save(changedStudent));
  }, [dispatch]);

  const onDelete = useCallback((studentId: string) => {
    dispatch(studentsActions.remove(studentId));
  }, [dispatch]);

  return (
    (isVisibleForm) ? (
      <Form
        key={id}
        data={props}
        onSave={onSave}
        onCancel={onCancel}
      />
    ) : (
      <Card
        key={id}
        id={id}
        fullName={fullName}
        birthday={birthday}
        academicPerformance={academicPerformance}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    )
  );
};

export default EditableCard;
