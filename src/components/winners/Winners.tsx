import { getLuckyWinners } from '@/api/api';
import { cn } from '@/utils/cn';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface WinnersProps {
  className?: string
}

export const Winners: FC<WinnersProps> = ({ className }) => {
    const [winners, setWinners] = useState([])
console.log({winners});

    useEffect(() => {
        (async() => {
            try{
                const winners = await getLuckyWinners()
                console.log({winners});
                setWinners(winners.data)
            } catch (error) {
                console.log(`Error fetching lucky winner: ${error}`);
                toast(error.response?.data?.message || 'Unknown error')
            }
        })()
    }, [])
    
  return (
    <div id='lucky-winner' className={cn(className)}>
     <section className="top-player-section" id="top-player">
        <div className="sword-area">
            <img className="w-100" src="assets/img/sword.png" alt="sword" />
        </div>
        <div className="red-ball end-0"></div>
        <div className="container">
            <div className="row justify-content-between mb-15">
                <div className="col-sm-6">
                    <h2 className="display-four tcn-1 cursor-scale growUp title-anim">Lucky Winner</h2>
                </div>
                <div className="col-sm-6 d-none d-sm-block">
                    <div className="d-flex justify-content-end align-items-center gap-6">
                        <div className="swiper-btn top-player-prev box-style">
                            <i className="ti ti-chevron-left fs-xl"></i>
                        </div>
                        <div className="swiper-btn top-player-next box-style">
                            <i className="ti ti-chevron-right fs-xl"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="swiper swiper-top-player">
                        <div className="swiper-wrapper my-1">
                            {winners.map((winner) => (

                            <div className="swiper-slide">
                                <div className="player-card d-grid gap-6 p-6 card-tilt" data-tilt>
                                    <div className="player-info-area d-between w-100">
                                        <div className="player-info d-flex align-items-center gap-4">
                                            <div className="player-img position-relative">
                                                <img className="w-100 rounded-circle" src="assets/img/top-player1.png"
                                                    alt="player"/>
                                               </div>
                                            <div>
                                                <h5 className="player-name tcn-1 mb-1 title-anim">{winner.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="player-score-details d-flex align-items-center flex-wrap gap-3">
                                        <div className="score">
                                            <h6 className="score-title tcn-6 mb-2">Won</h6>
                                            <span className="tcn-1 fs-sm">
                                            <i className="ti ti-diamond"></i>Rs. {winner.returns}</span>
                                            
                                        </div>
                                        <div className="rank">
                                            <h6 className="rank-title tcn-6 mb-2">Ticket Number</h6>
                                            <span className="tcn-1 fs-sm">
                                                <i className="ti ti-diamond"></i>Ticket: {winner.ticket}</span>
                                        </div>
                                        
                                        <div className="team">
                                            <h6 className="team-title tcn-6 mb-2">{winner.place}</h6>
                                            <span className="tcs-1 fs-sm text-uppercase"> City</span>
                                        </div>
                                        <div className="team">
                                            <h6 className="team-title tcn-6 mb-2">{new Date(winner.time).toLocaleString("default", {
                                                                month: "long",
                                                                day: "2-digit",
                                                            })}</h6>
                                            <span className="tcs-1 fs-sm text-uppercase"> Date</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};