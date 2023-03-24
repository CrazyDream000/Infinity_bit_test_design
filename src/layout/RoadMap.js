import '../assest/css/RoadMap.css'
import icon2 from '../assest/img/icon1.png'
import icon3 from '../assest/img/icon2.png'
import icon1 from '../assest/img/icon3.png'
import RoadmapSection from '../component/RoadMapSection'
function RoadMap() {
  return (
    <div className="roadmap-container">
        <div className='f-col'>
            <div className='f-col f-center'>
                <div className='f45 f-dark-blue ftb'>Roadmap for 2023</div>
            </div>
            <RoadmapSection/>
        </div>
    </div>
  );
}

export default RoadMap;