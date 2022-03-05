import React from "react";

const ProjectsComponent = ({projects}) => (projects.map((value, index) =>
    <ProjectComponent
        key={value.name}
        name={value.name}
        link={value.link}
        image={value.logo}
        description={value.description}
    />
));

const ProjectComponent = ({name, image, description, link}) => (
    <div className='w-96 h-96 text-white-primary rounded-sm bg-secondary-faded flex flex-col m-4 shadow transform transition-all hover:scale-110 hover:cursor-pointer'>
        <div className='w-full h-40 rounded-tl-sm rounded-tr-sm w-full bg-cover bg-center bg-no-repeat bg-primary border-white-secondary border-b-4' style={{backgroundImage: `url(${image})`}} />

        <div className='w-full h-56 p-4 rounded-bl-sm rounded-br-sm'>
            <span className='text-xl font-bold transition-colors duration-300 hover:text-link-hover'>{name}</span>

            <p>{description}</p>
        </div>
    </div>
);

export default ProjectsComponent;