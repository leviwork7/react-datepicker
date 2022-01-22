import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { parseDate } from './utils/time.js'
import { useDateState } from './utils/hooks'

import ReactDatePickerCalendar from './ReactDatePickerCalendar'

const ReactDatePicker = (props) => {
  const {
    date: _date,
    onSelect: _onSelect,
  } = props

  const elementRef = useRef()

  const [date, setDate] = useDateState(_date)

  const handleChangeDate = ({ callback }) => (newYMD) => {
    const params = {...date, ...newYMD}
    const newDate = parseDate(new Date(params.year, params.month - 1, params.day))

    if (callback) {
      _onSelect(newDate)
    }
    setDate(newDate)
  }

  return (
    <div className='react-datepicker' ref={elementRef} data-now={date.label}>
      <ReactDatePickerCalendar date={date} onChange={handleChangeDate} />
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
