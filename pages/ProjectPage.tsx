import React, { useState } from 'react';
import ProjectCard from './ProjectCard'; // Make sure to import the ProjectCard component
import { url } from 'inspector';

const ProjectPage = () => {
  // An example array of projects, replace this with your actual data
    const allProjects = [
        { title: 'Game Name 1', description: 'Description 1', image: '/public/.svg'},
        { title: 'Game Name 2', description: 'Description 2', image: '/path/to/image2.png' },
        { title: 'Game Name 3', description: 'Description 3', image: '/path/to/image3.png' },
        { title: 'Game Name 4', description: 'Description 4', image: '/path/to/image4.png' },
        { title: 'Game Name 5', description: 'Description 5', image: '/path/to/image5.png' },
        { title: 'Game Name 6', description: 'Description 6', image: '/path/to/image6.png' },
        { title: 'Game Name 7', description: 'Description 7', image: '/path/to/image7.png' },
        { title: 'Game Name 8', description: 'Description 8', image: '/path/to/image8.png' },
        { title: 'Game Name 9', description: 'Description 9', image: '/path/to/image9.png' },
        // Add more projects as needed
    ];

    // State to manage the current page and the number of projects to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 9; // You can change this number to control how many projects per page

    // Calculate the index range of projects to display on the current page
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

    // Function to handle pagination button click
    const handlePaginationClick = () => {
        // Increment the current page by 1
        setCurrentPage(currentPage + 1);
    };

    // Render the projects in a grid
    return (
        <div>
        <div className="w-max h-max grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 overflow-hidden overscroll-x-none">
            {currentProjects.map((project, index) => (
            <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
            />
            ))}
        </div>
        
        {/* Pagination button */}
        {allProjects.length > indexOfLastProject && (
            <button onClick={handlePaginationClick} className='bg-blue-500 text-white rounded-xl'>Next Page</button>
        )}
        </div>
    );
};

export default ProjectPage;
