import '../assest/css/TokenUsage.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [],
  datasets: [
    {
      label: 'percentage',
      data: [17, 12, 9, 32, 18, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function TokenUsage() {
  return (
    <div class="token-usage-container f-row f-rcenter">
        <div className="f-col f-center w50 brr">
            <div  className='token-usage-chart' >
                <Pie data={data} className="token-usage-chart" style={{cursor:"pointer"}}/>
                <div className='mt40 f35 ftb md:text-center lg:text-left'>10,000,000,000 IBIT</div>
                <div className='mt40 f30 md:text-center lg:text-left'>tokens</div>
            </div>
       </div>
       <div className='f-col f-ccenter w50' style={{padding:"3% 10%"}}>
            <div className='token-list-item grid grid-cols-10'><div className='f20 f-dark-blue fbt col-span-2'>17%</div> <div className='token-color-item back-1 ml10 col-span-1'></div><div className='f20 f-dark-blue ml10 col-span-7'>Burned after private sale</div></div>
            <div className='token-list-item grid grid-cols-10'><div className='f20 f-dark-blue fbt col-span-2'>12%</div> <div className='token-color-item back-2 ml10 col-span-1'></div><div className='f20 f-dark-blue ml10 col-span-7'>Initial Liquidity Pool</div></div>
            <div className='token-list-item grid grid-cols-10'><div className='f20 f-dark-blue fbt col-span-2'>9%</div> <div className='token-color-item back-3 ml10 col-span-1'></div><div className='f20 f-dark-blue ml10 col-span-7'>Private Sale</div></div>
            <div className='token-list-item grid grid-cols-10'><div className='f20 f-dark-blue fbt col-span-2'>32%</div> <div className='token-color-item back-4 ml10 col-span-1'></div><div className='f20 f-dark-blue ml10 col-span-7'>CEX Token Listing</div></div>
            <div className='token-list-item grid grid-cols-10'><div className='f20 f-dark-blue fbt col-span-2'>18%</div> <div className='token-color-item back-5 ml10 col-span-1'></div><div className='f20 f-dark-blue ml10 col-span-7'>Reserved LP</div></div>
            <div className='token-list-item grid grid-cols-10'><div className='f20 f-dark-blue fbt col-span-2'>12%</div> <div className='token-color-item back-6 ml10 col-span-1'></div><div className='f20 f-dark-blue ml10 col-span-7'>Marketing&Partnerships</div></div>
       </div>
    </div>
  );
}

export default TokenUsage;