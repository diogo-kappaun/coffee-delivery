import { AppLayout } from '@/layout/AppLayout'
import { Home } from '@/pages/Home'

import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
