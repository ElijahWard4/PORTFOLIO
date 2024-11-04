
import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text, Alert, AlertIcon, useColorMode, IconButton, keyframes } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";


const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const animation = keyframes`
        to {
          background-position: 200% center;
        }
    `;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Simulate sending the email
  //   console.log("Sending email to:", "elijah.ward014@gmail.com");
  //   console.log("Form Data:", formData);

  //   setIsSubmitted(true);
  //   setFormData({ name: "", email: "", message: "" });
  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await fetch('http://localhost:5001/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (response.ok) {
  //       setIsSubmitted(true);
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       throw new Error('Email sending failed');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Email sent successfully:', data);
      } else {
        console.error('Error sending email:', data);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  

  return (
    <Box
      bg={colorMode === "dark" ? "gray.900" : "gray.100"}
      color={colorMode === "dark" ? "white" : "black"}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      {/* Theme Toggle Button */}
      <Box position="absolute" top={4} right={4}>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          isRound
          size="md"
          onClick={toggleColorMode}
          aria-label="Toggle theme"
        />
      </Box>

      {/* Back to Home Button */}
      <Box position="absolute" top={4} left={4}>
        <Button as={Link} to="/" colorScheme="purple" variant="outline">
          Back to Home
        </Button>
      </Box>

      <Box
        width="100%"
        maxW="600px"
        bg={colorMode === "dark" ? "gray.800" : "white"}
        p={8}
        borderRadius="lg"
        boxShadow="xl"
        display="flex"
        flexDirection="column"
      >
        <VStack spacing={8} textAlign="center" w="100%">
          {/* <Heading as="h1" size="2xl" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
            Contact Me
          </Heading> */}

<Heading 
                    as="h1" 
                    size="2xl" 
                    mb={8} 
                    bgGradient="linear(to-l, #7928CA, #FF0080)" 
                    bgClip="text"
                    backgroundSize="200% auto"
                    animation={`${animation} 2s linear infinite`}
                    textAlign="center"
                >
                    Contact Me
                </Heading>



          <Text fontSize="lg">
            I'd love to hear from you! Please fill out the form below to get in touch.
          </Text>

        
          {isSubmitted && (
            <Alert status="success" borderRadius="md">
              <AlertIcon />
              Your message has been sent successfully!
            </Alert>
          )}
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <VStack spacing={4} w="100%">
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  bg={colorMode === "dark" ? "gray.700" : "gray.200"}
                  borderColor={colorMode === "dark" ? "gray.600" : "gray.400"}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  bg={colorMode === "dark" ? "gray.700" : "gray.200"}
                  borderColor={colorMode === "dark" ? "gray.600" : "gray.400"}
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  bg={colorMode === "dark" ? "gray.700" : "gray.200"}
                  borderColor={colorMode === "dark" ? "gray.600" : "gray.400"}
                />
              </FormControl>
              <Button colorScheme="purple" type="submit" w="full">
                Send Message
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Box>
  );
};

export default ContactPage;
