import React from 'react'

export default function ToggleTheme(props) {
  return (
    <div className='toggle-theme'>
      <span className='toggle-theme_header'>
        {props.checked ? 'Light' : 'Dark'}
      </span>
      <label className="switch">
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.handleChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}
