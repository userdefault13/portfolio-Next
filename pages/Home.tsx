import React, { useState, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import { scrollToSection } from './scrollUtils';
import { SocialIcon } from 'react-social-icons';
import ProjectPage from './ProjectPage';

const HomePage = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClickProjects = () => {
    console.log('button clicked');
    setIsAnimating(true); // Start the animation
    console.log(isAnimating);
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  };

  const handleClickProjectsBack = () => {
    console.log('button clicked');
    setIsAnimating(false); // Start the animation
    console.log(isAnimating);
    // You can add any additional logic here if needed
  };

  useEffect(() => {
    const experienceLink = document.getElementById('experience-link');

    if (experienceLink) {
      experienceLink.addEventListener('click', () => {
        scrollToSection('experience'); // Use the imported function
      });
    }

    const aboutLink = document.getElementById('about-link');

    if (aboutLink) {
      aboutLink.addEventListener('click', () => {
        scrollToSection('about'); // Use the imported function
      });
    }

    const mask = document.querySelector('.mask') as HTMLElement;

    if (!mask) {
      return;
    }

    const handleMouseMove = (pos: MouseEvent) => {
      let x = (pos.clientX / window.innerWidth) * 100;
      let y = (pos.clientY / window.innerHeight) * 100;

      mask.style.setProperty('--mouse-x', x + '%');
      mask.style.setProperty('--mouse-y', y + '%');
    };

    document.addEventListener('pointermove', handleMouseMove);

    return () => {
      document.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  return (
    <div className='mx-0'>
      <div className="container relative m-0 bg">
        {/* Spotlight mask */}
        <div className="mask"></div>

        <div className="flex h-screen pt-10 px-32 w-screen">
          {/* Left Section */}
          <div className={`w-1/2 flex flex-col justify-between p-10 pb-0 pl-0 overflow-y-scroll left-container${isAnimating ? ' slide-out-down' : ''}`}>
            <div className="details">
              <h1 className="text-6xl text-blue-600 font-bold mb-2">userDef@ult</h1>
              <h2 className="text-xl text-blue-400 mb-2">Lead Designer @ Orium Network</h2>
              <p className="text-blue-200">Building web3 games, web2 apps, and UX/UI designer</p>
            </div>

            <div className="nav justify-between">
              <button onClick={() => scrollToSection('about')} className="block mb-2 text-white">About</button>
              <button onClick={() => scrollToSection('experience')} className="block mb-2 text-white">Experience</button>
              <button onClick={handleClickProjects} className="block mb-2 text-white">Projects</button>
              <button className="block mb-2 text-white contact-link">Contact</button>
            </div>

            <div className="socials mb-8">
              <SocialIcon
                url="https://twitter.com/userDefault_0x"
                className="text-blue-600 mx-2"
              />
              <SocialIcon
                url="https://github.com/userdefault13"
                className="text-blue-600 mx-2"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/julius-wong-5151a6211/"
                className="text-blue-600 mx-2"
              />
              <SocialIcon
                url="https://www.behance.net/Userdefault"
                className="text-blue-600 mx-2"
              />
              <SocialIcon
                url="https://discord.gg/nrMdzxhgq5"
                className="text-blue-600 mx-2"
              />
            </div>
          </div>
          {/* Right Section */}
          <div className={`w-1/2 p-10 pr-0 pb-0 overflow-y-scroll right-container${isAnimating ? ' slide-out-up' : ''}`}>
            <div id="about" className='h-full flex flex-col items-start'>
              {/* Content */}
              <div className="">
                <p>In 2011, I decided to go down the road of pursuing what makes me happy. It started with going back to school for architecture and ended up building in the metaverse instead. And on my incredibly winding road of happiness seeking, I have scooped up a plethora of skills and experiences I never would have imagined learning. Today I am blessed to be the lead designer of a promising web3 startup and collaborating with amazing individuals on various projects around the world.</p>
                <br />
                <br />
                <p>My main objective currently is to support Orium Network on its course of becoming a prominent figure in the NFT rental marketplace. My love project is building mini-games for a web3 gaming community. My end goal is to inspire and encourage future entrepreneurs and builders by sharing my experience and collaborating.</p>
                <br />
                <br />
                <p>When I am not at the computer, I am with my family and tending to my garden.</p>
                <div className='grid place-items-center max-h-full p-14' onClick={() => scrollToSection('experience')}>
                  <svg className='svg-container' width="46" height="28" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_530_249748)">
                      <path d="M2.5 2.5L11.3 11.3L20.1 2.5" stroke="#253959" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_530_249748">
                        <rect width="22.7" height="13.8" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            {/* List of work experience cards */}
            <div id="experience" className='min-h-screen pt-14 pb -14'>
              <h3 className='text-center text-4xl pb-10 '>Experience</h3>
              <ExperienceCard
                title="Co-Founder &amp; Product Designer"
                company="Digitally Ghostly Studio"
                dates="2023 - Present"
                descriptions={[
                  "Game design and development",
                  "Leading a team of 5 developers and artists",
                  "Project management",
                  "Community building and marketing",
                ]}
              />
              <ExperienceCard
                title="Lead Designer"
                company="Orium Network"
                dates="2022 - Present"
                descriptions={[
                  "Creating UI/UX designs and prototypes",
                  "Overseeing visual design across web and mobile",
                  "Collaborating with product and engineering teams",
                  "Maintaining Figma design systems and generating company assets",
                ]}
              />
              <ExperienceCard
                title="Freelance Design and Developer"
                company="UserDefault Ind. Contractor"
                dates="2013 - Present"
                descriptions={[
                  "Full-stack web and 8-bit game developer",
                  "UX/UI design for startups and indie studios",
                  "Vector graphic illustrator",
                  "3D CAD drafter and modeler",
                  "3D Printing and product fabrications",
                  "Retail product and packaging designer",
                  // Add more descriptions as needed
                ]}
              />
              <ExperienceCard
                title="Woodworking Artisan/journeyman"
                company="j.Wong Designs"
                dates="2013 - 2022"
                descriptions={[
                  "Custom furniture, home decor, and architectural millwork",
                  "Custom cabinetry and carpentry",
                  "Small residential renovation work",
                  "Product design and prototyping",
                  "Small home framing and construction",
                  // Add more descriptions as needed
                ]}
              />
              <ExperienceCard
                title="Co-Owner / Retail development and management"
                company="EnergyHauslb LLC"
                dates="2018 - 2020"
                descriptions={[
                  "Design, development, buildout, and management of a specialty retail store focused on specialty and artisanal products",
                  "Design in-house branding, packaging, and marketing materials",
                  "Inventory management",
                  "Web and legacy IT",
                  // Add more descriptions as needed
                ]}
              />
              <h3 className='text-blue-500 text-center mb-20'>Traditional 9-5 history upon request</h3>
            </div>
          </div>
          <div id='projects' className={`items-start projects${isAnimating ? ' projects-on' : ''}`}>
            <h1 className='text-center mb-4'>Portfolio</h1>
            <div className="grid grid-cols-1 gap-8 mb-4">
              <ProjectPage />
            </div>
            <button onClick={handleClickProjectsBack} className='bg-blue-500 px-5 py-2 rounded-lg text-white w-fit '>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
