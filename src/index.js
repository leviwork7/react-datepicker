import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// import ReactDatePicker from '../src/react-datepicker'
import ReactDatePicker from '../dist/cjs/index.js'
import '../dist/cjs/index.css'

const App = (props) => {
  const [date, setDate] = useState('NO DATE')

  return (
    <div className='demo'>
      <h3>已選擇的日期：{ date }</h3>
      <ReactDatePicker
        onSelect={(date) => {
          console.log({ date })
          setDate(date.label)
        }}
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
