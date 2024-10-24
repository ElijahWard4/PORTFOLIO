import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      name: "Weather Dashboard",
      description: "Allows users to search for weather information in any city.",
      url: "https://github.com/ElijahWard4/weather-dashboard"
    },
    {
      id: 2,
      name: "Nahtazu",
      description: "Project for a wildlife sanctuary website.",
      url: "https://github.com/alarrabee/nahtazu-wildlife-sanctuary" //i contributed to this project 
    },
    {
      id: 3,
      name: "Text Editor",
      description: "(PWA) text editor that allows users to create, edit, and save text documents directly in the browser.",
      url: "https://github.com/ElijahWard4/Text-Editor-ElijahWard" 
    },
    {
        id: 4,
        name: "Kandan-Task-Board",
        description: "Simple and efficient Kanban board for task management.",
        url: "https://github.com/ElijahWard4/Kanban-Task-Board"
    },
    {
        id: 5,
        name: "BookHunt",
        description: "MERN stack application that allows users to search for books using the Google Books API",
        url: "https://github.com/ElijahWard4/BookHunt"
    },
    {
        id: 6,
        name: "Boredom App",
        description: "Our website is a tool used to demolish boredom!",
        url: "https://github.com/owenkanzler/boredom-app"
    },
    {
        id: 7,
        name: "Animal-Adoption-App",
        description: "Welcome to Paws and Claws, an intuitive and user-friendly animal adoption application designed to help animals find their forever homes.",
        url: "https://github.com/benjamin-parks/Project-2-Animal-Adoption-App"
    },
    {
        id: 8,
        name: "E-CommerceConnect",
        description: "This project is a functional Express.js API for an e-commerce application",
        url: "https://github.com/ElijahWard4/E-CommerceConnect"
    },
    {
        id: 9,
        name: "SVG Logo Generator",
        description: "a command-line application that prompts the user for input to generate a customized SVG logo.",
        url: "https://github.com/ElijahWard4/SVG-Logo-Generator"
    },
    {
        id: 10,
        name: "First-Blog",
        description: "This is a simple blog application where users can submit their thoughts",
        url: "https://github.com/ElijahWard4/First-Blog-ElijahWard"
    },
    // Add more projects here
  ];

  const backgroundStyles = {
    "Weather Dashboard": "linear-gradient(135deg, #72EDF2 10%, #5151E5 100%)", // Cool blue gradient
    "Nahtazu": "linear-gradient(135deg, #FF9D6C 10%, #BB4E75 100%)", // Warm sunset gradient
    "Text Editor": "linear-gradient(135deg, #F9D423 10%, #FF4E50 100%)", // Vibrant orange-red gradient
    "Kandan-Task-Board": "linear-gradient(135deg, #B0E57C 10%, #34AADC 100%)", // Fresh green-blue gradient
    "BookHunt": "linear-gradient(135deg, #FAD961 10%, #F76B1C 100%)", // Golden-yellow to orange gradient
    "Boredom App": "linear-gradient(135deg, #a18cd1 10%, #fbc2eb 100%)", // Soft purple-pink gradient
    "Animal-Adoption-App": "linear-gradient(135deg, #FDCB8B 10%, #C490E4 100%)", // Gentle pastel gradient
    "E-CommerceConnect": "linear-gradient(135deg, #FFAA85 10%, #B3315F 100%)", // Bold pink-red gradient
    "SVG Logo Generator": "linear-gradient(135deg, #F0C27B 10%, #4B1248 100%)", // Rich gold to dark purple gradient
    "First-Blog": "linear-gradient(135deg, #00C9FF 10%, #92FE9D 100%)", // Bright blue-green gradient
  };

  const textStyles = {
    "Weather Dashboard": { color: "#FFFFFF", fontWeight: "bold" },
    "Nahtazu": { color: "#FFFFFF", fontWeight: "bold" },
    "Text Editor": { color: "#000000", fontWeight: "bold" },
    "Kandan-Task-Board": { color: "#FFFFFF", fontWeight: "bold" },
    "BookHunt": { color: "#FFFFFF", fontWeight: "bold" },
    "Boredom App": { color: "#FFFFFF", fontWeight: "bold" },
    "Animal-Adoption-App": { color: "#FFFFFF", fontWeight: "bold" },
    "E-CommerceConnect": { color: "#FFFFFF", fontWeight: "bold" },
    "SVG Logo Generator": { color: "#000000", fontWeight: "bold" },
    "First-Blog": { color: "#000000", fontWeight: "bold" },
  };

  // Define unique box shadows based on project name
  const boxShadows = {
    "Weather Dashboard": "0px 4px 15px rgba(113, 227, 247, 0.5)",
    "Nahtazu": "0px 4px 15px rgba(255, 157, 108, 0.5)",
    "Text Editor": "0px 4px 15px rgba(249, 212, 35, 0.5)",
    "Kandan-Task-Board": "0px 4px 15px rgba(176, 229, 124, 0.5)",
    "BookHunt": "0px 4px 15px rgba(250, 217, 97, 0.5)",
    "Boredom App": "0px 4px 15px rgba(161, 140, 209, 0.5)",
    "Animal-Adoption-App": "0px 4px 15px rgba(253, 203, 139, 0.5)",
    "E-CommerceConnect": "0px 4px 15px rgba(255, 170, 133, 0.5)",
    "SVG Logo Generator": "0px 4px 15px rgba(240, 194, 123, 0.5)",
    "First-Blog": "0px 4px 15px rgba(0, 201, 255, 0.5)",
  };

  return (
    <>
      {projects.map((project) => (
        <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.id} style={{ width: "100%", display: "flex", justifyContent: "center", textDecoration: "none" }}>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
        //   width={{ base: "100%", md: "90%" }}
          maxW="100%" // ensures the box doesn't overflow on smaller screens
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={backgroundStyles[project.name] || "gray.800"} // Default background if not found
          color={textStyles[project.name]?.color || "white"} // Default text color
          fontWeight={textStyles[project.name]?.fontWeight || "normal"} // Default font weight
          borderRadius="15px" // Rounded corners
          boxShadow={boxShadows[project.name] || "0px 4px 15px rgba(0, 0, 0, 0.2)"} // Unique shadow
          transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out" // Transition for hover effect
          _hover={{ transform: "scale(1.05)", boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }} // Hover effect
        >
          <VStack spacing={4} textAlign="center">
            <Heading fontSize="xl" fontWeight="bold">
              {project.name}
            </Heading>
            <Text fontSize="lg">{project.description}</Text>
            <FaGithub size={30} color="black" /> {/* GitHub icon */}
          </VStack>
        </Box>
      </a>
      ))}
    </>
  );
};

export default ProjectList;