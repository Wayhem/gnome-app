import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'Config/routes'
import { Home, HomeSkeleton } from 'Components/pages'

const Routes = () => (
  <>
    <Switch>
      <Suspense fallback={<HomeSkeleton />}>
        <Route path={routes.home} component={Home} />
      </Suspense>
    </Switch>
  </>
)

export default Routes
