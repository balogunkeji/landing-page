import React from "react";
import { Flex, Box, Image, Text, Container, Button } from "@chakra-ui/react";
import { Pagelayout } from "./style";
import Slider from "../../assets/PNG/slider1.png";
import Sliders from "../../assets/PNG/slider2.png";
import Round1 from "../../assets/PNG/round1.png";
import Lady2 from "../../assets/PNG/grid2.png";
import Lady from "../../assets/PNG/grid1.png";
import Animate from "../Animate";
import { Card, Cards, People } from "../Card";
import Icon from "../../assets/PNG/Icon.svg";

function PageLayout() {
	return (
		<Pagelayout>
			<Flex className="slide"
				justifyContent="space-between"
				flexDirection={{base: "column", md:"column", lg:"row", xl:"row"}}
				marginBottom="35%"
				pt="40px"
				pb="50px">
				<Box pl={{base: "10px", md:"50px", lg:"100px", xl: "300px"}}>
					<Box>
						<Text
							as="h3"
							pb="40px"
							color="#D1DCE5"
							fontSize="1.2rem"
							fontWeight="500">
							DESIGN INSPIRATION
						</Text>
						<Text
							as="h1"
							pb="40px"
							fontWeight="700"
							width={{base: "100%", md:"100%",  lg:"90%", xl: "70%"}}
							lineHeight="1.7"
							fontSize={{base: "2rem", md:"3.5rem",  lg:"3.5rem", xl: "4rem"}}>
							Convallis turpis erat tempus, viverra aliquet.{" "}
						</Text>
						<button className="button">Get In Touch</button>
					</Box>
					<Box>
						<Text
							className="space"
							pt="100px"
							fontWeight="500"
							lineHeight="30px"
							fontSize="2rem"
							width={{base: "80%", md:"80%",  lg:"80%", xl: "59%"}}>
							I feel so much less stressed ❤️ as I now know by the book.”
						</Text>
						<Flex pt="40px">
							<Image src={Round1} width="70px" />
							<Box alignSelf="center" pl="15px">
								<Text as="h4" fontWeight="bold">
									Andy Ford
								</Text>
								<Text>Ceo at Whatever</Text>
							</Box>
						</Flex>
					</Box>
				</Box>
				<Box w="950px" h="650px" className="anime" >
					<Animate mr="10px" />
				</Box>
			</Flex>
			{/* phase2 */}
			<Box padding={{base: "0 10px", md: "0 20px", lg: "0 50px 0 100px", xl: "0 100px 0 300px"}} bg="#D8F6FF" className="phase2">
				<Flex
					justifyContent="space-between"
					alignContent="center"
					flexDirection={{base: "column", md: "row", lg: "row", xl: "row"}}
					paddingBottom={{base: "50px", md: "80px", lg: "130px", xl: "150px"}}>
					<Box margin={{base: "100px auto 0 auto", md:"50px auto 0 auto",  lg:"-200px auto 0 auto", xl: "-300px 0 auto 0 auto"}}>
						<Image src={Lady} alt="lady" width={{base: "100%", md:"85%",  lg:"100%", xl: "100%"}} maxW="100%"/>
					</Box>
					<Box pl={{base: "10px", md:"10px",  lg:"30px", xl: "30px"}} mt={{base: "100px", md:"50px",  lg:"-350px", xl: "-400px"}}>
						<Container  maxW={{base: "none", md: "container.sm", xl: "container.md", lg: "container.md"}}>
							<Text
								fontWeight="700"
								fontSize={{base: "2rem", md:"2rem",  lg:"2.6rem", xl: "2.9rem"}}
								className="space"
								pb={{base: "20px", md:"35px",  lg:"40px", xl: "60px"}}
								lineHeight="1.2">
								Requirements gathering and analysis for references.
							</Text>
							<Text fontWeight="400" fontSize="1.4rem">
								Convallis turpis erat tempus, viverra aliquet. Nullam viverra
								nam auctor sit ipsum malesuada a, duis volutpat. Convallis
								turpis erat tempus, viverra aliquet. Nullam viverra nam auctor
								sit ipsum malesuada a, duis volutpat.
							</Text>
						</Container>
						<Image src={Lady2} alt="lady" m={{base: " 10px auto", md:" 20px auto",  lg:" 40px 10px 10px  10px", xl: " 70px 20px 20px 20px"}} maxW="100%" width="85%"/>
					</Box>
				</Flex>
				<Flex p={{base: "10px 0"}} 	flexDirection={{base: "column", md: "row", lg: "row", xl: "row"}} margin={{base:"auto"}}>
					<Box mr={{base: "0", md:"20px", lg: "30px", xl:"40px"}}>
						<Image src={Sliders} width={{base: "100%", md:"85%",  lg:"100%", xl: "100%"}} maxW="100%"/>
					</Box>
					<Container maxW={{base: "none", md: "container.sm", xl: "container.md", lg: "container.md"}} margin="auto" m={{base:"30px auto", xl: "150px 40px auto auto"}}>
						<Text as="h2" fontSize={{base: "1.5rem", md:"2rem",  lg:"2.6rem", xl: "3rem"}} pt={{base: "25px"}} textAlign={{base:"left"}}>The best design for your studio website</Text>
						<Text fontSize={{base: "1.3rem", md:"1.3rem",  lg:"1.3rem", xl: "1.6rem"}} p={{base:"10px 0"}}>
							Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
							auctor sit ipsum malesuada duis volutpat.
						</Text>
						<Text as="a" href="#" className="link">
							Experienced Team
						</Text>
					</Container>
				</Flex>
				<Flex pb="100px" justifyContent="space-between" flexDirection={{base: "column", md: "row", lg: "row", xl: "row"}} margin={{base:"auto"}}>
					<Container
						maxW={{base: "none", md: "container.sm", xl: "container.md", lg: "container.md"}} margin="auto" m={{base:"30px auto", xl: "150px 40px auto auto"}}>
						<Text as="h2"fontSize={{base: "1.5rem", md:"2rem",  lg:"2.6rem", xl: "3rem"}} pt={{base: "5px"}} textAlign={{base:"left"}}>The best design for your studio website</Text>
						<Text fontSize={{base: "1.3rem", md:"1.3rem",  lg:"1.3rem", xl: "1.6rem"}} p={{base:"10px 0"}}>
							Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
							auctor sit ipsum malesuada duis volutpat.
						</Text>
						<Text as="a" href="#" className="link">
							Experienced Team
						</Text>
					</Container>
					<Box>
						<Image src={Sliders} />
					</Box>
				</Flex>
			</Box>
			<Box padding={{base: "40px 0", md:"60px 0", lg:"120px 0", xl: "150px 0"}}>
				<Box padding={{base: "0 10px", md: "0 20px", lg: "0 50px 0 100px", xl: "0 100px 0 300px"}}>
					<Text
						as="h3"
						color="#000"
						fontSize="1.2rem"
						textAlign="center"
						fontWeight="500">
						DESIGN Concept
					</Text>
					<Text as="h2" textAlign="center" padding="40px 0" fontSize={{base: "2rem", md:"2rem",  lg:"2.6rem", xl: "3rem"}}>
						The best design for your <br /> studio website
					</Text>
					<Card />
				</Box>
			</Box>
			<Box className="box" width={{base: "100%", md:"95%", lg: "85%", xl: "82%"}}>
				<Box margin={{base: "12px", md:"25px", lg:"40px", xl:"50px"}}>
					<Box w={{base: "100%", md:"70%", lg:"65%", xl: "50%"}} padding={{base: "10px", md:"25px", lg:"40px", xl:"50px"}}>
						<Text
							as="h3"
							color="#000"
							fontSize="1.2rem"
							fontWeight="500"
							padding="40px 0 30px 0">
							DESIGN Concept
						</Text>
						<Text as="h2" fontSize={{base: "2rem", md:"2rem",  lg:"2.6rem", xl: "3rem"}}>The best design for your studio website</Text>
						<Text fontWeight="400" fontSize="1.2rem" padding="30px 0 20px 0">
							Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
							auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
							tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
							malesuada a, duis volutpat.
						</Text>
					</Box>
				</Box>
				<Flex className="container">
					<Container>
						<Flex>
							<Image src={Icon} alt="icon" w="25px" />
							<Text fontWeight="bold" fontSize="1.2rem" pl="10px">
								Design Concept
							</Text>
						</Flex>
						<Text padding="10px 10px 20px 30px">
							Vitae nulla nunc euismod vel nunc euismod velpretium tellus
							accumsan nulla nunc euismod ve semper.
						</Text>
					</Container>
					<Container>
						<Flex>
							<Image src={Icon} alt="icon" w="25px" />
							<Text fontWeight="bold" fontSize="1.2rem" pl="10px">
								Developing Websites
							</Text>
						</Flex>
						<Text padding="10px 10px 20px 30px">
							Vitae nulla nunc euismod vel nunc euismod velpretium tellus
							accumsan nulla nunc euismod ve semper.
						</Text>
					</Container>
				</Flex>
				<Flex className="container">
					<Container>
						<Flex>
							<Image src={Icon} alt="icon" w="26px" />
							<Text fontWeight="bold" fontSize="1.2rem" pl="10px">
								Developing Website
							</Text>
						</Flex>
						<Text padding="10px 10px 20px 30px">
							Vitae nulla nunc euismod vel nunc euismod velpretium tellus
							accumsan nulla nunc euismod ve semper.
						</Text>
					</Container>
					<Container>
						<Flex>
							<Image src={Icon} alt="icon" w="25px" />
							<Text fontWeight="bold" fontSize="1.2rem" pl="10px">
								Design Concept
							</Text>
						</Flex>
						<Text padding="10px 10px 20px 30px">
							Vitae nulla nunc euismod vel nunc euismod velpretium tellus
							accumsan nulla nunc euismod ve semper.
						</Text>
					</Container>
				</Flex>
				<Box>
					<Flex
						justifyContent="space-between"
						align="center"
						margin={{base: "15px", md:"15px 50px", lg: "15px 80px", xl: "20px 120px"}}>
						<Text as="h2" padding="40px 0" fontSize={{base: "2rem", md:"2rem",  lg:"2.5rem", xl: "2.5rem"}}>
							The best design for your
							<br /> studio website
						</Text>
						<Text as="a" color="#0E6FFF" textDecoration="underline">
							Experienced Teams
						</Text>
					</Flex>
				</Box>
				<Box margin={{base: "15px", md:"15px 50px", lg: "15px 80px", xl: "20px 100px"}}>
					<Cards />
				</Box>
			</Box>

			<Box margin={{base: "50px auto", md: "70px", lg:"130px", xl:"150px" }}>
				<Text as="h2" textAlign="center" fontSize={{base: "2rem", md:"2rem",  lg:"2.5rem", xl: "2.5rem"}}>
					Our LeaderShip
				</Text>
				<Text fontSize="1.2rem" textAlign="center" padding="30px 0">
					Vitae nulla nunc euismod vel nunc euismod velpretium tellus
					<br />
					accumsan nulla nunc euismod ve semper.
				</Text>
				<People />
			</Box>

			<Box padding={{base:"50px 20px",md:"50px 30px", lg:"100px 120px", xl:"100 150px"}} textAlign="left" className="boxs">
				<Container maxW="container.md">
					<Text fontWeight="bold" fontSize="1.5rem">
						“Every single person comes away and says - wow that's a really slick
						experience, that was so easy to use. I feel so much less stressed as
						I now know we’re doing everything by the book.”
					</Text>
					<Flex pt="40px">
						<Image src={Round1} width="70px" />
						<Box alignSelf="center" pl="15px" textAlign="justify">
							<Text as="h4" fontWeight="bold">
								Andy Ford
							</Text>
							<Text>Ceo at Whatever</Text>
						</Box>
					</Flex>
				</Container>
				<Container maxW="container.md" padding="100px 0 0px 0">
					<Text fontWeight="bold" fontSize="1.5rem">
						“Every single person comes away and says - wow that's a really slick
						experience, that was so easy to use”
					</Text>
					<Flex pt="40px">
						<Image src={Round1} width="70px" />
						<Box alignSelf="center" pl="15px" textAlign="justify">
							<Text as="h4" fontWeight="bold">
								Andy Ford
							</Text>
							<Text>Ceo at Whatever</Text>
						</Box>
					</Flex>
				</Container>
			</Box>

			<Box width={{base: "80%", md: "70%", lg:"60%", xl: "50%"}} m="70px auto 150px auto" bg="#FFF4D4" borderRadius="20px" className="div" padding={{base:"35px", md:"25px", lg:"40px", xl:"50px"}}>
				<Flex justifyContent="space-between" flexDirection={{base:"column", md: "row", lg: "row", xl:"row"}}>
					<Box width={{base:"100%", md: "70%", lg:"70%", xl: "70%"}}>
						<Text fontSize="1.8rem" fontWeight="bold">All-in-one platform for business</Text>
						<Text fontSize="1.2rem" m={{base:"20px 0 20px  0"}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
							volutpat, viverra magna risus aliquam massa. Ac aliquam ac
							volutpat, viverra magna risus.{" "}
						</Text>
					</Box>
					<Box margin="auto">
					<button className="button">Get In Touch</button>
					</Box>
				</Flex>
			</Box>
		</Pagelayout>
	);
}

export default PageLayout;
