import React, { useCallback } from 'react';
import { Student } from '../../types';
import style from './index.module.css';

interface CardProps extends Student {
  onEdit?: (id: string) => void,
  onDelete?: (id: string) => void,
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const {
    id,
    fullName,
    birthday,
    academicPerformance,
    onEdit,
    onDelete,
  } = props;

  const onClickEdit = useCallback(() => {
    onEdit && onEdit(id);
  }, [id, onEdit]);

  const onClickDelete = useCallback(() => {
    onDelete && onDelete(id);
  }, [id, onDelete]);

  return (
    <div className={style.card}>
      <h4 className={style.card__title}>
        {fullName}
        {(academicPerformance) ? (
          <span className={style.card__score}>
            {`★ ${academicPerformance}`}
          </span>
        ) : null}
      </h4>
      <p className={style.card__info}>
        {birthday}
      </p>
      <button className={style.card__button} type="button" onClick={onClickEdit}>
        Edit
      </button>
      <span className={style.card__sep}>
        |
      </span>
      <button className={style.card__button} type="button" onClick={onClickDelete}>
        Delete
      </button>
    </div>
  );
};

export default Card;
