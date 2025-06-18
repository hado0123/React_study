import IconButton from '@mui/material/IconButton'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'

function MUI6() {
   return (
      <>
         <AccessTimeFilledIcon />
         <AddToQueueIcon />
         <br />
         <IconButton color="secondary" aria-label="시계">
            <AccessTimeFilledIcon />
         </IconButton>
      </>
   )
}

export default MUI6
