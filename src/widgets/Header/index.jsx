import { Logo, SearchBar } from "@shared/ui";

import { UserMenu } from "@features";
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
