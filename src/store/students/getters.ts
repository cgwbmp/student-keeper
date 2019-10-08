import { Student } from '../../types';
import { ReduxGetter } from '../types';

const get: ReduxGetter<Array<Student>, Array<Student>> = state => state;

export {
  // eslint-disable-next-line
  get,
};
