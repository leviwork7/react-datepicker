import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import i18n from '../utils/i18n.js'
import { parseDate, ISOformat, buildMonthOfDayList } from '../utils/time.js'

const ReactDatePickerSelectDay = ({ date, onChange }) => {
  const dayList = buildMonthOfDayList(date.year, date.month)
  const weeks = Array.from({ length: 6 }).map((_, idx) => dayList.slice(idx * 7, (idx * 7) + 7)) // 7 天一組做 group

  const isOutsideMonth = (month) => (date.month !== month)
  const isCurrentDay = (label) => (label === date.label)
  const isToday = (label) => (label === parseDate(new Date()).label)
  const getWeekLabel = (week) => i18n()['week'][`week_${week}`]

  return (
    <div className='react-datepicker-select-day'>
      <div className='__week'>
        {
          Array.from({ length: 7 }, (_, v) => v).map((w) => (
            <div key={w} className="react-datepicker__base__day __weekname">
              { getWeekLabel(w) }
            </div>
          ))
        }
      </div>
      {
        weeks.map((days, i) => (
          <div key={i} className="__week">
            {
              days.map((d) => {
                const [year, month, day] = d
                const label = ISOformat(year, month, day)

                return (
                  <div
                    key={label}
                    data-date={label}
                    className={clsx(
                      "__day",
                      "react-datepicker__base__day",
                      "react-datepicker__base--picker-hover",
                      {
                        "react-datepicker__base--picker-outside": isOutsideMonth(month),
                        "react-datepicker__base--picker-current": isCurrentDay(label),
                        "react-datepicker__base--picker-today": isToday(label),
                    })}
                    onClick={() => onChange({ year, month, day })}
                  >
                    { day }
                  </div>
                )
              })
            }
          </div>
        ))
      }
    </div>
  )
}

ReactDatePickerSelectDay.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

ReactDatePickerSelectDay.defaultProps = {
}

export default ReactDatePickerSelectDay
