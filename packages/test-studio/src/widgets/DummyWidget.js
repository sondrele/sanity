import React from 'react'

import styles from './DummyWidget.css'

function DummyWidget(props) {
  return <div className={styles.root}>{props.text || 'Dummy'}</div>
}

export default {
  name: 'test-dummy',
  component: DummyWidget
}
