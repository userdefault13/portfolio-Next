// ExperienceCard.tsx

import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  descriptions: string[]; // Change to an array of strings
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  dates,
  descriptions, // Update the prop name
}) => {
  return (
    <div className="experience-card p-5 m-3 mb-16 rounded-lg">
      <h4 className="text-blue-300 text-2xl font-semibold">{title}</h4>
      <p className="text-blue-500">{company}</p>
      <p className="text-blue-700">{dates}</p>
      <ul className="list-disc list-inside">
        {descriptions.map((desc, index) => (
          <li className="w-full" key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
