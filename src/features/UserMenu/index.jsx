import { Link, Account } from "@shared/ui";
import globeIcon from "./assets/globe.svg";

import styles from "./styles/userMenu.module.css";

export const UserMenu = () => {
	return (
		<div className={styles["user-menu"]}>
			<div className={styles["user-menu__home"]}>
				<Link text="Airbnb your home" />
			</div>
			<div className={styles["user-menu__local"]}>
				<Link icon={globeIcon} />
			</div>
			<div className={styles["user-menu__user"]}>
				<Account />
			</div>
		</div>
	);
};
