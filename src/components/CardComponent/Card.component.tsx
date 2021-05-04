import React from 'react';
//components
import CardItem from '../CardItem/CardItem';
//style
import style from './Card.module.css';
//type
interface CardComponentProps {
	vaccineData: any;
}

const CardComponent: React.FC<CardComponentProps> = ({ vaccineData }) => {
	const datas = vaccineData.sessions;
	return (
		<div className="style.cardContainer">
			{datas.length === 0 ? (
				<p className="animate-pulse bg-red-200 px-3 py-2 uppercase">
					Currently There's No Vaccination center active in your area.
				</p>
			) : (
				datas.map((data) => (
					<CardItem key={data.session_id} {...data} />
				))
			)}
		</div>
	);
};

export default CardComponent;
