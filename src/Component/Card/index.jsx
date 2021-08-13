import React from "react";
import { Grid, Box, Text, Divider, Image, Button } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Lead1 from "../../assets/PNG/leader1.png";
import Lead2 from "../../assets/PNG/leader2.png";
import Lead3 from "../../assets/PNG/leader3.png";
import Lead4 from "../../assets/PNG/leader4.png";

const card = [
	{
		h1: "Name",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
	{
		h1: "Name",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
	{
		h1: "Name",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
	{
		h1: "Name",
		p: "Lorem ipsum dolor sit aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
	{
		h1: "Name",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
	{
		h1: "Name",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
	{
		h1: "Name",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
	{
		h1: "Name",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
];

export const cards = [
	{
		h1: "Audit",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
	{
		h1: "Team Work",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
	{
		h1: "Create",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa.Ac aliquam ac volutpat, viverra magna risus.",
		a: "Experienced Team",
	},
];

export const people = [
	{
		img: Lead1,
		h1: "Andry Ford",
		p: "Ceo at whatever",
	},
	{
		img: Lead2,
		h1: "Andry Ford",
		p: "Ceo at whatever",
	},
	{
		img: Lead3,
		h1: "Andry Ford",
		p: "Ceo at whatever",
	},
	{
		img: Lead4,
		h1: "Andry Ford",
		p: "Ceo at whatever",
	},
];

export function Card() {
	
	return (
		<>
		<Grid templateColumns="repeat(8, 1fr)" gap={5}>
			{card.map((cards, index) => (
				<Box
				key={index}
					w="300px"
					h="270px"
					boxShadow="xl"
					p="6"
					rounded="md"
					bg="white"
					padding="25px"
					textAlign="left">
					<Text as="h1" pb="10px" fontSize="1.5rem">
						{cards.h1}
					</Text>
					<Text as="p" pb="10px">
						{cards.p}
					</Text>
					<Text
						as="a"
						color="rgba(17, 19, 30, 0.2)"
						_hover={{
							color: "blue",
							textDecoration: "underline",
						}}>
						{cards.a}
					</Text>
				</Box>
			))}
		</Grid>
		<Button className="prev" width="50px" m="20px 10px">
			<AiOutlineArrowLeft fontSize="20px" />
		</Button>
		<Button className="next" width="50px" m="20px 10px">
			<AiOutlineArrowRight fontSize="20px"/>
		</Button>
		</>
	);
}

export function Cards() {
	return (
		<Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={3} placeItems="center">
			{cards.map((card, index) => (
				<Box key={index}
					w="300px"
					h="270px"
					boxShadow="xl"
					p="6px"
					rounded="md"
					bg="white"
					padding="25px"
					textAlign="left">
					<Text as="h1" pb="10px" fontSize="1.5rem" fontWeight="extrabold">
						{card.h1}
					</Text>
					<Text as="p" pb="40px">
						{card.p}
					</Text>
					<Divider />
					<Text
						as="a"
						pt="10px"
						color="rgba(17, 19, 30, 0.2)"
						_hover={{
							color: "blue",
							textDecoration: "underline",
						}}>
						{card.a}
					</Text>
				</Box>
			))}
		</Grid>
	);
}

export function People() {
	return (
		<Grid templateColumns="repeat(auto-fit, minmax(270px, 1fr))" gap={3} placeItems="center">
			{people.map((card, index) => (
				<Box key={index}>
					<Image src={card.img} maxW="100%" width="90%" height="80%" paddingBottom="15px"/>
					<Box textAlign="center">
						<Text as="h1" fontWeight="extrabold">
							{card.h1}
						</Text>
						<Text paddingBottom="20px">
							{card.p}
						</Text>
					</Box>
				</Box>
			))}
		</Grid>
	);
}
