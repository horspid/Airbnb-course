import Account from '@components/Account/Account';
import Link from '@components/Link/Link';
import globeIcon from './globe.svg'

import styles from './style.module.css';

const UserMenu = () => {
	return (
		<div className={styles['user-menu']}>
			<div className={styles['user-menu__home']}>
				<Link text="Airbnb your home" />
			</div>
			<div className={styles['user-menu__local']}>
				<Link icon={globeIcon} />
			</div>
			<div className={styles['user-menu__user']}>
				<Account />
			</div>
		</div>
	);
}

export default UserMenu;