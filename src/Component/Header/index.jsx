import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import {
	Flex,
	Box,
	Image,
	UnorderedList,
	List,
	Stack,
	IconButton,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HeaderNav } from "./style";
import Logo from "../../assets/PNG/logo.png";

const navLink = [
	{
		to: "/",
		a: "Home",
	},
	{
		to: "/templates",
		a: "Templates",
	},
	{
		to: "/price",
		a: "Price",
	},
	{
		to: "/help",
		a: "Help",
	},
	{
		to: "/create",
		a: "Get in Touch",
	},
];

function Header() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<HeaderNav>
   <Router>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				w="100%"
			zIndex="5"
				className="flex">
				<Box>
					<Image src={Logo} alt="logo" maxW="100%" w={[50, 100]} h={[50, 50]} />
				</Box>

				<IconButton
					size={"lg"}
					icon={
						isOpen ? (
							<CloseIcon fontSize="30px" />
						) : (
							<HamburgerIcon fontSize="40px" />
						)
					}
					aria-label={"Open Menu"}
					display={{ md: "none", lg: "none" }}
					bg="white"
					onClick={isOpen ? onClose : onOpen}
					_focus={{
						outline: "none",
					}}
				/>
					<UnorderedList
						className="ul"
						display={{ base: "none", md: "flex" }}
						marginRight="1rem">
						{navLink.map((nav, index) => (
							<List mr="5" key={index}>
								<NavLink
									className="links"
									to={nav.to}
									activeStyle={{
										color: "blue",
										border: "1px solid #FF4242",
										backgroundColor: "transparent",
										padding: "8px 10px",
									}}>
									{nav.a}
								</NavLink>
							</List>
						))}
					</UnorderedList>
			</Flex>
			{isOpen ? (
				<Box display={{ md: "none" }} h="100vh">
					<Stack
						top="0"
						w="100vw"
						zIndex="4"
						position="fixed"
						bg="white"
						overflowY="scroll"
						h="calc(100vh - 3rem)"
						marginTop="80px">
						<UnorderedList d="flex" flexDirection="column" justify="center" align="center" className="ul">
							{navLink.map((nav, index) => (
								<List m=" 40px 20px 20px 20px" className="links" key={index}>
									<NavLink to={nav.to}>{nav.a}</NavLink>
								</List>
							))}
						</UnorderedList>
					</Stack>
				</Box>
			) : null}
   </Router>
		</HeaderNav>
	);
}

export default Header;
