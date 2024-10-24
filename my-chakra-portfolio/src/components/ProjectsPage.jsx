
// src/components/ProjectsPage.jsx
import React from "react";
import { Box, Button, Container, Heading, SimpleGrid, keyframes, IconButton, 
  useColorMode, } from "@chakra-ui/react";
import { SunIcon, MoonIcon, EmailIcon, PhoneIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import ProjectList from "../ProjectList";

const ProjectsPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const animation = keyframes`
        to {
          background-position: 200% center;
        }
    `;

    return (
    <div>
      {/* <Box bg="gray.900" color="white" minH="100vh" py={10}> */}

      <Box position="absolute" top={4} left={4}>
          <Button as={Link} to="/" colorScheme="purple" variant="outline">
            Back to Home
          </Button>
        </Box>


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


      <Container maxW="100%" px={8}> {/* Changed maxW to 100% and added px={8} */}
        {/* <Heading as="h1" size="2xl" mb={8} bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" textAlign="center">
          My Projects
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
                    My Projects
                </Heading>

        {/* Using SimpleGrid to organize project cards in a responsive grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} justifyItems="center">
          <ProjectList />
        </SimpleGrid>
      </Container>
    </Box>

      

    </div>
    );
  };
  
  export default ProjectsPage;
  
  
  {/* <Box as="footer" py={10} bg="gray.800">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Footer
          </Heading>
          <p>Footer content goes here...</p>
        </Container>
        </Box> */}