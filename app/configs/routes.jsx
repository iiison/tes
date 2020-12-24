import React, { Suspense, lazy } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import { Root } from '$SCREENS'

import { Header, Loader } from '$COMPONENTS'

const EnrollmentStep1 = lazy(() => import('$SCREENS/PinEnrollment/Step1'))
const EnrollmentStep2 = lazy(() => import('$SCREENS/PinEnrollment/Step2'))
const PinVerification = lazy(() => import('$SCREENS/PinVerification/PinVerification'))

const routes = () => {
  return (
    <div className='app grid'>
      <div className='col'>
        <Header />
        <Root />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path='/enrollment/step-1' component={EnrollmentStep1} />
            <Route path='/enrollment/setPin' component={EnrollmentStep2} />
            <Route path='/verifyPin' component={PinVerification} exact />
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}

export default routes

