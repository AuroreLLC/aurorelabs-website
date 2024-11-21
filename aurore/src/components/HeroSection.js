const HeroSection = ({Title,Subtitle,Paragraph,Img}) => {
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div>
                    <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">{Title}</h1>
                    <h2 className="font-bold text-xl text-[#7CADF5]">{Subtitle}</h2>
                    <p className="mt-3 text-lg text-white dark:text-neutral-400">{Paragraph}</p>
                    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                        Get started
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </a>
                        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                        Contact sales team
                        </a>
                    </div>
                </div>
                <div className="relative ms-4">
                    <img className="w-full rounded-md" src={Img} alt="Hero Image"/>              
                </div>
            </div>

        </div>)
}
export default HeroSection;