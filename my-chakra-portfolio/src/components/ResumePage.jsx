
import React from 'react';
import { 
    Box, 
    Button, 
    Container, 
    Heading, 
    SimpleGrid, 
    Text, 
    VStack, 
    HStack, 
    Divider, 
    List, 
    ListItem, 
    IconButton, 
    useColorMode, 
    Drawer, 
    DrawerBody, 
    DrawerContent, 
    DrawerHeader, 
    DrawerOverlay,
    keyframes,
    Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, EmailIcon, PhoneIcon, ExternalLinkIcon } from '@chakra-ui/icons';

const ResumePage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const animation = keyframes`
        to {
          background-position: 200% center;
        }
    `;

    return (
        <Box 
            bg={colorMode === "dark" ? "gray.900" : "gray.100"} 
            color={colorMode === "dark" ? "white" : "black"} 

            // removed minH="100vh" to fix the footer issue so that the styling is consistent with the other pages
            // minH="100vh" 
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

            {/* Back to Home Button */}
            {/*remove position to keeop the button at the top of the page */}
            <Box position="absolute" top={4} left={4}>
          <Button as={Link} to="/" colorScheme="purple" variant="outline">
            Back to Home
          </Button>
        </Box>

            <Container maxW="100%" px={8} flex="1">
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
                    My Resume
                </Heading>
                
                {/* Professional Summary */}
                <VStack align="start" spacing={4} mb={8}>
                    <Heading as="h2" size="lg" color="purple.400">
                        Professional Summary
                    </Heading>
                    <Text>
                        Passionate and dedicated Full-Stack Developer with a comprehensive background in web development, proficient in both front-end and back-end technologies. Experienced in building dynamic, responsive, and user-friendly applications using the MERN stack. Adept at problem-solving, collaborative teamwork, and continuously learning new technologies to deliver high-quality solutions.
                    </Text>
                </VStack>

                <Divider borderColor="purple.600" mb={8} />

                {/* Education */}
                <VStack align="start" spacing={4} mb={8}>
                    <Heading as="h2" size="lg" color="purple.400">
                        Education
                    </Heading>
                    <Box>
                        <Heading as="h3" size="md">
                            Full Stack Web Development Certificate
                        </Heading>
                        <Text>University of Minnesota Boot Camps</Text>
                        <Text>[February 26, 2024] – [August 19, 2024]</Text>

                        <Box mt={4}>
                            <a href="https://www.credly.com/badges/3e5bc8ab-8ccd-4974-b7b4-60d4a6e279c4/public_url" target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src="/certificate.png"  // Path to your downloaded badge image
                                    alt="Full Stack Web Development Certificate Badge"
                                    width="200px" 
                                />
                            </a>
                        </Box>
                    </Box>
                </VStack>

                <Divider borderColor="purple.600" mb={8} />

                {/* Technical Skills */}
                <VStack align="start" spacing={4} mb={8}>
                    <Heading as="h2" size="lg" color="purple.400">
                        Technical Skills
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        <Box>
                            <Heading as="h4" size="md" mb={2}>
                                Languages & Frameworks
                            </Heading>
                            <List spacing={1}>
                                <ListItem>JavaScript</ListItem>
                                <ListItem>HTML5</ListItem>
                                <ListItem>CSS3</ListItem>
                                <ListItem>Node.js</ListItem>
                                <ListItem>Express.js</ListItem>
                                <ListItem>React.js</ListItem>
                                <ListItem>Handlebars.js</ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h4" size="md" mb={2}>
                                Databases
                            </Heading>
                            <List spacing={1}>
                                <ListItem>MongoDB</ListItem>
                                <ListItem>SQL</ListItem>
                                <ListItem>NoSQL</ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h4" size="md" mb={2}>
                                Development Tools
                            </Heading>
                            <List spacing={1}>
                                <ListItem>Git</ListItem>
                                <ListItem>GitHub</ListItem>
                                <ListItem>VS Code</ListItem>
                                {/* <ListItem>Postman</ListItem> */}
                            </List>
                        </Box>
                        <Box>
                            <Heading as="h4" size="md" mb={2}>
                                Concepts & Methodologies
                            </Heading>
                            <List spacing={1}>
                                <ListItem>Full-Stack Development</ListItem>
                                <ListItem>Front-end Coding</ListItem>
                                <ListItem>Web Development</ListItem>
                                <ListItem>Object-Oriented Programming (OOP)</ListItem>
                                <ListItem>Model-View-Controller (MVC)</ListItem>
                                <ListItem>Progressive Web Applications (PWAs)</ListItem>
                                <ListItem>Web API</ListItem>
                                <ListItem>API Development</ListItem>
                                <ListItem>Object-Relational Mapping (ORM)</ListItem>
                                <ListItem>MERN Stack</ListItem>
                            </List>
                        </Box>
                    </SimpleGrid>
                </VStack>

                <Divider borderColor="purple.600" mb={8} />

                {/* Contact Information */}
                <VStack align="start" spacing={2} mb={8}>
                    <Heading as="h2" size="lg" color="purple.400">
                        Contact Information
                    </Heading>
                    <HStack>
                        <EmailIcon />
                        <Text><a href="mailto:elijah.ward014@gmail.com">elijah.ward014@gmail.com</a></Text>
                    </HStack>
                    <HStack>
                        {/* <PhoneIcon />
                        <Text>+1 (563) 514-6580</Text> */}
                    </HStack>
                    <HStack>
                        {/* <ExternalLinkIcon /> */}
                        {/* <Button 
                            as="a" 
                            href="https://www.linkedin.com/in/yourprofile" 
                            target="_blank" 
                            colorScheme="purple" 
                            variant="link"
                        >
                            LinkedIn
                        </Button> */}

                        <Button as="a" href="https://www.linkedin.com/in/elijah-ward-46bb9a320" target="_blank" variant="link">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" alt="LinkedIn" />
          </Button>

          <Button as="a" href="https://github.com/ElijahWard4" target="_blank" variant="link">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
          </Button>

                        {/* <Button 
                            as="a" 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            colorScheme="purple" 
                            variant="link"
                        >
                            GitHub
                        </Button> */}
                    </HStack>
                </VStack>
            </Container>
        </Box>
    );
};

export default ResumePage;
