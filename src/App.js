import { Component } from 'react';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
  INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';
import './App.css';


const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  // ...
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    const { type } = this.state.selectionConfiguration || { type: CALENDAR_SELECTION_TYPE.single };
    this.setState({
      selectionConfiguration: {
        ...this.state.selectionConfiguration,
        type: type,
        date: date,
      },
    });
  };

  render() {
    return (
      <div className='App-header'>

        <h2 className='heading'>
        Flight Schedule.
        </h2>
        <BpkInput
        className='calender'
          id="dateInput"
          type={INPUT_TYPES.text}
          name="date"
          value={(this.state.selectionConfiguration.date || '').toString()}
          placeholder="Departure date"
        />
        <BpkCalendar
        className='cal-sel'
          id="calendar"
          onDateSelect={this.handleDateSelect}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          selectionConfiguration={this.state.selectionConfiguration}
        />

        <button className='button-10'>
          Continue
        </button>
      </div>
    );
  }
}
