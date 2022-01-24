import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// < 由專案原始碼引入 >
// import ReactDatePicker from '../src/react-datepicker'
// import '../src/react-datepicker/style/index.scss'

// < 由打包原始碼引入 >
// import ReactDatePicker from '../dist/cjs/index.js'
// import '../dist/cjs/index.css'

// < 由 NPM 引入 >
import ReactDatePicker from '@leviwork7/react-datepicker'
import '@leviwork7/react-datepicker/dist/cjs/index.css'

const App = (props) => {
  const [date, setDate] = useState()

  return (
    <div className='demo'>
      <h3>已選擇的日期：{ date }</h3>
      <ReactDatePicker
        date={date}
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
