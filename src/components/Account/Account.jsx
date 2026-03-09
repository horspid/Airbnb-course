import navIcon from './nav.svg';
import styles from './style.module.css'

const Account = () => {
	return (
		<button className={styles.account}>
			<div className={styles['account__nav-icon']}>
				<img src={navIcon} alt="Nav" />
			</div>
			<div className={styles.account__avatar}>
				<img src="./img/icons/user-avatar.svg" alt="User avatar" />
			</div>
		</button>
	);
};

export default Account;
