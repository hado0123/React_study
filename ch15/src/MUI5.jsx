import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Button } from '@mui/material'

// 새로운 테마 생성
const theme = createTheme({
   palette: {
      primary: {
         main: '#000',
      },
      secondary: {
         main: '#dc004e',
      },
   },
})

function MUI5() {
   return (
      //  생성한 테마를 적용
      <ThemeProvider theme={theme}>
         <Button color="primary" variant="contained">
            버튼
         </Button>
         <Button color="secondary" variant="contained">
            버튼
         </Button>
      </ThemeProvider>
   )
}

export default MUI5
