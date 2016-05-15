import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Field from '@klarna/ui-react-components/components/Field'
import Link from '@klarna/ui-react-components/components/Link'
import Subtitle from '@klarna/ui-react-components/components/texts/Subtitle'
import styles from './styles.css'

export default () => (
  <main className={styles.main}>
    <Link href='subscribe-kdid-mandate'>
      Kdid + Mandate
    </Link><br />
    <Link href='subscribe-kdid-no-mandate'>
      Kdid + No Mandate
    </Link><br />
    <Link href='subscribe-kdid-no-mandate'>
      Not you
    </Link>
  </main>
)