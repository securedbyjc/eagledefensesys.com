// src/components/Footer.tsx
import React from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  Link,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const bg = useColorModeValue("black", "gray.900");
  const color = useColorModeValue("yellow.400", "yellow.300");
  const hoverColor = useColorModeValue("yellow.300", "yellow.200");

  return (
    <Box as="footer" bg={bg} color={color} py={6} mt={12}>
      <Container maxW="5xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={4}
        >
          <Text fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} Eagle Defense Systems LLC. All rights reserved.
          </Text>
          <HStack spacing={6}>
            {[
              { label: "About", path: "/about" },
              { label: "Capabilities", path: "/capabilities" },
              { label: "Projects", path: "/projects" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                as={RouterLink}
                to={path}
                fontSize="sm"
                _hover={{ color: hoverColor }}
              >
                {label}
              </Link>
            ))}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
