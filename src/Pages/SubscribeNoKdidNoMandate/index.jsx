import React from 'react'
import Link from '@klarna/ui-react-components/components/Link'
import Tooltip from '@klarna/ui-react-components/components/Tooltip'
import Preview, { PreviewTitle, PreviewLink } from '@klarna/ui-react-components/components/Preview'
import styles from './styles.css'
import SubscribeButton from '../../illustrations/Subscribe'

export default () => (
  <main className={styles.main}>
    <img src='./img/dn.png' className={styles.dn}/>
    <div>
      <a href='/personal_number'>
        <SubscribeButton />
      </a>
    </div>
    <div className={styles.tooltip + " cui__tooltip top border"}>
      Complete your purchase<br />with mobile bankID or card.
      <Link href="#" className={styles.link}>
        How it works
      </Link>
    </div>
  </main>
)
