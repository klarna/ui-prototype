import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Field from '@klarna/ui-react-components/components/Field'
import Link from '@klarna/ui-react-components/components/Link'
import styles from './styles.css'
import UserDetails from '../illustrations/UserDetails'

export default () => (
  <main className={styles.main}>
    <UserDetails />
    <PrimaryTitle blue>
      You're Done!
    </PrimaryTitle>
    <Paragraph>
      An email with your purchase details<br /> will be sent to
      <Link className={styles.link}>
        rasmus@klarna.com
      </Link>
    </Paragraph>
    <div className={styles.done}>
      <Link href="/">
        CLOSE
      </Link>
    </div>
  </main>
)
