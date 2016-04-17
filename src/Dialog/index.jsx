import React from 'react'

import Close from '@klarna/ui-illustrations/src/Close'
import Dialog from '@klarna/ui-react-components/components/Dialog'
import styles from './styles.css'

export default ({ children, footer }) => (
  <Dialog>
    <Dialog.Icon>
      <Close color='blue' />
    </Dialog.Icon>
    <Dialog.Content className={styles.content}>
      {children}
    </Dialog.Content>
    <Dialog.Footer>
      {footer}
    </Dialog.Footer>
  </Dialog>
)
