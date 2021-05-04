//library
import { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
//components
import CardComponent from '../components/CardComponent/Card.component';
//style
import homeStyle from '../styles/home.module.css';

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
		return (
			<>
				<div className={homeStyle.homeContainer}>
					<main>
						<Head>
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1"
							/>
							<meta charSet="utf-8" />
							<meta
								name="description"
								content="An web app to find local corona virus vaccination centers"
							/>
							<meta
								property="og:title"
								content="Vaccination Center Finder"
								key="ogtitle"
							/>
							<meta
								property="og:description"
								content="An web app to find local corona virus vaccination centers"
								key="ogdesc"
							/>
							<title>Vaccination Center Finder</title>
						</Head>
						<h1 className={homeStyle.heading}>
							Vaccination Center Finder
						</h1>
						<Link
							href="https://github.com/ApcGamer/VaccinationCenterFinder"
							passHref
						>
							<a className="animate-pulse">
								Click here to contribute to this project
							</a>
						</Link>
					</main>
					<form
						onSubmit={this.onFormSubmit}
						className={homeStyle.form}
					>
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
							withFullScreenPortal
						/>
						<button
							className={homeStyle.button}
							arial-label="form submit"
						>
							Search Locale
						</button>
					</form>
					{loading ? (
						<p className="animate-pulse px-3 py-2 bg-green-200 uppercase">
							** Important refresh the page if you're searching
							with different Date on Same PinCode **
						</p>
					) : (
						<CardComponent vaccineData={vaccineData} />
					)}
				</div>
			</>
		);
	}
}

export default DateRangeInput;
