import styles from "./index.module.scss";
import Logo from "@/components/Header/Logo";
import Actions from "@/components/Header/Actions";
import Menu from "./Menu";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo></Logo>
        <Menu></Menu>
        <Actions></Actions>
      </div>
    </header>
  );
};

export default Header;
