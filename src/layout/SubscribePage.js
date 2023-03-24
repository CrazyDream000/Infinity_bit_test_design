import '../assest/css/SubscribePage.css'
import logo from '../assest/img/Logo.png'
function SubscribePage() {
  return (
    <div class="subscribe-container bg-cover f-row f-center">
        <div className="f-col subscribe-body">
            <div className="ftb f-white text-2xl lg:text-5xl">Stay updated on the latest <br/>
news of the project</div>
            <div className='subscribe-detail-container mt40'>
                <input className='subscribe-input text-sm lg:text-lg' placeholder='Your Email'></input>
                <button className='subscribe-btn ftb f-white md:w-15'>
                    <div className='subscribe-text f-white text-lg hidden lg:block'>Subscribe</div>
                    <div className='subscribe-icon block lg:hidden'><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></div>
                </button>
            </div>
        </div>
    </div>
  );
}

export default SubscribePage;