import styles from "./index.module.scss";

export const Logo = () => {
  return (
    <a href="/home" className={styles.header__logo}>
      <h1>{`Rogue's Blog`}</h1>
    </a>
  );
};

export default Logo;
