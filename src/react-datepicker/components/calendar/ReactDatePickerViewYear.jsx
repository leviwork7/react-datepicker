import React from 'react'
import PropTypes from 'prop-types'

import ReactDatePickerHeader from '../ReactDatePickerHeader'
import ReactDatePickerSelectYear from '../ReactDatePickerSelectYear'

const ReactDatePickerViewYear = ({ date, onChange, onChangeView }) => {
  const title = [
    date.year - (date.year % 10),
    date.year - (date.year % 10) + 9,
  ].filter(Boolean).join('-')

  return (
    <>
      <ReactDatePickerHeader
        title={title}
        onClickTitle={() => onChangeView.next()}
        onChangePrev={() => onChange({ callback: false })({ year: date.year - 10 })}
        onChangeNext={() => onChange({ callback: false })({ year: date.year + 10 })}
      />
      <ReactDatePickerSelectYear
        date={date}
        onChange={(...args) => {
          onChangeView.prev()
          onChange({ callback: false })(...args)
        }}
      />
    </>
  )
}

ReactDatePickerViewYear.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeView: PropTypes.shape({
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
  }),
}

ReactDatePickerViewYear.defaultProps = {
}

export default ReactDatePickerViewYear
