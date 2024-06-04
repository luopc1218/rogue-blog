import BloggerInfo from "./BloggerInfo";
import styles from "./index.module.scss";
import Navigation from "./Navigation";

export const Aside = () => {
  return (
    <div className={styles.homePage__aside}>
      <BloggerInfo></BloggerInfo>
      <Navigation></Navigation>
    </div>
  );
};

export default Aside;
