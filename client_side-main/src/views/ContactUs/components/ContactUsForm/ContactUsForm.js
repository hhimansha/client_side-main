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

                        <div class="flex justify-start space-x-4 mt-6 mb-6">
                            <a href="https://bit.ly/3v981e4?r=lp&m=MnceiEGbvCr" class="text-white hover:text-[#FFA300]">
                                <i class="fab fa-facebook-f">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path></svg>
                                </i>
                            </a>

                            <a href="https://bit.ly/41opkUL?r=lp&m=MnceiEGbvCr" class="text-white hover:text-[#FFA300]">
                                <i class="fab fa-twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path></svg>
                                </i>
                            </a>

                            <a href="https://bit.ly/46Xh4MI?r=lp&m=MnceiEGbvCr" class="text-white hover:text-[#FFA300]">
                                <i class="fab fa-instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path></svg>
                                </i>
                            </a>

                            <a href="https://bit.ly/3RLsj6E?r=lp&m=MnceiEGbvCr" class="text-white hover:text-[#FFA300]">
                                <i class="fab fa-threats">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M22.7,14.977c-.121-.058-.243-.113-.367-.167-.216-3.982-2.392-6.262-6.046-6.285-.017,0-.033,0-.05,0-2.185,0-4.003,.933-5.122,2.63l2.009,1.378c.836-1.268,2.147-1.538,3.113-1.538,.011,0,.022,0,.033,0,1.203,.008,2.111,.357,2.698,1.04,.428,.497,.714,1.183,.855,2.049-1.067-.181-2.22-.237-3.453-.166-3.474,.2-5.707,2.226-5.557,5.041,.076,1.428,.788,2.656,2.003,3.459,1.028,.678,2.351,1.01,3.727,.935,1.817-.1,3.242-.793,4.236-2.06,.755-.963,1.233-2.21,1.444-3.781,.866,.523,1.507,1.21,1.862,2.037,.603,1.405,.638,3.714-1.246,5.596-1.651,1.649-3.635,2.363-6.634,2.385-3.326-.025-5.842-1.091-7.478-3.171-1.532-1.947-2.323-4.759-2.353-8.359,.03-3.599,.821-6.412,2.353-8.359,1.636-2.079,4.151-3.146,7.478-3.171,3.35,.025,5.91,1.097,7.608,3.186,.833,1.025,1.461,2.313,1.874,3.815l2.355-.628c-.502-1.849-1.291-3.443-2.365-4.764-2.177-2.679-5.361-4.051-9.464-4.08h-.016c-4.094,.028-7.243,1.406-9.358,4.095-1.882,2.393-2.853,5.722-2.886,9.895v.01s0,.01,0,.01c.033,4.173,1.004,7.503,2.886,9.895,2.115,2.689,5.264,4.067,9.358,4.095h.016c3.64-.025,6.206-.978,8.32-3.09,2.765-2.763,2.682-6.226,1.771-8.352-.654-1.525-1.901-2.763-3.605-3.581Zm-6.285,5.909c-1.522,.086-3.104-.598-3.182-2.061-.058-1.085,.772-2.296,3.276-2.441,.287-.017,.568-.025,.844-.025,.909,0,1.76,.088,2.533,.257-.288,3.602-1.98,4.187-3.471,4.269Z"></path></svg>                                </i>
                            </a>

                            <a href="https://bit.ly/4dJ1mIL?r=lp&m=MnceiEGbvCr" class="text-white hover:text-[#FFA300]">
                                <i class="fab fa-whatsapp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z" fill-rule="evenodd"></path></svg>
                                </i>                            
                            </a>

                            <a href="https://bit.ly/48fjA1K?r=lp&m=MnceiEGbvCr" class="text-white hover:text-[#FFA300] ">
                                <i class="fab fa-linkedin-in">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
                                </i>
                            </a>

                            <a href="https://bit.ly/3v6xchn?r=lp&m=MnceiEGbvCr" class="text-white hover:text-[#FFA300] ">
                                <i class="fab fa-telegram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M16,2c-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14S23.732,2,16,2Zm6.489,9.521c-.211,2.214-1.122,7.586-1.586,10.065-.196,1.049-.583,1.401-.957,1.435-.813,.075-1.43-.537-2.218-1.053-1.232-.808-1.928-1.311-3.124-2.099-1.382-.911-.486-1.412,.302-2.23,.206-.214,3.788-3.472,3.858-3.768,.009-.037,.017-.175-.065-.248-.082-.073-.203-.048-.29-.028-.124,.028-2.092,1.329-5.905,3.903-.559,.384-1.065,.571-1.518,.561-.5-.011-1.461-.283-2.176-.515-.877-.285-1.574-.436-1.513-.92,.032-.252,.379-.51,1.042-.773,4.081-1.778,6.803-2.95,8.164-3.517,3.888-1.617,4.696-1.898,5.222-1.907,.116-.002,.375,.027,.543,.163,.142,.115,.181,.27,.199,.379,.019,.109,.042,.357,.023,.551Z" fill-rule="evenodd"></path></svg>                                </i>
                            </a>

                            <a href="https://bit.ly/3uVMMfT?r=lp&m=MnceiEGbvCr" class="text-white hover:text-[#FFA300] ">
                                <i class="fab fa-youtube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"></path></svg>                                </i>
                            </a>
                        </div>


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