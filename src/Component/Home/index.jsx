import React from 'react'
// import {Flex} from "@chakra-ui/react"
import Header from '../Header'
import {HomeLayout} from "./style"
import Footer from "../Footer"
import PageLayout from '../Layout'

function Home() {
 return (
  <HomeLayout>
   <Header />
   <PageLayout/>
   <Footer />
  </HomeLayout>
 )
}

export default Home
