// 커스터마이징한 CSS 적용방법 4: styled 사용

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const CustomButton = styled(Button)(({ theme }) => {
   console.log(theme) // MUI에서 사용하는 테마 객체

   // 테마객테는 MUI 컴포넌트 전체에 공통적으로 적용되는 디자인 시스템 정보를 가지고 있다. -> 협업시 일관성 있는 디자인을 만들 수 있다
   return {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
      padding: theme.spacing(2), // 1 = '8px'
      '&:hover': {
         backgroundColor: theme.palette.secondary.main,
      },
   }
})

function MUI2_4() {
   return <CustomButton>버튼</CustomButton>
}

export default MUI2_4
