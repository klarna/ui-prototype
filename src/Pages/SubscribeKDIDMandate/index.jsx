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
    <div>
      <Paragraph className={styles.paragraph}>
        Nordea ●●●●● 789
        <Link href="#" className={styles.link}>
          Change
        </Link>
      </Paragraph>
    </div>
    <div className={styles.tooltip + " cui__tooltip top border"} style={{backgroundColor: "white"}}>
      <div className={styles.user_name}>Hi Rasmus,</div>
      Complete your purchase<br />with mobile bankID.
      <Link href="#" className={styles.link}>
        How it works
      </Link>
      <div className="cui__preview__footer">
        <a className={styles.preview_link + " cui__preview__footer__link"}>Not you?</a>
      </div>
    </div>
  </main>
)
