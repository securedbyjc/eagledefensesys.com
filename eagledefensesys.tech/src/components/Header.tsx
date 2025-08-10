// src/components/Header.tsx
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  IconButton,
  Button,
  Collapse,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const bg = useColorModeValue("black", "gray.900");
  const color = useColorModeValue("yellow.400", "yellow.300");

  return (
    <Box as="header" bg={bg} color={color} py={4} px={6} boxShadow="md">
      <Flex align="center" justify="space-between">
        <Flex
          as={RouterLink}
          to="/"
          align="center"
          gap={3}
          _hover={{ textDecoration: "none" }}
        >
          <Image src="/assets/logo-eds-black.png" alt="EDS Logo" boxSize="50px" />
          <Heading size="md" color={color} letterSpacing="wider">
            Eagle Defense Systems
          </Heading>
        </Flex>

        {/* Mobile Toggle */}
        <IconButton
          aria-label={isOpen ? "Close menu" : "Open menu"}
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          color={color}
        />

        {/* Desktop Navigation */}
        <Flex display={{ base: "none", md: "flex" }} gap={6}>
          {navLinks.map(({ label, to }) => (
            <Button
              key={label}
              as={RouterLink}
              to={to}
              variant="ghost"
              colorScheme="yellow"
              fontWeight="medium"
            >
              {label}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Navigation */}
      <Collapse in={isOpen} animateOpacity>
        <Flex direction="column" mt={2}>
          {navLinks.map(({ label, to }) => (
            <Button
              key={label}
              as={RouterLink}
              to={to}
              variant="ghost"
              colorScheme="yellow"
              w="100%"
              fontWeight="medium"
            >
              {label}
            </Button>
          ))}
        </Flex>
      </Collapse>
    </Box>
  );
};

export default Header;
