import '../assest/css/Footer.css'
import logo from '../assest/img/Twitter.png'
function Footer() {
  return (
    <div class="footer-container f-row f-center">
        <div className='footer-detail-container f-col'>
            <div className='twitter-info f-row'>
              <div className='f-row f-center pd20'><img src={logo}></img></div>
              <div className='f-col pd20'>
                <div className='f16 f-dark-blue f-al'>20 MARCH 2023</div>
                <div className='f24 ftb f-dark-blue mt10 f-al'>@infinitybit_io</div>
                <div className='f20 f-dark-blue mt10 f-al'>InfinityBit Token (IBIT) v2 smart contract is live! Follow for updates and join the TG at https://t.me/infinitybit_io</div>
              </div>
            </div>
            <div className='touch-info lg :touch-info grid grid-cols-3 gap-8 mt-5'>
                <div className='f-col'>
                  <div className='f24 pd20 f-white ftb f-al'>About InfinityBit.io</div>
                  <div className='f20 f-white f-al'>InfinityBit.io is a completely on-chain
                  CEX built on top of the Ethereum blockchain. It will serve as a transparent on-ramp and exchange forindividuals and firms alike.</div>
                </div>
                <div className='f-col'>
                  <div className='f24 f-white ftb  pd20 f-al'>Useful Links</div>
                  <div className='f-col'>
                    <div className='f20 f-white f-al cursor-pointer'>&nbsp;{">"}&nbsp;<a>What is an On-Chain CEX?</a></div>
                    <div className='f20 f-white f-al cursor-pointer'>&nbsp;{">"}&nbsp;<a>Press</a></div>
                    <div className='f20 f-white f-al cursor-pointer'>&nbsp;{">"}&nbsp;<a>Road Map</a></div>
                    <div className='f20 f-white f-al cursor-pointer'>&nbsp;{">"}&nbsp;<a>About</a></div>
                    <div className='f20 f-white f-al cursor-pointer'>&nbsp;{">"}&nbsp;<a>Whitepaper</a></div>
                    <div className='f20 f-white f-al cursor-pointer'>&nbsp;{">"}&nbsp;<a>Blockchain</a></div>
                  </div>
                </div>
                <div className='f-col'>
                  <div className='f24 pd20 f-white ftb f-al'>Newsletter</div>
                  <div className='f20 f-white f-al'>Don’t miss out on the latest updates! Subscribe now and stay in touch. We won’t send unrelated email.</div>
                  <div className='f-col mt-5'>
                      <input className='email-input' placeholder='Your Email'></input>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;