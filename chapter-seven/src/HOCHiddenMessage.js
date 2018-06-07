import React from 'react'
import Expandable from'./Expandable'

const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    <p onClick={expandCollapse}>
        {(collapsed) ?
            children.replace(/./g, 'x') :
            children}
    </p>

const HOCHiddenMessage = Expandable(ShowHideMessage)

export default HOCHiddenMessage
