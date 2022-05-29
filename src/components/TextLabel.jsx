import React from 'react'

function TextLabel({text,...props}) {
  return (
    <label class="block text-gray-700 text-sm font-normal mb-2">{text}</label>
  )
}

export default TextLabel