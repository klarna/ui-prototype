import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Link from '@klarna/ui-react-components/components/Link'
import NotYou from '../illustrations/NotYou'
import styles from './styles.css'

export default () => (
  <main className={styles.main}>
  	<NotYou />
    <PrimaryTitle color="blue">
    	Not you?
  	</PrimaryTitle>
    <Paragraph>
      We recognize you based on previous use of this device, if this info os oncorrect or you don't want to be shown, click below.
    </Paragraph>
    <Link color="blue">
      YES
    </Link>
    <Link color="grey">
      CANCEL
    </Link>
  </main>
)
