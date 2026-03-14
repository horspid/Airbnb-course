export const IconStar = ({ size }) => {
	if (size === "small") {
		return (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.00008 3.1665L9.16675 6.83317H12.8334L9.83341 9.1665L10.8334 12.8332L8.00008 10.4998L5.16675 12.8332L6.16675 9.1665L3.16675 6.83317H6.83341L8.00008 3.1665Z"
					stroke="#DE3151"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}
	if (size === "lg") {
		return (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15.9999 6.33325L18.3333 13.6666H25.6666L19.6666 18.3333L21.6666 25.6666L15.9999 20.9999L10.3333 25.6666L12.3333 18.3333L6.33325 13.6666H13.6666L15.9999 6.33325Z"
					fill="#DE3151"
					stroke="#DE3151"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	} else
		return (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.0002 3.9585L11.4585 8.54183H16.0418L12.2918 11.4585L13.5418 16.0418L10.0002 13.1252L6.4585 16.0418L7.7085 11.4585L3.9585 8.54183H8.54183L10.0002 3.9585Z"
					fill="#FCD34D"
					stroke="#F59E0B"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
};
