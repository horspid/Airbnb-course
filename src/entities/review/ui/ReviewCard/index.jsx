export const ReviewCard = ({ data }) => {
	return (
		<article className="review">
			<div className="review__header flex gap-6">
				<img
					src={data.path}
					alt="user avatar"
					className="rounded-full"
				/>
				<div className="review__user">
					<h4 className="review__username font-medium">
						{data.username}
					</h4>
					<p className="review__date text-gray-400 text-sm">
						{data.date}
					</p>
				</div>
			</div>
			<p className="review__text mt-4">{data.text}</p>
		</article>
	);
};
