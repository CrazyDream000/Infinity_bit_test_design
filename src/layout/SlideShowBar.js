import '../assest/css/SlideShowBar.css'
import block_img from '../assest/img/Blockchain.png'
function SlideShowBar() {
  return (
    <div class="company-show-container bg-cover grid grid-cols-2">
        <div class="show-caption f-col col-span-2 lg: justify-start show-caption f-col">
            <div class="f-white ftb md:text-7xl text-center lg:text-left text-5xl" style={{lineHeight: "85px"}}>
              Transparent <br/>On-chain CEX
            </div>
            <div class="f22 f-white mt40 md:text-center lg:text-left" style={{lineHeight: "37px"}}>
              InfinityBit will be a permissioned on-chain CEX <br/>
              which will accept the IBIT token for reduced trading<br/>
              fees and access to AI-powered trading.
            </div>
        </div>
        <div className="big-logo flex">
            <img alt="Vue logo" className='self-center' src={block_img} />
        </div>
  </div>
  );
}

export default SlideShowBar;