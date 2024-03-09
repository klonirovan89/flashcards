import c from './form-buttons.module.scss'

import { Button } from '../button'
import { Typography } from '../typography'

export const FormButtons = ({
  callback,
  changeModalState,
  primaryButtonText,
  withSecondary,
}: FormButtonsProps) => {
  return (
    <>
      {withSecondary ? (
        <div className={c.footer}>
          <Button onClick={() => changeModalState(false)} type={'button'} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Cancel</Typography>
          </Button>
          <Button onClick={callback} type={'submit'} variant={'primary'}>
            <Typography variant={'subtitle2'}>{primaryButtonText}</Typography>
          </Button>
        </div>
      ) : (
        <div className={c.footer + ' ' + c.only_primary}>
          <Button onClick={() => changeModalState(false)} type={'submit'} variant={'primary'}>
            <Typography variant={'subtitle2'}>{primaryButtonText}</Typography>
          </Button>
        </div>
      )}
    </>
  )
}

type FormButtonsProps = {
  callback?: () => void
  changeModalState: (open: boolean) => void
  primaryButtonText: string
  withSecondary?: boolean
}
