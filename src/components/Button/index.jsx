import P from 'prop-types';

export const Button = ({ title, onEventClick }) => {
  return <button onClick={onEventClick}>{title}</button>;
};

Button.propTypes = {
  title: P.number.isRequired,
  onEventClick: P.func.isRequired,
};
