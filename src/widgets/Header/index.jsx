import Logo from "@components/Logo/Logo";
import SearchBar from "@components/SearchBar/SearchBar";
import UserMenu from "@components/UserMenu/UserMenu";
import Container from "@layouts/Container/Container";

import styles from "./styles/index.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.header__row}>
					<div className={styles.header__logo}>
						<Logo />
					</div>
					<div className={styles.header__search}>
						<SearchBar />
					</div>
					<div className={styles.header__user}>
						<UserMenu />
					</div>
				</div>
			</Container>
		</header>
	);
}
