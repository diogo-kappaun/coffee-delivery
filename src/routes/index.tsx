import { AppLayout } from '@/layout/AppLayout'
import { Checkout } from '@/pages/Checkout'
import { Home } from '@/pages/Home'
import { Success } from '@/pages/Success'
import { useOrder } from '@/store/order'

import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  const { order } = useOrder()
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {order && <Route path="/success" element={<Success />} />}
      </Route>
    </Routes>
  )
}

export default AppRouter
