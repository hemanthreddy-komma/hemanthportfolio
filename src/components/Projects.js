import React from 'react'
import { Box } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import {projects} from '../data/data'
const Projects = () => {
  return (
    <Box>
      <Box className="text-4xl text-white p-4 gradient-text font-bold">
        Projects
      </Box>
      <Box className="flex flex-col md:flex-row flex-wrap mx-[35px] my-2 justify-center items-center">
        {projects.map((p) => (
          <ProjectCard
            key={p.name}
            image={p.image}
            name={p.name}
            description={p.description}
            url1={p.url1}
            url2={p.url2}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Projects