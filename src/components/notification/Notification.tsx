import { cn } from '@/utils/cn';
import { FC } from 'react';

interface NotificationProps {
  className?: string
}

export const Notification: FC<NotificationProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
     <div className="notification-area p-4" data-lenis-prevent>
        <div className="notification-card d-grid gap-4" data-tilt>
            <a href="#">
                <div className="card-item d-flex align-items-center gap-4">
                    <div className="card-img-area">
                        <img className="w-100 rounded-circle" src="assets/img/avatar1.png" alt="profile"/>
                    </div>
                    <div className="card-info">
                        <span className="card-title d-block tcn-1"> Cristofer Dorwart</span>
                        <span className="card-text d-block tcn-1 fs-sm">Winners The Last Game</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="card-item d-flex align-items-center gap-4">
                    <div className="card-img-area">
                        <img className="w-100 rounded-circle" src="assets/img/avatar2.png" alt="profile"/>
                    </div>
                    <div className="card-info">
                        <span className="card-title d-block tcn-1"> Piter Maio </span>
                        <span className="card-text d-block tcn-1 fs-sm">Accept your challenge</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="card-item d-flex align-items-center gap-4">
                    <div className="card-info">
                        <span className="card-title d-block tcn-1"> Copa Punto Gamer </span>
                        <span className="card-text d-block tcn-1 fs-sm">Tournament start</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="card-item d-flex align-items-center gap-4">
                    <div className="card-info">
                        <span className="card-title d-block tcn-1"> Daily Bonus </span>
                        <span className="card-text d-block tcn-1 fs-sm">Tournament start</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="card-item d-flex align-items-center gap-4">
                    <div className="card-img-area">
                        <img className="w-100 rounded-circle" src="assets/img/avatar1.png" alt="profile" />
                    </div>
                    <div className="card-info">
                        <span className="card-title d-block tcn-1"> Cristofer Dorwart</span>
                        <span className="card-text d-block tcn-1 fs-sm">Winners The Last Game</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="card-item d-flex align-items-center gap-4">
                    <div className="card-img-area">
                        <img className="w-100 rounded-circle" src="assets/img/avatar2.png" alt="profile" />
                    </div>
                    <div className="card-info">
                        <span className="card-title d-block tcn-1"> Piter Maio </span>
                        <span className="card-text d-block tcn-1 fs-sm">Accept your challenge</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="card-item d-flex align-items-center gap-4">
                    <div className="card-info">
                        <span className="card-title d-block tcn-1"> Copa Punto Gamer </span>
                        <span className="card-text d-block tcn-1 fs-sm">Tournament start</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="card-item d-flex align-items-center gap-4">
                    <div className="card-info">
                        <span className="card-title d-block tcn-1"> Daily Bonus </span>
                        <span className="card-text d-block tcn-1 fs-sm">Tournament start</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </div>
  );
};
