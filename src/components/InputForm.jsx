import React from 'react'

export const InputForm = ({text,...rest}) => {
  return (
    <div class="mb-4">
    <p class="block text-gray-700 text-sm font-normal mb-2">{text}</p>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...rest} />
    </div>
  );
}

export default InputForm