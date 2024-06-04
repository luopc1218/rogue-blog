import styles from './index.module.scss'
import Logo from "@/components/Header/Logo";
import Actions from "@/components/Header/Actions";

export const Header = () => {
    return <header className={styles.header}>
        <Logo></Logo>
        <Actions></Actions>
    </header>
}

export default Header