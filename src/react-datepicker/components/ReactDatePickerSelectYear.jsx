import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const ReactDatePickerSelectYear = ({ date, onChange }) => {
  const tenGroupYearList = Array.from({ length: 10 }, (_, idx) => date.year - (date.year % 10) + idx)
  const yearList = [
    tenGroupYearList[0] - 1,
    ...tenGroupYearList,
    tenGroupYearList[tenGroupYearList.length - 1] + 1,
  ]

  const isCurrentYear = (y) => y === date.year
  const isOutside = (y) => tenGroupYearList.indexOf(y) === -1

  return (
    <div className='react-datepicker-select-year'>
      {
        yearList.map((y) => (
          <div
            key={y}
            className={clsx(
              '__year',
              'react-datepicker__base--picker-hover',
              {
                'react-datepicker__base--picker-current': isCurrentYear(y),
                'react-datepicker__base--picker-outside': isOutside(y),
            })}
            onClick={() => onChange({ year: y })}
          >
            {y}
          </div>
        ))
      }
    </div>
  )
}

ReactDatePickerSelectYear.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

ReactDatePickerSelectYear.defaultProps = {
}

export default ReactDatePickerSelectYear
