import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './Pages/CreatePage'
import HomePage from './Pages/HomePage'
import NavBar from './Components/Navbar'

const App = () => {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.800")}>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
      </Routes>
    </Box>
  )
}

export default App