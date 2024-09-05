import { Container, VStack, Heading, Box, useColorModeValue, Input, Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    })
    const navigate = useNavigate()

    const toast = useToast()

    const {createProduct} = useProductStore()
    const handleAddProduct = async() => {
        const {success, message} = await createProduct(newProduct)
        if(!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true
            })
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true
            })
            navigate('/')
        }
        setNewProduct({name: "", price: "", image: ""})
    }

  return (
    <Container maxW={"container.sm"}>
        <VStack spacing={8}>
            <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>Create new product</Heading>
        </VStack>
        <Box 
            w={"full"} 
            bg={useColorModeValue("white","gray.700")}
            padding={6}
            rounded={"lg"}
            shadow={"md"}
        >
            <VStack spacing={4}>
                <Input 
                    placeholder='Product name' 
                    name='name'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <Input 
                    placeholder='Product price' 
                    name='price'
                    type='number'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct,price: e.target.value})}
                />
                <Input 
                    placeholder='Image url' 
                    name='image'
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct,image: e.target.value})}
                />
                <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>Add Product</Button>
            </VStack>
        </Box>
    </Container>
  )
}

export default CreatePage