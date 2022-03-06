import React, {useState} from "react";

const ProjectsComponent = ({projects, selectProject}) => (projects.map(value =>
    <ProjectComponent
        key={value.name}
        project={value}
        selectCallback={selectProject}
    />
));

//TODO: Use images from actual project instead of test images
const ImagePreviewComponent = ({project, closeProject}) => {
    const firstImage = project.images[0];
    const [selectedImage, setSelectedImage] = useState(firstImage);

    return (
        <div className='fixed w-screen h-screen z-10 top-0 left-0 bg-popup-faded' onClick={closeProject}>
            <div
                className='relative w-112 h-112 sm:w-200 sm:h-200 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-popup-gradient flex flex-col justify-center items-center shadow bg-dark-primary'
                onClick={event => event.stopPropagation()}
            >
                <div className='w-80 h-80 sm:w-168 sm:h-168 flex justify-center items-center'>
                    <img src={selectedImage} alt='' className='max-w-80 max-h-80 sm:max-w-168 sm:max-h-168 rounded-md' />
                </div>

                <div className='w-full h-20 flex flex-row justify-center items-center mt-6'>
                    {project.images.map(image =>
                        <img key={image} src={image} alt='' className='max-w-16 max-h-16 rounded-sm mx-2 outline outline-white-secondary transition-all hover:cursor-pointer hover:scale-105' onClick={() => setSelectedImage(image)} />
                    )}
                </div>
            </div>
        </div>
    );
};

const ProjectComponent = ({project, selectCallback}) => (
    <div className='w-96 h-96 text-white-primary rounded-sm bg-secondary-faded flex flex-col m-4 shadow transform transition-all hover:scale-110 hover:cursor-pointer' onClick={() => selectCallback(project)}>
        <div className='w-full h-40 rounded-tl-sm rounded-tr-sm w-full bg-white-primary bg-opacity-40 bg-contain bg-center bg-no-repeat bg-primary border-white-secondary border-b-4' style={{backgroundImage: `url(${project.logo})`}} />

        <div className='w-full h-56 p-4 rounded-bl-sm rounded-br-sm'>
            <span className='text-xl font-bold transition-colors duration-300 hover:text-link-hover'>{project.name}</span>

            <p>{project.description}</p>
        </div>
    </div>
);

export {ProjectsComponent, ImagePreviewComponent};