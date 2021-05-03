import React from 'react';
//components
import CardItem from '../CardItem/CardItem'
//style
import style from './Card.module.css'
//type
interface CardComponentProps {
	vaccineData: any;
}

const CardComponent: React.FC<CardComponentProps> = ({ vaccineData }) => {
	const datas = vaccineData.sessions;
	console.log(datas)
	return (<div className="style.cardContainer">
		{datas.map((data) => (<CardItem key={data.session_id} {...data} />))}
	</div>);
};

export default CardComponent;
