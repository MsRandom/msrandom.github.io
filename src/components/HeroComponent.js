import DATA from "../data/SiteData";

const HeroComponent = () => (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <div className='rounded-xl w-11/12 h-11/12 p-4 shadow-2xl flex flex-col justify-center items-center bg-primary-faded'>
            <img
                className='w-36 h-36 rounded-2xl'
                src='/assets/images/logo512.png'
                alt='ash-logo'
            />

            <h1 className='text-white-primary text-4xl font-bold'>{DATA.name}</h1>
            <h1 className='text-white-secondary italic underline-offset-4 underline text-2xl'>{DATA.intro}</h1>

        </div>
    </div>
);

export default HeroComponent;