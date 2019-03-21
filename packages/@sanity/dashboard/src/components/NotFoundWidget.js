import React from 'react'

import styles from './NotFoundWidget.css'

function NotFoundWidget(props) {
  return (
    <div className={styles.root}>
      <div>
        {props.title && <h2 className={styles.title}>{props.title}</h2>}
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  )
}

export default NotFoundWidget
