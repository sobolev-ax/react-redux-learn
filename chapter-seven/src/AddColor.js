import React from 'react'

const AddColor = ({onNewColor=f=>f}) => {
    let _color, _title

    const submit = e => {
        e.preventDefault()

        onNewColor(_title.value, _color.value)

        _color.value = '#000000'
        _title.value = ''
        _title.focus()
    }

    return (
        <form onSubmit={submit}>
            <input
                type="color"
                name="color"
                ref={input => _color = input}
                required />
            <input
                type="text"
                name="title"
                ref={input => _title = input}
                placeholder="title of color..."
                required />
            <button>
                AddColor
            </button>
        </form>
    )
}

export default AddColor
