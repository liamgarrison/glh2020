import React, {useState} from 'react';

export default function Form ({onSubmit, initialData, children, ...rest}) {
  const [formData, setFormData] = useState(initialData);

  const defaultPreventedSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const updateFormAttr = (path, value) => {
    setFormData({
      ...formData,
      [path]: value
    })
  }

  return (
    <form onSubmit={defaultPreventedSubmit} {...rest}>
      {children({formData, updateFormAttr})}
    </form>
  )
}
