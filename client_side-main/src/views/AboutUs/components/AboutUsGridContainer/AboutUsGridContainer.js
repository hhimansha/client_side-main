import './AboutUsGridContainer.css'
import aboutImage from '../../../NewHome/images/homeImage.jpg'


const AboutUsGridContainer = () => {
    
    return ( 


        <>
        <header>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-10 md:pb-20">
        {/* Component */}
        <div className="flex flex-col gap-8 sm:gap-16 lg:flex-row">
          {/* Hero Image */}
          <img
            src={aboutImage}
            alt=""
            className="inline-block h-full w-full max-w-2xl lg:max-w-xl rounded-3xl"
          />
          {/* Hero Content */}
          <div className="flex flex-col items-start justify-evenly">
       
            <h1 className="mb-4 text-xl font-bold md:text-4xl">
            We are Pioneers in <span>Computer Science and Engineering</span>, Empowering Technological Advancements
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:text-sm md:mb-10 lg:mb-12">
            The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering.Connecting members worldwide, the Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers. Our trusted resources include international conferences, peer-reviewed publications, a robust digital library, globally recognized standards, and continuous learning opportunities.
            </p>
            
          </div>
        </div>
      </div>
    </header>
        
        {/* <div className="hero-container">

            <div className="image-boxes">

                <div className="box-1"></div>
                <div className="box-2"></div>
                <div className="box-3"></div>
                <div className="box-4"></div>

            </div>

            <div className="text">
                <p className="title-text">
                We are Pioneers in <span>Computer Science and Engineering</span>, Empowering Technological Advancements
                </p>
        
                <p className="content-text">
                The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering.Connecting members worldwide, the Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers. Our trusted resources include international conferences, peer-reviewed publications, a robust digital library, globally recognized standards, and continuous learning opportunities.
                </p>
            </div>

        </div> */}
        
        </>
     );
}
 
export default AboutUsGridContainer;