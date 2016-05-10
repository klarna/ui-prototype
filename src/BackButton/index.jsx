import React from 'react'
import Link from '@klarna/ui-react-components/components/Link'
import styles from './styles.css'

export default () => (
  <Link className={styles.back}>
    <span className={styles.arrow}>&lsaquo;</span> BACK
  </Link>
)
