import React from "react";

const ProjectsComponent = ({projects}) => (projects.map((value, index) =>
    <ProjectComponent
        key={value.name}
        name={value.name}
        link={value.link}
        image={value.logo}
        description={value.description}
        imageLeft={index % 2 === 0}
    />
));

const ProjectComponent = ({name, image, description, link, imageLeft}) => (
    <div className='w-project-card h-44 bg-secondary-faded rounded-xl p-4 text-white-primary flex flex-row justify-between items-center m-4 shadow'>
        {imageLeft && <img className='w-32 h-32 rounded-sm hover:cursor-pointer' src={image} alt={name + ' image'} />}

        <div className='w-[calc(100%-9rem)] h-32 flex flex-col'>
            <div className='w-full'>
                <a
                    className='text-xl font-bold transition-colors duration-300 hover:text-link-hover'
                    target='_blank'
                    href={link}
                >
                    {name}
                </a>
            </div>

            <div className='w-full'>
                <h1>{description}</h1>
            </div>
        </div>

        {!imageLeft && <img className='w-32 h-32 rounded-sm hover:cursor-pointer' src={image} alt={name + ' image'} />}
    </div>
);

export default ProjectsComponent;