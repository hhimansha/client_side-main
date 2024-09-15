import { useEffect } from 'react';
import './AboutUsCounter.css'

const AboutUsCounter = () => {
        
    const updateCounter = (element , interval , target) => {
        element.innerText = "0";
        let i = 0;
        if (element.innerText == target){
            return;
        } else if (element.innerText != "0"){
            i = +element.innerText
        }
        const counter = setInterval(()=>{
            i = i + 2;
            element.innerText = i;
            
            if (i == target){
                clearInterval(counter);
            }
        } , interval)
    }

    const updateFacebookCounter = (element , interval , target) => {
        element.innerText = "0";
        let i = 0;
        if (element.innerText == target){
            return;
        } else if (element.innerText != "0"){
            i = +element.innerText
        }
        const counter = setInterval(()=>{
            i = i + 10;
            element.innerText = i;
            
            if (i == target){
                clearInterval(counter);
            }
        } , interval)
    }

    useEffect(() => {
        // document.getElementById('count1').innerText = "0";
        // document.getElementById('count2').innerText = "0";
        // document.getElementById('count3').innerText = "0";
        // document.getElementById('count4').innerText = "0";
        // setTimeout(() => {
        //     updateCounter(document.getElementById('count1') , .2 , 1500);
        //     updateCounter(document.getElementById('count2') , 55 , 100);
        //     updateCounter(document.getElementById('count3') , 8 , 650);
        //     updateCounter(document.getElementById('count4') , 50 , 40);
        // }, 1500);
        updateCounter(document.getElementById('count1') , 30 , 240);
        updateCounter(document.getElementById('count2') , 10 , 726);
        updateFacebookCounter(document.getElementById('count3') , 5 , 5500);
        updateCounter(document.getElementById('count4') , 5 , 1420);
        updateCounter(document.getElementById('count9') , 300 , 22);
        updateCounter(document.getElementById('count6') , 50 , 128);
        updateCounter(document.getElementById('count7') , 20 , 318);
        updateCounter(document.getElementById('count8') , 10 , 704);
    })

    return ( 
        <div className="counters m-8 gap-8 max-w-7xl mx-auto md:my-32">

            <div>
                <h3 className='font-semibold'>Youtube Subscribers</h3>
                <p className='font-semibold' id="count1"></p>
            </div>
            <div>
                <h3 className='font-semibold'>Instagram Followers</h3>
                <p className='font-semibold' id="count2"></p>
            </div>
            <div>
                <h3 className='font-semibold'>Facebook Followers</h3>
                <p className='font-semibold' id="count3"></p>
            </div>
            <div>
                <h3 className='font-semibold'>linkedin Followers</h3>
                <p  className='font-semibold' id="count4"></p>
            </div>
            <div>
                <h3 className='font-semibold'>X Followers</h3>
                <p className='font-semibold' id="count9"></p>
            </div>
            <div>
                <h3 className='font-semibold'>Threads Followers</h3>
                <p className='font-semibold' id="count6"></p>
            </div>
            <div>
                <h3>Telegram Followers</h3>
                <p className='font-semibold' id="count7"></p>
            </div>
            <div>
                <h3 className='font-semibold'>WhatsApp Followers</h3>
                <p className='font-semibold' id="count8"></p>
            </div>

        </div>
     );
}
 
export default AboutUsCounter;