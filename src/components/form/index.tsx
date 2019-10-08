import React, { useState, useCallback } from 'react';
import { score } from '../../constants';
import { Student } from '../../types';
import { mapEnum } from '../utils';
import style from './index.module.css';

type Data = {
  fullName: string,
  birthday: string,
  academicPerformance: number,
};

const defaultData = {
  fullName: '',
  birthday: '',
  academicPerformance: 0,
};

interface FormProps {
  data?: Student | undefined,
  onCreate?: (student: Student) => void,
  onSave?: (student: Student) => void,
  onCancel?: (id?: string) => void,
}

const Form: React.FC<FormProps> = (props: FormProps) => {
  const {
    data = defaultData,
    onCancel,
    onCreate,
    onSave,
  } = props;

  const isEdit = 'id' in data;

  const [form, setForm] = useState<Data>(data as Data);

  const [isInvalid, setIsInvalid] = useState<boolean>(true);

  const onSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    if (isInvalid) {
      return;
    }
    const student: Student = {
      id: ('id' in data) ? data.id : Math.random().toString(),
      fullName: form.fullName,
      birthday: form.birthday,
      academicPerformance: form.academicPerformance,
    };
    setForm(defaultData);
    if (isEdit) {
      onSave && onSave(student);
    } else {
      onCreate && onCreate(student);
    }
  }, [form, data, isEdit, isInvalid, onCreate, onSave]);

  const onChange = useCallback((event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;
    const newForm = {
      ...form,
      [target.name]: (target.name === 'academicPerformance')
        ? Number(target.value)
        : target.value,
    };
    setForm(newForm);
    if (newForm.fullName && newForm.birthday) {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  }, [form]);

  const onClickCancel = useCallback((): void => {
    onCancel && onCancel(('id' in data) ? data.id : undefined);
  }, [data, onCancel]);

  return (
    <form
      className={style.form}
      name="student"
      onSubmit={onSubmit}
    >
      <label
        className={style.form__field}
        htmlFor="student-fullName"
      >
        <span className={style['form__field-label']}>
          Full Name
        </span>
        <input
          className={style['form__field-input']}
          id="student-fullName"
          name="fullName"
          value={form.fullName}
          onChange={onChange}
        />
      </label>
      <label
        className={style.form__field}
        htmlFor="student-name"
      >
        <span className={style['form__field-label']}>
          Birthday
        </span>
        <input
          className={style['form__field-input']}
          id="student-birthday"
          name="birthday"
          value={form.birthday}
          type="date"
          onChange={onChange}
        />
      </label>
      <fieldset className={style.form__field}>
        <span className={style['form__field-label']}>
          Academic Performance
        </span>
        {mapEnum(score, (value: number, key: string) => (
          <label
            className={style['form__field-radio']}
            htmlFor={`student-academicPerformance-${key}`}
            key={key}
          >
            <input
              className={style['form__field-radio-input']}
              id={`student-academicPerformance-${key}`}
              name="academicPerformance"
              value={value}
              checked={form.academicPerformance === value}
              type="radio"
              onChange={onChange}
            />
            {key}
          </label>
        ))}
      </fieldset>
      <footer className={style.form__footer}>
        <button className={style.form__button} type="submit" disabled={isInvalid}>
          {(isEdit) ? 'Save' : 'Add'}
        </button>
        <button
          className={[style.form__button, style['form__button--secondary']].join(' ')}
          type="button"
          onClick={onClickCancel}
        >
          Cancel
        </button>
      </footer>
    </form>
  );
};

export default Form;
