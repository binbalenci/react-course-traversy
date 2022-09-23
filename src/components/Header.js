import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onShow, showAdd }) => {
  const onClick = () => {
    onShow();
  };

  return (
    <header className='header'>
      <h1 style={headingStyle}>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Hide' : 'Add'}
        onClick={onClick}
      />
    </header>
  );
};

Header.defaultProps = {
  title: '',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
const headingStyle = {
  //   color: 'red',
  //   backgroundColor: 'black',
  color: 'black',
};

export default Header;
