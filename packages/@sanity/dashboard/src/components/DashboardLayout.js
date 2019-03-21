import React from 'react'
import dashboardConfig from 'part:@sanity/dashboard/config?'
import WidgetGroup from './WidgetGroup'

import styles from './DashboardLayout.css'

function DashboardLayout(props) {
  if (!dashboardConfig) {
    return null
  }

  return (
    <div className={styles.root}>
      <WidgetGroup config={dashboardConfig} />
    </div>
  )
}

export default DashboardLayout
