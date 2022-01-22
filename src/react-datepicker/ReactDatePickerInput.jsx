import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

import { parseDate } from './utils/time.js'

const ReactDatePickerInput = ({ defaultValue, onChange, onClick }) => {
  const [inputVal, setInput] = useState(defaultValue)

  const isStringValid = (v) => /^\d{0,4}-{0,1}\d{0,2}-{0,1}\d{0,2}$/g.test(v)
  const isDateFormatValid = (v) => /^\d{4}-\d{2}-\d{2}$/g.test(v)

  useEffect(() => {
    setInput(defaultValue)
  }, [defaultValue])

  return (
    <input
      className='react-datepicker__input'
      type='text'
      value={inputVal}
      placeholder='YYYY-MM-DD'
      onChange={(e) => {
        const val = e.target.value
        isStringValid(val) && setInput(val)

        if (isDateFormatValid(val)) {
          const [y, m, d] = val.split('-')
          const newDate = parseDate(new Date(y, m - 1, d))
          onChange({ callback: false })(newDate)
        }
      }}
      onClick={onClick}
      onKeyPress={(e) => {
        if (e.which !== 13) { return }
        if (isDateFormatValid(inputVal)) {
          onChange({ callback: true })()
        }
      }}
    />
  )
}

export default ReactDatePickerInput
