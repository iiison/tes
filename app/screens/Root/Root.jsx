import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Root = () => {
  let configs = useSelector(({ configs }) => configs)
  const history = useHistory()

  // Dummy code
  if (!configs) {
    configs = {
      pinView: 'enroll'
    }
  }
  // *********************************

  useEffect(() => {
    const { pinView } = configs

    const statusRedirectMap = {
      VERIFY: '/verifyPin',
      ENROLL: '/enrollment/step-1'
    }

    if (window.VisaSafeClickHandler && window.VisaSafeClickHandler.vscPinWebviewResponseHandler) {
      const stringifiedData = JSON.stringify({
        data : {
          webViewResponse : {
            token       : null,
            showWebView : true
          }
        }
      })

      window.VisaSafeClickHandler.vscPinWebviewResponseHandler(200, stringifiedData)
    }

    history.push(statusRedirectMap[pinView])
  }, [])

  return <div />

}

export default Root

