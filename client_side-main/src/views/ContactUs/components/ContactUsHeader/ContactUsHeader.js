import './ContactUsHeader.css'
import contactHero from './images/5124558.png'

const ContactUsHeader = () => {
    return ( 
        < div className=' bg-[#00629B]'>

        <header>
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 md:pt-48">
          {/* Component */}
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="flex flex-col">
              {/* Hero Title */}
              <div className='md:grid flex justify-center'>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-[100pt] md:mb-20">
                Contact
              </h1>
              <h1 className="mb-4 text-4xl text-[#FFA300] font-bold md:text-[90pt] md:mb-20">
                Us
              </h1>
              </div>
              <p className="mb-6 max-w-lg text-sm text-gray-200 sm:text-xl md:mb-10 lg:mb-12 text-center md:text-left" >
              IEEE is the trusted voice for engineering, computing, and technology information around the globe.
              </p>
              {/* Hero Button */}
              
            </div>
            {/* Hero Image */}
            <img
              src={contactHero}
              alt=""
              className="inline-block h-full w-full max-w-2xl"
            />
          </div>
        </div>
      </header>
      </div>
    );
}
 
export default ContactUsHeader;