
import source  from "../../src/assets/images/IMG_5258-removebg.png";

import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  useColorMode,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  keyframes,

  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure(); // For the Goals Drawer
  // Animation for the gradient text
  const animation = keyframes`
    to {
      background-position: 200% center;
    }`

  return (
    <Box
      bg={colorMode === "dark" ? "gray.900" : "gray.100"}
      color={colorMode === "dark" ? "white" : "black"}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      {/* Fixed Theme Toggle Button */}
      <Box position="absolute" top={4} right={4}>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          isRound
          size="md"
          onClick={toggleColorMode}
          aria-label="Toggle theme"
        />
      </Box>

      {/* Goals Button in Top Left */}
      <Box position="absolute" top={4} left={4}>
        <Button bgGradient="linear(to-l, #FF0080, #7928CA,)" _hover={{ bg:"< #FF0080, #7928CA >" }} onClick={onOpen}>
          Goals
        </Button>
      </Box>

      {/* Drawer for Goals */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">My Goals</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Text>1. Learn advanced React techniques</Text>
              <Text>2. Master the MERN stack</Text>
              <Text>3. Build more full-stack projects</Text>
              <Text>4. Implement authentication and authorization using JWT and OAuth in MERN applications</Text>
              <Text>5. Implement testing with Jest to ensure MERN application quality</Text>
              <Text>6. Improve knowledge of GraphQL to build efficient APIs in the MERN stack</Text>
              <Text>7. Build and deploy scalable MERN applications using cloud platforms like Render or Heroku</Text>
              <Text>8. Learn TypeScript to enhance code quality and maintainability in MERN applications</Text>
              {/* Add more goals as needed */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Container maxW="container.md" textAlign="center">
          <VStack spacing={0}>
            <Heading  bgGradient="linear(to-l, #7928CA,#FF0080)"
                      bgClip="text"
                      fontSize="6xl"
                      fontWeight="extrabold"
                      backgroundSize= "200% auto"
                      animation= {`${animation} 2s linear infinite`}
                    >
              Elijah Ward
            </Heading>

            <Box bg="brand.900" w="100%" p={0} flex="1" display="flex" justifyContent="center" alignItems="center" color="white">
      <Box p={4}>

        {/* <Text fontSize={{ base: "md", md: "lg" }} >Full-Stack Developer</Text> */}

        <Text
      fontSize={{ base: "md", md: "lg" }}
      color={colorMode === "dark" ? "white" : "gray.800"} // This ensures the text adapts to the theme
    >
      Full-Stack Developer
    </Text>

        {/* profile image  */}
        {/* <Image src={source} alt="s" w={130} h={160} borderRadius="full" /> */}
        
      </Box>
    </Box>

            <HStack spacing={4}>
              <Button colorScheme="purple" as={Link} to="/projects">
                Projects
              </Button>
              <Button colorScheme="purple" variant="outline" as={Link} to="/resume">
                Resume
              </Button>
              <Button colorScheme="purple" variant="ghost" as={Link} to="/contact">
                Contact
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box id="about" py={10} bg={colorMode === "dark" ? "gray.800" : "gray.200"} flexShrink="0">
        <Container maxW="container.md" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} textAlign="center">
          I'm Elijah Ward, a passionate full-stack developer with a strong focus on creating dynamic and responsive web applications. My expertise lies in the MERN stack, where I leverage MongoDB, Express, React, and Node.js to build robust, scalable, and user-friendly applications.

 My journey into web development began with a deep curiosity about how websites work. This curiosity quickly evolved into a full-fledged passion, leading me to pursue formal training at the University of Minnesota's Coding Boot Camp. Here, I honed my skills in both front-end and back-end development, gaining hands-on experience in building real-world applications.

 I thrive on solving complex problems and turning ideas into tangible digital experiences. Whether it's designing seamless user interfaces, developing efficient APIs, or managing databases, I approach each project with a commitment to quality and a keen eye for detail.

 Beyond technical skills, I am dedicated to continuous learning and staying updated with the latest industry trends. I believe that the tech world is ever-evolving, and I am always excited to explore new tools and technologies that can enhance the projects I work on.

 When I'm not coding, you can find me challenging myself with outdoor adventures. I have a passion for slacklining, where I find a balance between focus and relaxation as I walk the line, literally. Kayaking is another favorite, offering me the chance to explore nature from the water, paddling through serene lakes or navigating the currents of a winding river. For an extra dose of adrenaline, I turn to skydiving, where the thrill of freefalling from thousands of feet in the air provides an unmatched sense of freedom and exhilaration.

 Thank you for visiting my portfolio. I invite you to explore my projects, and if you have any questions or opportunities for collaboration, feel free to reach out!
            {/* Continue your "About Me" text here... */}
          </Text>
        </Container>
      </Box>

      {/* Footer Section with Gradient Matching "Elijah Ward" Heading */}
      <Box as="footer" py={10} bgGradient="linear(to-l, #7928CA, #FF0080)" color="white" textAlign="center">
        <HStack spacing={4} justify="center">
          <Button as="a" href="https://github.com/ElijahWard4" target="_blank" variant="link">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
          </Button>
          <Button as="a" href="https://www.linkedin.com/in/elijah-ward-46bb9a320" target="_blank" variant="link">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" alt="LinkedIn" />
          </Button>
          <Button as="a" href="mailto:elijah.ward014@gmail.com" variant="link">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/gmail.png" alt="Email" />
          </Button>
        </HStack>
        <Text textAlign="center" mt={8} fontSize="sm">
          &copy; 2024 Elijah Ward
        </Text>
      </Box>
    </Box>
  );
};

export default HomePage;


