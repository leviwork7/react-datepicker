import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import i18n from '../utils/i18n.js'

const ReactDatePickerSelectMonth = ({ date, onChange }) => {
  const monthList = Array.from({ length: 12 }).map((_, idx) => [
    idx + 1,
    i18n()['month'][`month_${idx + 1}`],
  ])

  const isCurrentMonth = (m) => (date.month === m)

  return (
    <div className='react-datepicker-select-month'>
      {
        monthList.map((m) => (
          <div
            key={m[0]}
            onClick={() => onChange({ month: m[0] })}
            className={clsx(
              '__month',
              'react-datepicker__base--picker-hover',
              {
                'react-datepicker__base--picker-current': isCurrentMonth(m[0]),
            })}
          >
            { m[1] }
          </div>
        ))
      }
    </div>
  )
}

ReactDatePickerSelectMonth.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

ReactDatePickerSelectMonth.defaultProps = {
}

export default ReactDatePickerSelectMonth
