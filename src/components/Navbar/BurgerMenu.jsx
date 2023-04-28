import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ open, setOpen, path }) => {
  const isDefaultPath = path === '';
  const isProjectsPath = path === 'projects';
  const isPathColor = isDefaultPath || isProjectsPath;
  console.log(path);

  const menuButtonClassName = open ? styles.menuButtonOpen : styles.menuButton;
  const menuButtonBurgerClassName = isPathColor ? styles.menuButtonBurger : styles.menuButtonBurgerColor ;

  const handleMenuButtonClick = () => {
    setOpen(!open);
  };

  return (
    <div className={menuButtonClassName} onClick={handleMenuButtonClick}>
      <span className={menuButtonBurgerClassName}></span>
    </div>
  );
};

export default BurgerMenu;
