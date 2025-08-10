import React, { ElementType } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaLock, FaRobot, FaCogs } from "react-icons/fa";

const iconProps = {
  boxSize: 12,
  color: "yellow.400",
  mb: 4,
};

const cardBg = "gray.800";

const TechnologyShowcase: React.FC = () => {
  const sectionBg = useColorModeValue("gray.900", "gray.900");
  const cardColor = useColorModeValue("yellow.400", "yellow.400");
  const cardText = useColorModeValue("yellow.900", "yellow.100");

  return (
    <Box as="section" bg={sectionBg} color={cardColor} py={{ base: 12, md: 16 }}>
      <Container maxW="5xl">
        <Heading as="h2" size="xl" mb={8} textAlign="center" color="yellow.400">
          Why Choose Eagle Defense Systems?
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} pt={8} justify="center">
          {/* Card 1 */}
          <Stack
            align="center"
            textAlign="center"
            maxW="300px"
            bg={cardBg}
            p={6}
            borderRadius="xl"
            boxShadow="md"
            color={cardColor}
          >
            <Icon as={FaLock as ElementType} {...iconProps} />
            <Text fontWeight="semibold" fontSize="lg">Security-First Infrastructure</Text>
            <Text fontSize="sm" color={cardText}>
              Architected from day one to meet CMMC, NIST 800-53, and FedRAMP controls—no bolt-on fixes required.
            </Text>
          </Stack>

          {/* Card 2 */}
          <Stack
            align="center"
            textAlign="center"
            maxW="300px"
            bg={cardBg}
            p={6}
            borderRadius="xl"
            boxShadow="md"
            color={cardColor}
          >
            <Icon as={FaRobot as ElementType} {...iconProps} />
            <Text fontWeight="semibold" fontSize="lg">AI-Augmented Compliance</Text>
            <Text fontSize="sm" color={cardText}>
              Our internal platforms use AI to detect misconfigurations, map control gaps, and accelerate audit prep.
            </Text>
            <Button
              as={RouterLink}
              to="/projects/swifteagle-access"
              colorScheme="yellow"
              variant="solid"
              mt={4}
              fontWeight="bold"
              size="sm"
              px={6}
              width="100%"
            >
              Request Access to SwiftEagle-AI
            </Button>
          </Stack>

          {/* Card 3 */}
          <Stack
            align="center"
            textAlign="center"
            maxW="300px"
            bg={cardBg}
            p={6}
            borderRadius="xl"
            boxShadow="md"
            color={cardColor}
          >
            <Icon as={FaCogs as ElementType} {...iconProps} />
            <Text fontWeight="semibold" fontSize="lg">Built to Scale with Startups & Agencies</Text>
            <Text fontSize="sm" color={cardText}>
              Whether it's a GovCon startup or a federal contract, we deliver hardened systems that are ready to grow.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TechnologyShowcase;

