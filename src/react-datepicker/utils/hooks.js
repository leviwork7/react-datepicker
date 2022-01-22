import { useState } from 'react'

import { parseDate } from './time.js'

export const useDateState = (initDate) => {
  const initValue = parseDate(initDate || new Date())
  const [date, setDate] = useState(initValue)

  return [date, setDate]
}
