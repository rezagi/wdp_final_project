import React from 'react'

const Label = ({text,...props}) => {
  return (
    <label class="block text-gray-700 text-sm font-normal mb-2">{text}</label>
  )
}

export default Label