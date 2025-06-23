import React from 'react'
import {Button, Container, Flex,HStack,Text, useColorMode} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiPlusSquare } from "react-icons/fi";
import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";
const Navbar = () => {
  const {colorMode,toggleColorMode} =useColorMode();
  return <Container maxW={"1140px"}px={4}>
  <Flex
  h={16}
  alignItems={"center"}
  justifyContent={"space-between"}
 flexDir={
  {
    base:"column",
    sm:"row"
  }
 }
  >
  <Text
  fontSize={{base:"22",sm:"28"}}
  fontWeight={"bold"}
  textTransform={"uppercase"}
  textAlign={"center"}
  bgGradient={"linear(to-r,cyan.400,blue.500)"}
  bgClip={"text"}
  >
   <Link to ={"/"}>Product store 🛒</Link>
  </Text>
  <HStack spacing={2} alignItems={"center"}>
    <Link to={"/create"}>
    <Button><FiPlusSquare fontSize={20}/>
</Button>
</Link>
 <Button onClick={toggleColorMode}>
 {colorMode==="light"?<FaRegMoon/>:<FaRegSun />}
 </Button>
    

  </HStack>
  </Flex>
  </Container>
}

export default Navbar