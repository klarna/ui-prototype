import React from 'react'
import Link from '@klarna/ui-react-components/components/Link'
import Button from '@klarna/ui-react-components/components/Button'
import Preview from '@klarna/ui-react-components/components/Preview'
import { Paragraph } from '@klarna/ui-react-components/components/Text'
import styles from './styles.css'

export default () => (
  <main className={styles.main}>
    <img src='./img/dn.png' className={styles.dn}/>
    <a href='/open-bank-id-app-authorize'>
      <Button className={styles.button}>
        Subscribe with Klarna Direkt
      </Button>
    </a>
    <Paragraph className={styles.paragraph}>
      Nordea ●●●●● 789
      <Link href="#" className={styles.link}>
        Change
      </Link>
    </Paragraph>
    <div className={styles.tooltip + " cui__tooltip top border"}>
      <div className={styles.user_name}>Hi Rasmus,</div>
      Complete your purchase<br />with mobile bankID.
      <Link href="#" className={styles.link}>
        How it works
      </Link>
      <div className="cui__preview__footer">
        <a href='/not-you' className={styles.preview_link + " cui__preview__footer__link"}>Not you?</a>
      </div>
    </div>
  </main>
)
