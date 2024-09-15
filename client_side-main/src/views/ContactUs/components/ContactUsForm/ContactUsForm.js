import "./ContactUsForm.css"
import contactImage from './images/contact.png'

const ContactUsForm = () => {
    return (
        <>
            <div class="bg-[#00629B]">
                <div
                    class="grid max-w-screen-xl lg:grid-cols-2 items-center max-lg:justify-center  h-full sm:py-12 p-8 mx-auto max-sm:p-4 "
                >
                    <div class=" max-lg:mx-auto max-lg:text-center max-lg:mb-6">
                        <h2 class="text-4xl md:text-6xl font-extrabold text-[#FFA300]">Lets Talk!</h2>
                        <p class="text-sm text-white mt-4 leading-relaxed">
                        Share your thoughts and help others discover the best or simply say Hi!
                        </p>

                        <form class="mx-auto mt-8 bg-white rounded-2xl p-6 shadow-md space-y-4  shadow-2xl">
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
            {/* <div className="ContactUsForm">
                <div className="LeftSection">
                    <h1>Lets Talk!</h1>
                    <p>Share your thoughts and help others discover the best or simply say Hi!</p>
                </div>
                <div className="RightSection">
                    <form>
                        <div>
                            <label htmlFor="Username">Name</label>
                            <input type="text" name="Username" id="" />
                        </div>
                        <div>
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="Email" id="" />
                        </div>
                        <div>
                            <label htmlFor="Feedback">Send Your Message</label>
                            <textarea name="Feedback" id="" rows="10"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div> */}
        </>

    );
}

export default ContactUsForm;