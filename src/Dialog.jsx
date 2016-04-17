import React from 'react'

import Close from '@klarna/ui-illustrations/src/Close'
import * as Dialog from '@klarna/ui-react-components/components/Dialog'

const foo = {
  textAlign: 'center'
}

export default ({ children, footer }) => (
  <Dialog.Dialog>
    <Dialog.DialogIcon>
      <Close color='blue' />
    </Dialog.DialogIcon>
    <Dialog.DialogContent className={foo}>
      {children}
    </Dialog.DialogContent>
    <Dialog.DialogFooter>
      {footer}
    </Dialog.DialogFooter>
  </Dialog.Dialog>
)
