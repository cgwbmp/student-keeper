import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/card';
import Form from '../../components/form';
import {
  selectors,
  actions,
} from '../../store/journal';
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

  const isVisibleForm = useSelector<any, boolean>(
    state => selectors.isVisibleEditFormStudent(state, id),
  );

  const dispatch = useDispatch();

  const onEdit = useCallback((studentId: string) => {
    dispatch(actions.edit(studentId));
  }, [dispatch]);

  const onCancel = useCallback((studentId?: string) => {
    if (studentId) {
      dispatch(actions.cancelEditing(studentId));
    }
  }, [dispatch]);

  const onSave = useCallback((changedStudent: Student) => {
    dispatch(actions.confirmEditing(changedStudent));
  }, [dispatch]);

  const onDelete = useCallback((studentId: string) => {
    dispatch(actions.remove(studentId));
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
