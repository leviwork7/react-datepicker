import React from 'react'
import PropTypes from 'prop-types'

const ReactDatePickerHeader = (props) => {
  const {
    title,
    onClickTitle,
    onChangePrev,
    onChangeNext,
  } = props

  return (
    <div className='react-datepicker-header'>
      <div className='__month-picker'>
        <div className='__month-picker__prev'>
          <button type='button' onClick={onChangePrev}>{ `＜` }</button>
        </div>
        <div className='__month-picker__view'>
          <button type='button' onClick={onClickTitle}>{ title }</button>
        </div>
        <div className='__month-picker__next'>
          <button type='button' onClick={onChangeNext}>{ `＞` }</button>
        </div>
      </div>
    </div>
  )
}

ReactDatePickerHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClickTitle: PropTypes.func.isRequired,
  onChangePrev: PropTypes.func.isRequired,
  onChangeNext: PropTypes.func.isRequired,
}

ReactDatePickerHeader.defaultProps = {
}

export default ReactDatePickerHeader
