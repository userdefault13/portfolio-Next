import React from 'react';
import Image from 'next/image';

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
        <Image
            src={image}
            alt={title}
            layout="fill" // This ensures the image takes up the full container size
            objectFit="cover" // Adjust as needed (cover, contain, etc.)
        />
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