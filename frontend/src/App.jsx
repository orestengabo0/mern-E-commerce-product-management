import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Box minH={"100vh"}>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
      </Routes>
    </Box>
  )
}

export default App