import React from 'react'
import PropTypes from 'prop-types'

import i18n from '../../utils/i18n.js'
import ReactDatePickerHeader from '../ReactDatePickerHeader'
import ReactDatePickerSelectDay from '../ReactDatePickerSelectDay'

const ReactDatePickerViewDay = ({ date, onChange, onChangeView }) => {
  const title = [
    date.month && i18n()['month'][`month_${date.month}`],
    date.year,
  ].filter(Boolean).join(' ')

  return (
    <>
      <ReactDatePickerHeader
        title={title}
        onClickTitle={() => onChangeView.next()}
        onChangePrev={() => onChange({ callback: false })({ month: date.month - 1 })}
        onChangeNext={() => onChange({ callback: false })({ month: date.month + 1 })}
      />
      <ReactDatePickerSelectDay
        date={date}
        onChange={onChange({ callback: true })}
      />
    </>
  )
}

ReactDatePickerViewDay.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeView: PropTypes.shape({
    next: PropTypes.func.isRequired,
  }),
}

ReactDatePickerViewDay.defaultProps = {
}

export default ReactDatePickerViewDay
