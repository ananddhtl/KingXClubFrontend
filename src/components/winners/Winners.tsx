import { cn } from '@/utils/cn';
import { FC } from 'react';

interface WinnersProps {
  className?: string
}

export const Winners: FC<WinnersProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
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
                            <div className="swiper-slide">
                                <div className="player-card d-grid gap-6 p-6 card-tilt" data-tilt>
                                    <div className="player-info-area d-between w-100">
                                        <div className="player-info d-flex align-items-center gap-4">
                                            <div className="player-img position-relative">
                                                <img className="w-100 rounded-circle" src="assets/img/top-player1.png"
                                                    alt="player"/>
                                                <span
                                                    className="player-status position-absolute end-0 bottom-0 tcn-1 fs-xs d-center">1</span>
                                            </div>
                                            <div>
                                                <h5 className="player-name tcn-1 mb-1 title-anim">Sompal KC</h5>
                                            </div>
                                        </div>
                                        <form action="#">
                                            <button className="follow-btn box-style">
                                                <i className="ti ti-user-plus fs-xl"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="player-score-details d-flex align-items-center flex-wrap gap-3">
                                        <div className="score">
                                            <h6 className="score-title tcn-6 mb-2">Score</h6>
                                            <ul className="d-flex align-items-center gap-1 tcp-2">
                                                <li><i className="ti ti-star-filled"></i></li>
                                                <li><i className="ti ti-star-filled"></i></li>
                                                <li><i className="ti ti-star-filled"></i></li>
                                                <li><i className="ti ti-star-half-filled"></i></li>
                                                <li><i className="ti ti-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="rank">
                                            <h6 className="rank-title tcn-6 mb-2">Rank</h6>
                                            <span className="tcn-1 fs-sm">
                                                <i className="ti ti-diamond"></i>Number: 15</span>
                                        </div>
                                        
                                        <div className="team">
                                            <h6 className="team-title tcn-6 mb-2">Biratnagar</h6>
                                            <span className="tcs-1 fs-sm text-uppercase"> City</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="player-card d-grid gap-6 p-6 card-tilt" data-tilt>
                                    <div className="player-info-area d-between w-100">
                                        <div className="player-info d-flex align-items-center gap-4">
                                            <div className="player-img position-relative">
                                                <img className="w-100 rounded-circle" src="assets/img/top-player2.png" alt="player"/>
                                                <span
                                                    className="player-status position-absolute end-0 bottom-0 tcn-1 fs-xs d-center">2</span>
                                            </div>
                                            <div>
                                                <h5 className="player-name tcn-1 mb-1 title-anim">
                                                    Avisek Chaudhary
                                                </h5>
                                                <span className="tcn-6 fs-sm">Duelist</span>
                                            </div>
                                        </div>
                                        <form action="#">
                                            <button className="follow-btn box-style">
                                                <i className="ti ti-user-plus fs-xl"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="player-score-details d-flex align-items-center flex-wrap gap-3">
                                        <div className="score">
                                            <h6 className="score-title tcn-6 mb-2">Score</h6>
                                            <ul className="d-flex align-items-center gap-1 tcp-2">
                                                <li><i className="ti ti-star-filled"></i></li>
                                                <li><i className="ti ti-star-filled"></i></li>
                                                <li><i className="ti ti-star-filled"></i></li>
                                                <li><i className="ti ti-star-half-filled"></i></li>
                                                <li><i className="ti ti-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="rank">
                                            <h6 className="rank-title tcn-6 mb-2">Rank</h6>
                                            <span className="tcn-1 fs-sm">
                                                <i className="ti ti-diamond"></i> Number: 20</span>
                                        </div>
                                        
                                        <div className="team">
                                            <h6 className="team-title tcn-6 mb-2">POkhara</h6>
                                            <span className="tcs-1 fs-sm text-uppercase"> City</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="player-card d-grid gap-6 p-6 card-tilt" data-tilt>
                                    <div className="player-info-area d-between w-100">
                                        <div className="player-info d-flex align-items-center gap-4">
                                            <div className="player-img position-relative">
                                                <img className="w-100 rounded-circle" src="assets/img/top-player3.png" alt="player" />
                                                <span
                                                    className="player-status position-absolute end-0 bottom-0 tcn-1 fs-xs d-center">3</span>
                                            </div>
                                            <div>
                                                <h5 className="player-name tcn-1 mb-1 title-anim">Ramesh Budhathoki</h5>
                                                <span className="tcn-6 fs-sm">Duelist</span>
                                            </div>
                                        </div>
                                        <form action="#">
                                            <button className="follow-btn box-style">
                                                <i className="ti ti-user-plus fs-xl"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="player-score-details d-flex align-items-center flex-wrap gap-3">
                                        <div className="score">
                                            <h6 className="score-title tcn-6 mb-2">Score</h6>
                                            <ul className="d-flex align-items-center gap-1 tcp-2">
                                                <li><i className="ti ti-star-filled"></i></li>
                                                <li><i className="ti ti-star-filled"></i></li>
                                                <li><i className="ti ti-star-filled"></i></li>
                                                <li><i className="ti ti-star-half-filled"></i></li>
                                                <li><i className="ti ti-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="rank">
                                            <h6 className="rank-title tcn-6 mb-2">Rank</h6>
                                            <span className="tcn-1 fs-sm">
                                                <i className="ti ti-diamond"></i> Number: 5</span>
                                        </div>
                                       
                                        <div className="team">
                                            <h6 className="team-title tcn-6 mb-2">Kathmandu</h6>
                                            <span className="tcs-1 fs-sm text-uppercase">City</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};
