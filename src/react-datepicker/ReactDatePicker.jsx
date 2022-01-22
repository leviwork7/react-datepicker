import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { parseDate } from './utils/time.js'
import { useDateState, usePopupHandler } from './utils/hooks'

import ReactDatePickerCalendar from './ReactDatePickerCalendar'
import ReactDatePickerInput from './ReactDatePickerInput'

const ReactDatePicker = (props) => {
  const {
    date: _date,
    onSelect: _onSelect,
  } = props

  const elementRef = useRef()

  const [date, setDate, resetDate] = useDateState(_date)
  const [showCalendar, setCalendar] = usePopupHandler(elementRef, resetDate)

  const handleChangeDate = ({ callback }) => (newYMD) => {
    const params = {...date, ...newYMD}
    const newDate = parseDate(new Date(params.year, params.month - 1, params.day))

    if (callback) {
      setCalendar(false)
      _onSelect(newDate)
    }
    setDate(newDate)
  }

  return (
    <div className='react-datepicker' ref={elementRef} data-now={date.label}>
      <ReactDatePickerInput
        defaultValue={date.label}
        onChange={handleChangeDate}
        onClick={() => setCalendar(true)}
      />
      { showCalendar && (
        <div className='react-datepicker__calendar__wrapper'>
          <ReactDatePickerCalendar date={date} onChange={handleChangeDate} />
        </div>
      )}
    </div>
  )
}

ReactDatePicker.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onSelect: PropTypes.func,
}

ReactDatePicker.defaultProps = {
  date: null,
  onSelect: () => {},
}

export default ReactDatePicker
