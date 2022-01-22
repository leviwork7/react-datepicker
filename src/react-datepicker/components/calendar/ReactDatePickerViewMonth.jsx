import React from 'react'
import PropTypes from 'prop-types'

import ReactDatePickerHeader from '../ReactDatePickerHeader'
import ReactDatePickerSelectMonth from '../ReactDatePickerSelectMonth'

const ReactDatePickerViewMonth = ({ date, onChange, onChangeView }) => {
  const title = [
    date.year,
  ].filter(Boolean).join(' ')

  return (
    <>
      <ReactDatePickerHeader
        title={title}
        onClickTitle={() => onChangeView.next()}
        onChangePrev={() => onChange({ callback: false })({ year: date.year - 1 })}
        onChangeNext={() => onChange({ callback: false })({ year: date.year + 1 })}
      />
      <ReactDatePickerSelectMonth
        date={date}
        onChange={(...args) => {
          onChangeView.prev()
          onChange({ callback: false })(...args)
        }}
      />
    </>
  )
}

ReactDatePickerViewMonth.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeView: PropTypes.shape({
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
  }),
}

ReactDatePickerViewMonth.defaultProps = {
}

export default ReactDatePickerViewMonth
