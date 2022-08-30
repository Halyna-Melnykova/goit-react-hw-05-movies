import s from './Button.module.css';

const Button = ({ goBack }) => {
  return (
    <button onClick={goBack} className={s.button} type="button">
      Go back
    </button>
  );
};

export default Button;
