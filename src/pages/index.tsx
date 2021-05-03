//library
import { Component } from 'react';
import Head from 'next/head'
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
//components
import CardComponent from '../components/CardComponent/Card.component'
//style
import homeStyle from '../styles/home.module.css'

class DateRangeInput extends Component {
	state = {
		pinCode: '',
		date: moment(),
		simplifiedDate: '',
		focused: false,
		focusedInput: null,
		error: '',
		loading: true,
		vaccineData: [],
	};

	async componentDidUpdate(prevProps, prevState) {
		if (prevState.pinCode !== this.state.pinCode) {
			const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.state.pinCode}&date=${this.state.simplifiedDate}`;
			const response = await fetch(url);
			const data = await response.json();
			this.setState(() => {
				return {
					vaccineData: data,
					loading: false,
				};
			});
		}
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		const pinCode = e.target.elements.pinCode.value;
		const date = this.state.date;
		if (pinCode) {
			this.setState({ pinCode });
			this.setState({
				simplifiedDate: moment(date).format('DD-MM-YYYY'),
			});
			e.target.elements.pinCode.value = '';
		}
	};

	render() {
		const { date, focused, vaccineData, loading } = this.state;
		console.log();
		return (
			<>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<title>Vaccination Center Finder</title>
				</Head>
				<div className={homeStyle.homeContainer}>
					<h1 className={homeStyle.heading}>Vaccination Centers Finder</h1>
					<form onSubmit={this.onFormSubmit} className={homeStyle.form}>
						<input
							name="pinCode"
							placeholder="Pin code: 440009"
							type="number"
							className={homeStyle.input}
							required
						/>
						<SingleDatePicker
							date={date} // momentPropTypes.momentObj or null
							onDateChange={(date) => this.setState({ date })} // PropTypes.func.isRequired
							focused={focused} // PropTypes.bool
							onFocusChange={({ focused }) =>
								this.setState({ focused })
							} // PropTypes.func.isRequired
							id="your_unique_id" // PropTypes.string.isRequired,
							displayFormat="DD/MM/YYYY"
							numberOfMonths={1}
							showDefaultInputIcon
							showClearDate
							withFullScreenPortal
						/>
						<button className={homeStyle.button}>
							Search Locale
						</button>
					</form>
					{loading ? <p>....</p> : <CardComponent vaccineData={vaccineData} />}
				</div></>
		);
	}
}

export default DateRangeInput;
