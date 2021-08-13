import React from "react";
import { FooterLayout } from "./style";
import { Flex, Box, Text, Container, Divider } from "@chakra-ui/react";

function Footer() {
	return (
		<FooterLayout>
			<Flex justifyContent="space-evenly" alignContent="space-evenly" className="flex">
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
				<Box>
					<Text as="h3" ml="15px" color="grey">
						Pages
					</Text>
     <Container color="white" maxW="container.md" pt="25px" >
       <Text pt="10px">Templates</Text>
       <Text pt="10px">Price</Text>
       <Text pt="10px">Help</Text>
       <Text pt="10px">Contact</Text>
     </Container>
				</Box>
				<Box>
					<Text as="h3" color="grey" ml="15px">
						Demos
					</Text>
     <Container color="white" maxW="container.md" pt="25px" >
       <Text pt="10px">Dark mode</Text>
       <Text pt="10px">Light mode</Text>
       <Text pt="10px">Classic theme</Text>
     </Container>
				</Box>
				<Box>
					<Text as="h3" color="grey" ml="15px">
						Resources
					</Text>
     <Container color="white" maxW="container.md" pt="25px" >
       <Text pt="10px">Documentation</Text>
     </Container>
				</Box>
			</Flex>
   <Divider />
   <Flex justifyContent="space-between" align="center" className="flex1">
    <Text color="grey">© 2019-2020 All Rights Reserved.</Text>
    <Text color="white">Terms of service</Text>
   </Flex>
		</FooterLayout>
	);
}

export default Footer;
