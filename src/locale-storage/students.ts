import { getItem, setItem } from './api';
import { Student } from '../types';

const itemName = 'students';

function getStudents(): Array<Student> {
  return getItem(itemName);
}

function setStudents(students: Array<Student>): void {
  return setItem(itemName, students);
}

export {
  getStudents,
  setStudents,
};
