import { cn } from '@/utils/cn';
import { FC } from 'react';

interface ContactsProps {
  className?: string
}

export const Contacts: FC<ContactsProps> = ({ className }) => {
  return (
    <div id="contactus" className={cn(className)}>
     <div className="call-to-action pt-120 pb-120 bgn-4 overflow-x-hidden" id="cta">
        <div className="container">
            <div className="row justify-content-between g-6">
                <div className="col-lg-6">
                    <span className="display-three tcn-1 cursor-scale growUp mb-8 d-block title-anim">Stay up to
                        date</span>
                    <span className="fs-lg tcn-6">
                        Have questions or feedback? We'd love to hear from you. Reach out to our team or use our
                        contact
                        form.
                    </span>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <form action="#">
                        <div className="single-input mb-6">
                            <input type="email" placeholder="Enter your email"/>
                        </div>
                        <div
                            className="d-flex align-items-md-center align-items-start justify-content-between gap-lg-8 gap-6 flex-md-row flex-column">
                            <div className="d-flex align-items-center gap-lg-4 gap-2">
                                <label className="custom-checkbox">
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <span className="fs-base tcn-6">I agree with <a href="#" className="tcp-1">Privacy
                                        Policy</a>
                                    and <a href="terms-condition.html" className="tcp-1">Terms & Conditions</a>
                                </span>
                            </div>
                            <button type="submit"
                                className="bttn py-sm-4 py-3 px-lg-10 px-sm-8 px-6 bgp-1 tcn-1 rounded-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};
