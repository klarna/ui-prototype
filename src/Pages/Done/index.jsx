import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Field from '@klarna/ui-react-components/components/Field'
import Link from '@klarna/ui-react-components/components/Link'
import Subtitle from '@klarna/ui-react-components/components/texts/Subtitle'
import styles from './styles.css'
import Done from '../../illustrations/Done'
import CloseButton from '../../CloseButton'

export default () => (
  <main className={styles.main}>
    <CloseButton />
    <Done />
    <PrimaryTitle color="blue">
      You&#39;re done!
    </PrimaryTitle>
    <Paragraph>
      An email with your purchase details<br /> will be sent to
      <Link className={styles.link}>
        rasmus@klarna.com
      </Link>
    </Paragraph>
    <Subtitle className={styles.done}>
      <Link href="/flows">
        CLOSE
      </Link>
    </Subtitle>
  </main>
)