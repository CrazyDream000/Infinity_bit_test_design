import '../assest/css/NextBigCex.css'
import logo from '../assest/img/Logo.png'
function NextBigCex() {
  return (
    <div class="next-bigcex-container bg-cover f-row f-center">
     
        <div class="next-bigcex-detail-caption f-row f-center">
            <div class="bit-logo">
                <img alt="Vue logo" src={logo} />
            </div>
            <div className='f-col next-cex-detail' style={{marginLeft:"185px"}}>   
              <div class="txt f45 f-white ftb f-al" style={{lineHeight: "85px"}}>
                  #NextBigCEX
              </div>
              <div class="txt f20 f-white mt20 f-al" style={{lineHeight: "37px"}}>
                  With the backing of the community, InfinityBit can become a leading cryptocurrency exchange and on-ramp. Together, we can bring transparency to centralized exchanges.
              </div>
            </div>

        </div>
        
  </div>
  );
}

export default NextBigCex;