import analytics from 'redux-simple-analytics'

export const newPageView = (page) => {
}

export const tagRecording = (key, value) => {
  window._mfq.push(['setVariable', key, value])
}

const handleMouseflow = ({ type, payload }, state) => {
  if (!window.mouseflow) {
    return
  }

  switch (type) {
    case '@@router/LOCATION_CHANGE':
      window.mouseflow.newPageView(`${window.location.pathname}#${payload.pathname}`)
      break
  }
}

export default analytics(handleMouseflow)
