import { cn } from '@/utils/cn';
import { FC } from 'react';

interface UserPopupProps {
  className?: string
}

export const UserPopup: FC<UserPopupProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
     <div className="user-account-popup p-4">
        <div className="account-items d-grid gap-1" data-tilt>
            <div className="user-level-area p-3">
                <div className="user-info d-between">
                    <span className="user-name fs-five">David Malan</span>
                    <div className="badge d-flex align-items-center">
                        <i className="ti ti-medal fs-three fs-normal tcp-2"></i>
                        <i className="ti ti-medal fs-three fs-normal tcp-2"></i>
                        <i className="ti ti-medal fs-three fs-normal tcp-2"></i>
                    </div>
                </div>
                <div className="user-level">
                    <span className="level-title tcn-6">Level</span>
                    <div className="level-bar my-1">
                        <div className="level-progress" style={{width: '30px'}}></div>
                    </div>
                </div>
            </div>
            <a href="profile.html" className="account-item">View Profile</a>
            <a href="chat.html" className="account-item">Message</a>
            <button className="bttn account-item">Logout</button>
        </div>
    </div>
    </div>
  );
};
