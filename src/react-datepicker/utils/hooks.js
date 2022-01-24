import { useState, useEffect } from 'react'

import { parseDate } from './time.js'

export const useDateState = (initDate) => {
  const initValue = parseDate(initDate || new Date())
  const [date, setDate] = useState(initValue)
  const resetDate = () => setDate(initValue)

  useEffect(() => {
    setDate(parseDate(initDate || new Date()))
  }, [initDate])

  return [date, setDate, resetDate]
}

export const usePopupHandler = (elementRef, onClickOutside) => {
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickOutside = !event.composedPath().includes(elementRef.current)
      if (popup && isClickOutside) {
        onClickOutside()
        setPopup(false)
      }
    }
    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [popup])

  return [popup, setPopup]
}
