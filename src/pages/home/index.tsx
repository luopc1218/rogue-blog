import { PostList } from "./components/PostList";
import styles from "./index.module.scss";
import Aside from "@/pages/home/components/Aside";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePage__content}>
        <aside className={styles.homePage__aside}>
          <Aside></Aside>
        </aside>
        <main className={styles.homePage__main}>
          <PostList></PostList>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
