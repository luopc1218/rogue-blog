import TelegramIcon from "@mui/icons-material/Telegram";
import styles from "./index.module.scss";

export const Links = () => {
  return (
    <div className={styles.header__actions__links}>
      <i title="Join Telegram Group!">
        <TelegramIcon
          className={styles.header__actions__links__link}
        ></TelegramIcon>
      </i>
    </div>
  );
};

export default Links;
