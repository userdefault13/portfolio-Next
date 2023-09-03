import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
}) => {
    return (
    <div className="w-fit h-fit rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
            {description}
        </p>
        </div>
    </div>
    )
}

export default ProjectCard;