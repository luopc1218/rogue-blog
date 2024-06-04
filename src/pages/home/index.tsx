import styles from './index.module.scss'
import Aside from "@/pages/home/components/Aside";

export const HomePage = () => {
    return <div className={styles.homePage}>
        <aside className={styles.homePage__aside}>
            <Aside></Aside>
        </aside>
        <main className={styles.homePage__main}>main</main>
    </div>;
};

export default HomePage;
