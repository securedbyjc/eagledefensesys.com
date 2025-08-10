import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  Stack,
  useToast,
  FormLabel,
} from "@chakra-ui/react";

const FORM_ENDPOINT = "https://usebasin.com/f/56372b24f7a3"; // Replace with your real endpoint

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. We'll respond as soon as possible.",
          status: "success",
          duration: 7000,
          isClosable: true,
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later or email us directly.",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={12}
      p={8}
      bg="white"
      borderRadius="xl"
      boxShadow="md"
    >
      <Heading as="h1" size="lg" mb={6} color="yellow.600" textAlign="center">
        Contact Us
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Box>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" name="name" type="text" required />
          </Box>
          <Box>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" name="email" type="email" required />
          </Box>
          <Box>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" name="message" rows={5} required />
          </Box>
          <Button
            type="submit"
            colorScheme="yellow"
            isLoading={submitting}
            isDisabled={submitting}
          >
            Send Message
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Contact;
