import React from "react";
import { FooterLayout } from "./style";
import { Flex, Box, Text, Container, Divider } from "@chakra-ui/react";

function Footer() {
	return (
		<FooterLayout>
			<Flex justifyContent="space-between" alignItems="space-between" padding= {{base:"20px 20px 10px 20px", md:"20px 100px 10px 100px ", lg: " 20px 150px 10px 100px", xl:"20px 200px 10px 150px"}} flexDirection={{base:"column", md:"row", lg:"row", xl:"row"}}>
				<Box>
					<Text as="h1" color="grey">Space</Text>
					<Container
						as="p"
						pt="35px"
						color="grey"
						maxW="container.sm"
						fontSize="1.2rem">
						The best design for your web studio website. Vitae nulla nunc
						euismod vel pretium tellus accumsan semper. Vitae nulla nunc euismod
						vel pretium tellus accumsan semper.euismod vel pretium tellus accumsan semper. Vitae nulla nunc euismod
						vel pretium tellus accumsan semper.
					</Container>
				</Box>
				<Box pt={{base:"25px"}}>
					<Text as="h3" ml="15px" color="grey" >
						Pages
					</Text>
     <Container color="white" maxW="container.md" pt="20px" >
       <Text pt="10px">Templates</Text>
       <Text pt="10px">Price</Text>
       <Text pt="10px">Help</Text>
       <Text pt="10px">Contact</Text>
     </Container>
				</Box>
				<Box pt={{base:"25px"}}>
					<Text as="h3" color="grey" ml="15px">
						Demos
					</Text>
     <Container color="white" maxW="container.md" pt="25px" >
       <Text pt="10px">Dark mode</Text>
       <Text pt="10px">Light mode</Text>
       <Text pt="10px">Classic theme</Text>
     </Container>
				</Box>
				<Box pt={{base:"25px"}}>
					<Text as="h3" color="grey" ml="15px">
						Resources
					</Text>
     <Container color="white" maxW="container.md" pt="25px" >
       <Text pt="10px">Documentation</Text>
     </Container>
				</Box>
			</Flex>
   <Divider />
   <Flex justifyContent="space-between" align="center" padding= {{base:"20px 20px 10px 20px", md:"20px 100px 10px 100px ", lg: " 20px 150px 10px 100px", xl:"20px 200px 10px 150px"}}>
    <Text color="grey">© 2019-2020 All Rights Reserved.</Text>
    <Text color="white">Terms of service</Text>
   </Flex>
		</FooterLayout>
	);
}

export default Footer;
