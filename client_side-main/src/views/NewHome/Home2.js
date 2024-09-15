import './Home2.css'
import Footer from '../Footer/Footer'
import Group from '../NewHome/images/homeImage.jpg'
import contactImage from '../NewHome/images/contact1re.png'

const Home2 = () => {
    return (
        <div className="Home ">

            <div class="relative bg-white h-[90vh] text-white overflow-hidden">
                <div class="absolute inset-0">
                    <img src={Group} alt="Background Image" class="object-cover object-center w-full h-[90vh]" />
                    <div class="absolute inset-0 bg-black opacity-60"></div>
                </div>

                <div class="relative z-10 flex flex-col px-[24px]  mx-auto justify-center items-center h-full text-center text-[#FFA300] drop-shadow-2xl">
                    <h1 class="text-4xl sm:text-7xl font-bold leading-tight mb-4 drop-shadow-2xl">IEEE<br />Computer Society of<br />SLIIT</h1>
                    <p class="text-lg text-gray-300 mb-8 text-center font-bold drop-shadow-2xl">Embrace the opportunity to Join our community and make your mark in <br />Computer Science with the <span>Institute of Electrical and Electronics Engineers</span> (IEEE) <br />Computer Society of <span>Sri Lanka Institute of Information Technology</span> (SLIIT)</p>
                    <a href="#" class="bg-white w-fit text-gray-900 hover:bg-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg drop-shadow-2xl">Join Us</a>
                </div>
            </div>
            {/* <div className="Header">
                <div className="LeftSection">
                    <h1>IEEE Computer Society of SLIIT</h1>
                    <p>Embrace the opportunity to Join our community and make your mark in <br />Computer Science with the <span>Institute of Electrical and Electronics Engineers</span> (IEEE) <br />Computer Society of <span>Sri Lanka Institute of Information Technology</span> (SLIIT)</p>
                    <button>Join Us</button>
                </div>
                <div className="RightSection">
                </div>
            </div> */}
            <div className="grid md:flex gap-10 md:gap-20 my-28 w-4/5  mx-auto justify-center items-center">
                <img src="./images/who-we-are.png" alt="" className=' w-full md:w-2/5 h-fit' />
                <div className="grid w-full md:w-1/2 items-center">
                    <h1 className='text-[#FFA300] md:text-6xl text-4xl font-bold mb-10 text-center md:text-left'>Who are we?</h1>
                    <p className='text-center md:text-left'>We are the IEEE Computer Society at SLIIT, <br />a community passionate about computer science. <br /><br />Our mission is to promote innovation, networking, and knowledge sharing. We are here to give you the opportunity and make a difference as a volunteer in the world of tech.</p>
                </div>
            </div>
            <div class="bg-[#00629B]">
                <div
                    class="grid max-w-screen-xl lg:grid-cols-2 items-center max-lg:justify-center gap-10 h-full sm:p-12 p-8 mx-auto max-sm:p-4"
                >
                    <div class="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
                        <h2 class="text-4xl md:text-6xl font-extrabold text-[#FFA300]">Feedback Time!</h2>
                        <p class="text-sm text-white mt-4 leading-relaxed">
                            No backstage pass needed here, your ideas take center stage. Share away, we're all ears!
                        </p>

                        <form class="mx-auto mt-8 bg-white rounded-2xl p-6 shadow-md space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                class="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                class="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
                            />

                            <textarea
                                placeholder="Your Feedback"
                                rows="6"
                                class="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"
                            ></textarea>
                            <button
                                type="button"
                                class="text-gray-800 bg-[#FFA300] hover:bg-[#FFA300] font-semibold rounded-xl text-sm px-6 py-3 block w-full"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Hide image on mobile */}
                    <div class="z-10 lg:block hidden md:relative">
                        <img src={contactImage} class="w-fit object-contain block mx-auto" />
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
}

export default Home2;