import PropTypes from 'prop-types';
import Button from './Button';

const Header = (pr) => {
  const onClick = () => {
    console.log('Click');
  };

  return (
    <header className='header'>
      <h1 style={headingStyle}>{pr.title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
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
