const FooterComponent = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='w-full h-full bg-primary-faded p-4 flex flex-col justify-center items-center border-t-4 border-secondary'>
            <p className='text-lg italic text-white-secondary'>© {`2022 ${year === 2022 ? '' : ' - ' + year}`} Ashley Wright</p>
        </div>
    );
}

export default FooterComponent;