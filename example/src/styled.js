import React from 'react'
import classnames from 'classnames'

export default (
  defaultClass,
  { tag: Tag = 'div', displayName, ...defaultProps } = {}
) => {
  const Component = ({ className, ...props }) => {
    const mergeClass = classnames(defaultClass, className)

    return <Tag className={mergeClass} {...defaultProps} {...props} />
  }

  if (displayName) {
    Component.displayName = displayName
  }

  return Component
}
