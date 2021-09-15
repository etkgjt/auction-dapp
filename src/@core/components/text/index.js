import React from 'react'
import classnames from 'classnames'

const Text = (props) => {
    const { underline, color, children, className, link, size, onClick } = props
    return <span onClick={onClick} className={classnames({
        [className]: true,
        'cursor-pointer': link,
        [`text-${color}`]: color,
        'text-underline': underline,
        [`font-size-${size}`]: size
    })}>
        {children}
    </span>
}

export default Text