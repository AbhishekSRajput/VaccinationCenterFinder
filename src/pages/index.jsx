import { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

class DateRangeInput extends Component {
	state = {
		pinCode: '',
		date: moment(),
		simplifiedDate: '',
		focused: false,
		focusedInput: null,
		error: '',
	};

	async componentDidUpdate() {}

	onFormSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		const { date, pinCode, focused } = this.state;

		return (
			<form>
				<input
					type="number"
					value={pinCode}
					required
					onChange={(e) => this.setState({ pinCode: e.target.value })}
				/>
				<SingleDatePicker
					date={date} // momentPropTypes.momentObj or null
					onDateChange={(date) =>
						this.setState({
							simplifiedDate: moment(date).format('DD-MM-YYYY'),
						})
					} // PropTypes.func.isRequired
					focused={focused} // PropTypes.bool
					onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
					id="your_unique_id" // PropTypes.string.isRequired,
					required
				/>
				<button>Find Availability</button>
			</form>
		);
	}
}

export default DateRangeInput;
