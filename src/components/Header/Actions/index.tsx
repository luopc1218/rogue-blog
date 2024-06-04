import Links from "@/components/Header/Actions/Links";
import Settings from "@/components/Header/Actions/Settings";
import styles from "./index.module.scss";
import Search from "@/components/Header/Actions/Search";

export const Actions = () => {
  return (
    <div className={styles.header__actions}>
      <Search></Search>
      <Links></Links>
      <Settings></Settings>
    </div>
  );
};

export default Actions;
