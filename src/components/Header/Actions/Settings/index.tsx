import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./index.module.scss";

export const Settings = () => {
  return (
    <i title={"Settings"}>
      <SettingsIcon className={styles.header__actions__settings}></SettingsIcon>
    </i>
  );
};

export default Settings;
