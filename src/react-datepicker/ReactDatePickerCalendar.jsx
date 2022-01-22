import React, { useState } from 'react'
// import PropTypes from 'prop-types'

import ReactDatePickerViewDay from './components/calendar/ReactDatePickerViewDay'

const VIEWS = [
  ReactDatePickerViewDay,
]

const ReactDatePickerCalendar = (props = {}) => {
  const [view, setView] = useState(0)
  const handleChangeView = ({
    prev: () => setView(Math.max(0, view - 1)),
    next: () => setView(((view + 1) > (VIEWS.length - 1)) ? view : view + 1),
    reset: () => setView(0),
  })

  const ViewComponents = function() {
    try {
      return VIEWS[view]
    } catch (error) {
      return VIEWS[0]
    }
  }()

  return (
    <div className='react-datepicker__calendar'>
      <ViewComponents
        {...props}
        onChangeView={handleChangeView}
      />
    </div>
  )
}

export default ReactDatePickerCalendar
