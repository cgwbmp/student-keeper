import React from 'react';
import style from './index.module.css';

interface LayoutProps {
  children?: React.ReactNode,
  onClickAdd?: () => void,
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const {
    children,
    onClickAdd,
  } = props;

  return (
    <div className={style.layout}>
      <header className={style.layout__header}>
        <h1 className={style.layout__title}>
          Students
        </h1>
      </header>
      <section className={style.layout__body}>
        {children}
      </section>
      <footer className={style.layout__footer}>
        <button
          className={style.layout__button}
          type="button"
          onClick={onClickAdd}
        >
          Add student
        </button>
      </footer>
    </div>
  );
};

export default Layout;
