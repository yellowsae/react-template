import { RouterProvider } from 'react-router-dom'
import router from '@/router'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/reset.css'

import { useGlobalStore } from '@/stores'

dayjs.locale('zh-cn')

// The Project use react-router-dom v6 in App.tsx
const App = () => {

  const { primaryColor } = useGlobalStore()

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: primaryColor
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
