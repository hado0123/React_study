// 커스터마이징 한 CSS 적용방법 3: sx props 사용(JSON 객체 형태로 사용)

import Box from '@mui/material/Box'

function MUI2_3() {
   // sx props도 인라인 스타일 적용방법과 유사하게 사용
   // => json 객체, 속성명은 카멜표기법 사용
   return (
      <Box
         sx={{
            width: '100px',
            height: '100px',
            backgroundColor: 'warning.light',
            // &: 현재 컴포넌트
            '&:hover': {
               backgroundColor: 'red',
            },
         }}
      >
         Hover to chagne color
      </Box>
   )
}

export default MUI2_3
