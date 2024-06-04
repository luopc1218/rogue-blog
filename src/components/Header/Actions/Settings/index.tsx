import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./index.module.scss";
import { useTheme } from "@/hooks/useTheme";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRef, useState } from "react";

export const Settings = () => {
  const { toggleTheme } = useTheme();

  const [openSettings, setOpenSettings] = useState(false);

  const settingsRef = useRef(null);

  return (
    <>
      <i
        ref={settingsRef}
        title={"Settings"}
        onClick={() => {
          setOpenSettings(true);
        }}
      >
        <SettingsIcon
          className={styles.header__actions__settings}
        ></SettingsIcon>
      </i>
      <Menu
        anchorEl={settingsRef.current}
        open={openSettings}
        onClose={() => setOpenSettings(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={toggleTheme}>Change Theme</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Settings;
