import '../assest/css/Archivements.css'
import arch1 from "../assest/img/arch1.png"
import arch2 from "../assest/img/arch2.png"
import arch3 from "../assest/img/arch3.png"
import arch4 from "../assest/img/arch4.png"

function Archivements() {
  return (
    <div className="archivements-container f-col f-center">
        <div className='arch-container'>
            <div className='f-col'>
                <div className='f45 f-dark-blue ftb'>InfinityBit Achievements</div>
                <div className='arch-item-list-view mt40 overflow-x-auto'>
                    <div className='arch-item-list grid grid-cols-4'>
                        <div className='arch-item f-col f-rleft f-cleft brr'>
                            <img className="w50" src={arch1}></img>
                            <div className='f45 ftb f-light-blue mt15 f-al'>1358</div>
                            <div className='f20 f-dark-blue mt5 f-al'>Twitter Followers</div>
                        </div>
                        <div className='arch-item f-col f-rleft f-cleft brr'>
                            <img className="w50" src={arch2}></img>
                            <div className='f45 ftb f-light-blue mt15 f-al'>5</div>
                            <div className='f20 f-dark-blue mt5 f-al'>DedicatedTeam-members</div>
                        </div>
                        <div className='arch-item f-col f-rleft f-cleft brr'>
                            <img className="w50" src={arch3}></img>
                            <div className='f45 ftb f-light-blue mt15 f-al'>{">"}20,000</div>
                            <div className='f20 f-dark-blue mt5 f-al'>Lines of code</div>
                        </div>
                        <div className='arch-item f-col f-rleft f-cleft'>
                            <img className="w50" src={arch4}></img>
                            <div className='f45 ftb f-light-blue mt15 f-al'>{">"}28</div>
                            <div className='f20 f-dark-blue mt5 f-al'>Combined Years of Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='officer-container f-col'>
            <div className='f45 f-dark-blue ftb'>InfinityBit Achievements</div>
            <div className='mt40 f-col f-center lg:grid grid-cols-3 gap-8 '>
                <div className='officer-item f-col f-center'>
                    <div className='f-white f27 ftb'>Igor Zaitsev</div>
                    <div className='f-white f18 mt5'>Co-Founder, CEO</div>
                </div>
                <div className='officer-item f-col f-center'>
                    <div className='f-white f27 ftb'>Alyssa McKeown</div>
                    <div className='f-white f18 mt5'>Chief Technology Officer</div>
                </div>
                <div className='officer-item f-col f-center'>
                    <div className='f-white f27 ftb'>sW</div>
                    <div className='f-white f18 mt5'>Chief Marketing Officer</div>
                </div>
             </div>
        </div>
        <div className="contract-container f-row f-center">
            <div className='md:text-xl f-white ftb lg:f27 f-white ftb'>IBIT Contract address (ERC20)   :</div><div className='sm: text-xs md:text-sm f-white ftb lg:text-xl f-white ftb'>0xA3cB87080e68AD54D00573983D935Fa85d168FDE</div>
        </div>
    </div>
  );
}

export default Archivements;