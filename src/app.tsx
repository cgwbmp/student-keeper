import React, { useState, useCallback } from 'react';
import './app.css';

enum score {
  Poor = 1,
  Fair,
  Good,
  VeryGood,
  Excellent,
}

interface Student {
  id: string,
  fullName: string,
  birthday: string,
  academicPerformance?: score
}

const demo = [
  {
    id: '123',
    fullName: 'Name',
    birthday: '2000-01-01',
    academicPerformance: score.Good,
  },
];

type EnumType = { [s: number]: string };

function mapEnum(enumerable: EnumType, cb: Function): Array<any> {
  const keys: Array<string> = Object.keys(enumerable)
    .filter(key => typeof enumerable[key as any] === 'number');
  return keys.map(key => cb(enumerable[key as any], key));
}

const App: React.FC = () => {
  const [students, setStudents] = useState<Array<Student>>(demo);

  const [formVisibility, setFormVisibility] = useState<boolean>(false);

  const [form, setForm] = useState<object>({});

  const onClickAdd = useCallback(() => {
    setFormVisibility(true);
  }, []);

  const onClickCancel = useCallback(() => {
    setFormVisibility(false);
  }, []);

  const onSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    const newStudent = {
      id: Math.random().toString(),
      fullName: (form as Student).fullName,
      birthday: (form as Student).birthday,
      academicPerformance: (form as Student).academicPerformance,
    };
    setStudents([...students, newStudent]);
    setFormVisibility(false);
    setForm({});
  }, [students, form]);

  const onChange = useCallback((event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  }, [form]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Students
        </h1>
      </header>
      <section className="app-body">
        {students.map(student => (
          <div className="card" key={student.id}>
            <h4 className="card__title">
              {student.fullName}
              {(student.academicPerformance) ? (
                <span className="card__score">
                  {`★ ${student.academicPerformance}`}
                </span>
              ) : null}
            </h4>
            <p className="card__info">
              {student.birthday}
            </p>
          </div>
        ))}
      </section>
      <footer className="app-footer">
        <button
          type="button"
          onClick={onClickAdd}
        >
          Add student
        </button>
      </footer>
      {(formVisibility) ? (
        <form
          className="form"
          name="student"
          onSubmit={onSubmit}
        >
          <label
            className="form__field"
            htmlFor="student-fullName"
          >
            <span className="form__field-label">
              Full Name
            </span>
            <input
              className="form__field-input"
              id="student-fullName"
              name="fullName"
              onChange={onChange}
            />
          </label>
          <label
            className="form__field"
            htmlFor="student-name"
          >
            <span className="form__field-label">
              Birthday
            </span>
            <input
              className="form__field-input"
              id="student-birthday"
              name="birthday"
              type="date"
              onChange={onChange}
            />
          </label>
          <fieldset className="form__field">
            <span className="form__field-label">
              Academic Performance
            </span>
            {mapEnum(score, (value: string, key: number) => (
              <label
                className="form__field-radio"
                htmlFor={`student-academicPerformance-${key}`}
                key={key}
              >
                <input
                  className="form__field-radio-input"
                  id={`student-academicPerformance-${key}`}
                  name="academicPerformance"
                  value={value}
                  type="radio"
                  onChange={onChange}
                />
                {key}
              </label>
            ))}
          </fieldset>
          <footer className="form__footer">
            <button className="form__button" type="submit">
              Add
            </button>
            <button
              className="form__button form__button--secondary"
              type="button"
              onClick={onClickCancel}
            >
              Cancel
            </button>
          </footer>
        </form>
      ) : null}
    </div>
  );
};

export default App;
