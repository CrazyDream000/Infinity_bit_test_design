import '../assest/css/KeyFeatures.css'
import icon2 from '../assest/img/icon1.png'
import icon3 from '../assest/img/icon2.png'
import icon1 from '../assest/img/icon3.png'

function KeyFeatures() {
  return (
    <div className="key-features-container">
        <div className='f-col'>
            <div className='f-col f-center'>
                <div className='f45 f-dark-blue ftb'>Key features</div>
                <div className='feature-detail f20 f-dark-blue mt40'>
                  Today, several centralized exchanges are operating with no transparency. Although
                  DEX are growing in numbers, there will always be a need for fiat on-ramps. InfinityBit
                  is a CEX that offers the transparency of a DEX.
                </div>
            </div>
            <div className='f-wrap f-center' style={{paddingTop:"50px"}}>
                <div className='key-feature-item'>
                    <div className='key-feature-content'>
                      <div className='key-feature-icon f-col f-center'><img src={icon1}></img></div>
                    </div>
                    <div className='f-col'>
                      <div className='f27 ftb f-al'>Token Ecosystem</div>
                      <div className='f20 f-al'>InfinityBit.io accepts IBIT tokens for 50% reduced trading fees.</div>
                    </div>
                </div>
                <div className='key-feature-item'>
                <div className='key-feature-content'>
                      <div className='key-feature-icon f-col f-center'><img src={icon2}></img></div>
                    </div>
                    <div className='f-col'>
                      <div className='f27 ftb f-al'>Secure</div>
                      <div className='f20 f-al'>Industry standard encryption and security are implemented in the InfinityBit trade execution system.</div>
                    </div>
                </div>
                <div className='key-feature-item'>
                  <div className='key-feature-content'>
                      <div className='key-feature-icon f-col f-center'><img src={icon3}></img></div>
                    </div>
                    <div className='f-col'>
                      <div className='f27 ftb f-al'>Transparent</div>
                      <div className='f20 f-al'>All transfers and trade executions are published to a public permissioned Ethereum-based blockchain.</div>
                    </div>
                </div>
                <div className='key-feature-item'>
                <div className='key-feature-content'>
                      <div className='key-feature-icon f-col f-center'><img src={icon1}></img></div>
                    </div>
                    <div className='f-col'>
                      <div className='f27 ftb f-al'>Certified technology</div>
                      <div className='f20 f-al'>The InfinityBit codebase will have passed multiple third-party security audits before launch.</div>
                    </div>
                </div>
                <div className='key-feature-item'>
                <div className='key-feature-content'>
                      <div className='key-feature-icon f-col f-center'><img src={icon2}></img></div>
                    </div>
                    <div className='f-col'>
                      <div className='f27 ftb f-al'>Broad Distribution</div>
                      <div className='f20 f-al'>InfinityBit is accessible to nearly everyone from individuals to large investment firms.</div>
                    </div>
                </div>
                <div className='key-feature-item'>
                <div className='key-feature-content'>
                      <div className='key-feature-icon f-col f-center'><img src={icon3}></img></div>
                    </div>
                    <div className='f-col'>
                      <div className='f27 ftb f-al'>AI Powered Trading</div>
                      <div className='f20 f-al'>A fully automated AI-powered trading system is being developed for IBIT holders.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default KeyFeatures;