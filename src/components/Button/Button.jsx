import { IoIosArrowRoundBack } from 'react-icons/io';
import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ goBack }) => {
  return (
    <button onClick={goBack} className={s.button} type="button">
      <IoIosArrowRoundBack /> Go back
    </button>
  );
};

export default Button;

Button.propTypes = {
  goBack: PropTypes.func,
};
