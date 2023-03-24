import logo from '../assest/img/Logo.png';
import '../assest/css/Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container  grid grid-cols-10 f-center">
        <div className='col-span-8 lg:col-span-2'>
          <div className='f-row f-ccenter'>
            <img className="logo" alt="Vue logo" src={logo}/>
            <div className="f32 f-dark-blue ftb ml10"> InfinityBit </div>
          </div>
        </div>
        <div className="navbar-menu-container col-span-5" style={{padding:"0px 10%"}}>
            <div className="navbar-menu  grid grid-cols-4">
                <div className="navbar-menu-item f20 f-dark-blue ftb"> Home </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> News </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> Team </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> About </div>
            </div>
        </div>
        <div className='col-span-2 lg:col-span-3'>
            <button className="w-64 down-white-btn f-white f18 ftb"><div className='pc-text'>Download Whitepaper</div>
            <div className="mobile-text space-y-2">
              <span class="block w-6 h-1 bg-white"></span>
              <span class="block w-6 h-1 bg-white"></span>
              <span class="block w-6 h-1 bg-white"></span>
            </div></button>
        </div>
       
        <div className="mobile-menu-btn d-in-r">
            <button className='down-white-btn'><img src="@/assets/MobileBtn.png"/></button>
            <div className="mobile-menu-container f-col f-center">
                <div className="navbar-menu-item f20 f-dark-blue ftb"> Home </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> News </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> Team </div>
                <div className="navbar-menu-item f20 f-dark-blue ftb"> About </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;