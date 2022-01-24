### Version

- node: `>= 14.x`
- react: `17.0.2`

---

### Yarn install

[react-datepicker](https://www.npmjs.com/package/@leviwork7/react-datepicker)

`$ yarn add @leviwork7/react-datepicker`

```javascript
import React, { useState } from "react";

import ReactDatePicker from '@leviwork7/react-datepicker';
import '@leviwork7/react-datepicker/dist/cjs/index.css';

const App = (props) => {
  const [date, setDate] = useState('2022-01-01')

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

```

### Demo startup

```

$ yarn
$ yarn demo

```
