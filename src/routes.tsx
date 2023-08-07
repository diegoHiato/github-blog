import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { Home } from './pages/Home'
import { PostDetails } from './pages/Post'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:number" element={<PostDetails />} />
      </Route>
    </Routes>
  )
}
