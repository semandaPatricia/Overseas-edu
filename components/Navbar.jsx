// app/components/Navbar.jsx

import { Images } from "@/Constants";
import Image from "next/image";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineInfo,
  AiOutlinePhone,
  AiOutlineTable,
  AiOutlineYoutube,
  
} from "react-icons/ai";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";


import { FaChevronDown } from "react-icons/fa";
import { RiPhoneFill, RiSearch2Line } from "react-icons/ri";
import { TbAlignLeft } from "react-icons/tb";



const NavPages = [
  { _id: 1, title: "Home", link: "/", icon: <AiOutlineHome /> },
  { _id: 3, title: "Mentors", link: "/mentor", icon: <AiOutlineInfo /> },
  {
    _id: 2,
    title: "Test Prep",
    link: "/preps",
    icon: <AiOutlineTable />,
    hasChildren: true,
    children: [
      {
        _id: "2_1",
        title: "IELTS",
        link: "/preps/63ec1441b56829f963751950",
        icon: <AiOutlineYoutube />,
        hasChildren: true,
        children: [
          { _id: "2_1_1", title: "Listening", link: "/preps/63ec1441b56829f963751950", icon: <AiOutlineYoutube /> },
          { _id: "2_1_2", title: "Reading", link: "/preps/63ec1441b56829f963751950", icon: <AiOutlineYoutube /> },
          { _id: "2_1_3", title: "Writing", link: "/preps/63ec1441b56829f963751950", icon: <AiOutlineYoutube /> },
          { _id: "2_1_4", title: "Speaking", link: "/preps/63ec1441b56829f963751950", icon: <AiOutlineYoutube /> },
          { _id: "2_1_5", title: "Grammar", link: "/preps/63ec1441b56829f963751950", icon: <AiOutlineYoutube /> },
        ],
      },
    ],
  },
  { _id: 4, title: "About Us", link: "/about", icon: <AiOutlineInfo /> },
  { _id: 5, title: "Contacts", link: "/contacts", icon: <AiOutlinePhone /> },
];


const Navbar = () => {
  return (
    <>
     {/*first banner-navbar*/}
      <Center display={["none", "none", "flex"]} bg="blue.900" p="2" gap="2">
        <Text color={"white"}>Get Scholarship </Text>
        <Button
          variant={"outline"}
          colorScheme={"gray"}
          color={"white"}
          _hover={{ color: "blue.800", bg: "white" }}
          size="sm"
        >
          Learn More
        </Button>
      </Center>
       {/*second navbar*/}
      <Center
        display={["none", "none", "flex"]}
        justifyContent={"space-between"}
        px="14"
        py="2"
        boxShadow={"sm"}
        borderBottom="1px solid"
        borderBottomColor={"gray.200"}
        position="sticky"
        top="0"
        bg="rgba(255, 255, 255, .9)"
        backdropFilter={"blur(50px)"}
        gap="10"
        zIndex={2}
      >
        <Link href="/" style={{ height: "35px", width: "40%" }}>
          <Image src={Images.LOGO_WIDE} height="35" alt="LeapAdmission Logo" />
        </Link>
         {/*pages-about-work-contact*/}
        <Box display="flex" gap="8" w="100%" justifyContent={"flex-end"}>
          
            
               <Link href="/">Home</Link>
            <Link href="/mentors">Mentors</Link>
            <Link href="/testprep">Test Prep</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
             
      
        </Box>
           {/*search box*/}
        <Center justifyContent={"flex-end"} gap="8">
          <Center
            w="300px"
            bg="blue.50"
            justifyContent={"flex-start"}
            gap="3"
            p="1.5"
            borderRadius={"md"}
            px="2"
            h="10"
            cursor={"pointer"}
          >
            <Text color={"gray.400"}>
            <RiSearch2Line size={20} />
            </Text>
            <Text color={"gray.400"}>Search Something</Text>
          </Center>
          {/*Phone*/}
          <Link href="tel:+1-860-209-8792">
            <Button colorScheme="teal" h="10">
              <RiPhoneFill size="20" />
            </Button>
          </Link>
</Center>
<Center justifyContent={"flex-end"} gap="5">
         
            <Menu>
              <MenuButton>
               
              </MenuButton>
              <MenuList>
                <MenuItem >Logout</MenuItem>
              </MenuList>
            </Menu>
          
              <Avatar
                name="Leap Admission User"
                size={"md"}
                src={Images.USER_DEFAULT.default.src}
                alt="user"
              />
           
         
        </Center>

      

      </Center>
    </>
  );
};

export default Navbar;
