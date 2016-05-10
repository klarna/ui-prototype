import React from 'react'
import Link from '@klarna/ui-react-components/components/Link'
import Button from '@klarna/ui-react-components/components/Button'
import Tooltip from '@klarna/ui-react-components/components/Tooltip'
import Preview, { PreviewTitle, PreviewLink } from '@klarna/ui-react-components/components/Preview'
import { SecondaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import styles from './styles.css'
import { connect } from 'react-redux'
import SubscribeButton from '../../illustrations/Subscribe'

export default () => (
  <main className={styles.main}>
    <img src='./img/dn.png' className={styles.dn}/>
    <div>
      <a href='/personal_number'>
        <SubscribeButton />
      </a>
    </div>
    <div className={styles.tooltip + " cui__tooltip top border"} style={{backgroundColor: "white"}}>
      Complete your purchase<br />with mobile bankID or card.
      <Link href="#" className={styles.link}>
        How it works
      </Link>
    </div>
  </main>
)
