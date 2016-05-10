import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Field from '@klarna/ui-react-components/components/Field'
import Link from '@klarna/ui-react-components/components/Link'
import styles from './styles.css'
import Done from '../../illustrations/Done'

export default () => (
  <main className={styles.main}>
    <Done />
    <PrimaryTitle blue>
      You're done!
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