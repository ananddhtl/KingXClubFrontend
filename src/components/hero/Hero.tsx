import { cn } from '@/utils/cn';
import { FC } from 'react';
// import toast from 'react-hot-toast';

interface HeroProps {
  className?: string
}

export const Hero: FC<HeroProps> = ({ className }) => {

// const notify = () => toast('Here is your toast.');

  return (
    <div className={cn(className)}>
     <section className="hero-section pt-20 pb-120 position-relative">
        <div className="gradient-bg"></div>
        <div className="gradient-bg2"></div>
        <div className="star-area">
            <div className="big-star">
                <img className="w-100" src="assets/img/big-star.png" alt="star" />
            </div>
            <div className="small-star">
                <img className="w-100" src="assets/img/small-star.png" alt="star" />
            </div>
        </div>
        <div className="rotate-award">
            <img className="w-100" src="assets/img/award.png" alt="award" />
        </div>
        <div className="container pt-12 md:pt-36 md:pb-10">
            <div className="row g-6 justify-content-between">
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="hero-content">
                        <ul className="d-flex gap-3 fs-2xl fw-semibold heading-font mb-5 list-icon title-anim">
                            <li>Play</li>
                            <li>Earn</li>
                            <li>Enjoy</li>
                        </ul>
                        <h1 className="hero-title text-2xl md:text-3xl lg:text-5xl xl:text-5xl display-one tcn-1 cursor-scale growUp mb-10">
                            Choose your 
                            <span className="d-block tcp-1">Lucky</span>
                            Number
                        </h1>
                        <a href="https://www.youtube.com/watch?v=G5kzUpWAusI"
                            className="btn-half-border position-relative d-inline-block py-2 px-6 bgp-1 rounded-pill popupvideo mfp-iframe">Play
                            Now</a>
                    </div>
                </div>
                <div className="col-xl-12 col-md-4 col-4 order-md-last order-lg-1">
                    <div className="hero-banner-area">
                        <div className="hero-banner-bg">
                            <img className="w-100" src="assets/img/bg-1.png" alt="banner" />
                        </div>
                        <div className="hero-banner-img">
                            <img className="w-100 hero" src="assets/img/hero.png" alt="banner" />
                        </div>
                    </div>
                </div>
                {/* Last winners */}
                {/* <div className="col-xl-4 col-lg-5 col-md-6 order-md-1 order-lg-last">
                    <div className="hero-content">
                        <div className="card-area py-lg-8 py-6 px-lg-6 px-3 rounded-5 tilt mb-10" data-tilt>
                            <h3 className="tcn-1 dot-icon cursor-scale growDown mb-6 title-anim">
                                Last Winners
                            </h3>
                            <div className="hr-line mb-6"></div>
                            <div className="card-items d-grid gap-5">
                                <div className="card-item d-flex align-items-center gap-4">
                                    <div className="card-img-area rounded-circle overflow-hidden">
                                        <img className="w-100" src="assets/img/avatar1.png" alt="profile" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="card-title fw-semibold tcn-1 mb-1 cursor-scale growDown2 title-anim">
                                            Cristofer Dorwart
                                        </h4>
                                        <p className="card-text tcs-1 fw-medium">+$220</p>
                                    </div>
                                </div>
                                <div className="hr-line"></div>
                                <div className="card-item d-flex align-items-center gap-4">
                                    <div className="card-img-area rounded-circle overflow-hidden">
                                        <img className="w-100" src="assets/img/avatar2.png" alt="profile" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="card-title fw-semibold tcn-1 mb-1 cursor-scale growDown2 title-anim">
                                            Cristofer Dorwart
                                        </h4>
                                        <p className="card-text tcs-1 fw-medium">+$220</p>
                                    </div>
                                </div>
                                <div className="hr-line"></div>
                                <div className="card-item d-flex align-items-center gap-4">
                                    <div className="card-img-area rounded-circle overflow-hidden">
                                        <img className="w-100" src="assets/img/avatar3.png" alt="profile" />
                                    </div>
                                    <div className="card-info">
                                        <h4 className="card-title fw-semibold tcn-1 mb-1 cursor-scale growDown2 title-anim">
                                            Cristofer Dorwart
                                        </h4>
                                        <p className="card-text tcs-1 fw-medium">+$220</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="active-player-list d-grid justify-content-end gap-2">
                            <ul className="player-lists d-flex align-items-center">
                                <li className="rounded-circle overflow-hidden me-n6">
                                    <img src="assets/img/player1.png" alt="player" />
                                </li>
                                <li className="rounded-circle overflow-hidden me-n6">
                                    <img src="assets/img/player2.png" alt="player"/>
                                </li>
                                <li className="rounded-circle overflow-hidden me-n6">
                                    <img src="assets/img/player3.png" alt="player"/>
                                </li>
                                <li className="rounded-circle overflow-hidden me-n6">
                                    <img src="assets/img/player4.png" alt="player"/>
                                </li>
                                <li className="rounded-circle overflow-hidden me-n6 heading-font fs-xl">
                                    99+
                                </li>
                            </ul>
                            <span className="d-block tcn-1 dot-icon cursor-scale growDown2 fs-xl text-end">Active
                                Players</span>
                        </div>
                    </div>
                </div> */}
          </div>
        </div>
        <div className="grid-lines overflow-hidden">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="lines">
                <div className="line-vertical"></div>
                <div className="line-vertical"></div>
                <div className="line-vertical"></div>
                <div className="line-vertical"></div>
                <div className="line-vertical"></div>
                <div className="line-vertical"></div>
                <div className="line-vertical"></div>
                <div className="line-vertical"></div>
                <div className="line-vertical"></div>
                <div className="line-vertical"></div>
            </div>
        </div>
    </section>
    </div>
  );
};
