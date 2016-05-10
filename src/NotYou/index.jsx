import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Link from '@klarna/ui-react-components/components/Link'
import CloseButton from '../CloseButton'
import NotYou from '../illustrations/NotYou'
import styles from './styles.css'

export default () => (
  <main>
    <CloseButton />
  	<NotYou />
    <PrimaryTitle color="blue">
    	Not you?
  	</PrimaryTitle>
    <Paragraph>
      We recognize you based on previous use of this device, if this info os oncorrect or you don&#39;t want to be shown, click below.
    </Paragraph>
    <Link color="blue">
      I&#39;M SURE
    </Link>
    <Link className={styles.grey}>
      CANCEL
    </Link>
  </main>
)
