import React from 'react';
//style
import style from './CardItem.module.css'

interface CardItemProps {
	address: string;
	available_capacity: number;
	block_name: string;
	district_name: string;
	center_id: number
	date: string;
	fee: string;
	fee_type: string;
	from: string;
	min_age_limit: number;
	name: string;
	pincode: number;
	slots: string[];
	state_name: string;
	to: string;
	vaccine: string;
}
const CardItem: React.FC<CardItemProps> = ({ address, available_capacity, block_name, district_name,
	center_id, date, fee, fee_type, from, to, min_age_limit,
	name, pincode, slots, state_name, vaccine }) => {

	return (<div className={style.itemContainer}>
		<table className="table-auto border-separate border border-green-800 ...">
			<thead>
				<tr>
					<th className="border border-green-600 ...">Title</th>
					<th className="border border-green-600 ...">Details</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="border border-green-600 ...">State</td>
					<td className="border border-green-600 ...">{state_name}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ">District</td>
					<td className="border border-green-600 ...">{district_name}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Pincode</td>
					<td className="border border-green-600 ...">{pincode}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Zone</td>
					<td className="border border-green-600 ...">{name}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Address</td>
					<td className="border border-green-600 ...">{address}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Date</td>
					<td className="border border-green-600 ...">{date}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Timing</td>
					<td className="border border-green-600 ...">{from} To {to}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Vaccine</td>
					<td className="border border-green-600 ...">{vaccine}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Fee Type</td>
					<td className="border border-green-600 ...">{fee_type}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Fee</td>
					<td className="border border-green-600 ...">{fee}</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Age Limit</td>
					<td className="border border-green-600 ...">{min_age_limit} years and above</td>
				</tr>
				<tr>
					<td className="border border-green-600 ...">Available Capacity</td>
					<td className="border border-green-600 ...">{available_capacity}</td>
				</tr>

			</tbody>
		</table>
	</div>)
};

export default CardItem;
