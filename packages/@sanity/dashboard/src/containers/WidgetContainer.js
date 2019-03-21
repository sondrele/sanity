import React from 'react'
// import definitions from 'all:part:@sanity/dashboard/widget?'
import definitions from 'all:part:@sanity/dashboard/widget?'

function WidgetContainer(props) {
  const config = props.config || {}
  const definition = Array.isArray(definitions)
    ? definitions.find(wid => wid.name === config.name)
    : null

  if (definition) {
    const options = {
      ...(definition.options || {}),
      ...(config.options || {})
    }
    const layout = {
      ...(definition.layout || {}),
      ...(config.layout || {})
    }

    return (
      <div data-width={layout.width} data-height={layout.height}>
        {React.createElement(definition.component, options)}
      </div>
    )
  }

  const layout = config.layout || {}

  return (
    <div data-width={layout.width} data-height={layout.height}>
      <h4>{`Could not find the Dashboard Widget named "${config.name}"`}</h4>
      <p>
        Make sure your <code>sanity.json</code> file mentions such a widget and that it’s an
        implementaion of <code>part:@sanity/dashboard/widget</code>
      </p>
    </div>
  )
}

export default WidgetContainer
