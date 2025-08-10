// src/pages/Projects.tsx
import React, { ComponentType } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaCogs, FaChartLine, FaGavel } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  icon: ComponentType<any>;
  github?: string;
  comingSoon?: boolean;
  accessLink?: string;
}

const projects: Project[] = [
  {
    title: "SwiftEagle AI",
    description:
      "A UEBA-based behavioral analytics engine designed to detect insider threats, automate risk scoring, and proactively defend against advanced threats.",
    icon: FaChartLine,
    github: "https://github.com/securedbyjc/SwiftEagle-AI",
    accessLink: "/projects/swifteagle-access",
  },
  {
    title: "LexSentinel AI",
    description:
      "A legal document analysis tool leveraging AI to extract, summarize, and classify sensitive legal content for compliance and risk management.",
    icon: FaGavel,
    github: "https://github.com/securedbyjc/lexsentinel-ai",
    accessLink: "/projects/lexsentinel-access",
  },
  {
    title: "Compliance Monitoring Dashboard",
    description:
      "A unified dashboard that tracks real-time GRC metrics, alerts on policy drift, and provides audit-ready reporting for CMMC, NIST, and FedRAMP.",
    icon: FaCogs,
    comingSoon: true,
  },
];

const Projects: React.FC = () => (
  <Box as="section" bg="gray.900" color="yellow.400" py={16} minH="100vh">
    <Container maxW="5xl">
      <Heading as="h1" size="2xl" mb={10} textAlign="center">
        Our Technology Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12}>
        {projects.map((project, idx) => {
          const { title, description, icon, github, comingSoon, accessLink } = project;

          const AccessLink = accessLink ? (
            <Link
              href={accessLink}
              color="red.700"
              fontWeight="semibold"
              textDecoration="underline"
              mt={2}
              display="block"
              onClick={(e) => e.stopPropagation()}
            >
              Request Access
            </Link>
          ) : null;

          if (comingSoon) {
            return (
              <Box
                key={idx}
                bg="gray.700"
                p={8}
                borderRadius="lg"
                boxShadow="xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                minH="340px"
                height="100%"
                position="relative"
              >
                <Icon as={icon} boxSize={12} color="yellow.400" mb={4} />
                <Heading as="h3" size="md" mb={3} mt={2} color="yellow.300" textAlign="center">
                  {title}
                </Heading>
                <Text color="yellow.100" fontSize="md" textAlign="center" mb={2}>
                  {description}
                </Text>
                {AccessLink}
                <Text fontSize="sm" color="yellow.200" mt="auto" opacity={0.95} fontWeight="bold">
                  Coming Soon
                </Text>
              </Box>
            );
          }

          return (
            <Link
              key={idx}
              href={github}
              isExternal
              _hover={{
                textDecoration: "none",
                transform: "scale(1.04)",
                boxShadow: "2xl",
                bg: "yellow.900Alpha",
              }}
              borderRadius="lg"
              transition="all 0.18s cubic-bezier(.4,0,.2,1)"
              display="block"
              role="group"
              aria-label={`View ${title} on GitHub`}
            >
              <Box
                bg="gray.800"
                borderRadius="lg"
                boxShadow="xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                minH="340px"
                height="100%"
                transition="all 0.18s cubic-bezier(.4,0,.2,1)"
                _groupHover={{ bg: "gray.700" }}
              >
                <Icon as={icon} boxSize={12} color="yellow.400" mb={4} />
                <Heading as="h3" size="md" mb={3} mt={2} color="yellow.300" textAlign="center">
                  {title}
                </Heading>
                <Text color="yellow.100" fontSize="md" textAlign="center" mb={2}>
                  {description}
                </Text>
                {AccessLink}
                <Text fontSize="sm" color="yellow.200" mt="auto" opacity={0.85}>
                  View on GitHub &rarr;
                </Text>
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>
      <Stack mt={12} align="center">
        <Text fontSize="lg" color="yellow.200">
          Want a technical walkthrough? Schedule a demo and see how EDS delivers.
        </Text>
      </Stack>
    </Container>
  </Box>
);

export default Projects;
