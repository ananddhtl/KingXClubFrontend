import { cn } from '@/utils/cn';
import { FC } from 'react';

interface ResultsProps {
  className?: string
}

export const Results: FC<ResultsProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
     <section className="next-level-gaming-section pt-120 pb-120" id="next-level-gaming">
        <div className="red-ball bottom-50"></div>
        <div className="container">
            <div className="row justify-content-between mb-15">
                <div className="col-lg-6 col-sm-10">
                    <h2 className="display-four tcn-1 cursor-scale growUp title-anim"><span className="d-block">Result
                        </span>Chart</h2>
                </div>
            </div>
            </div>
            <div className="row g-6">


        <div className="col-md-12">
            <div className="panel">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col col-sm-5 col-xs-12">
                            <h4 className="title">Result <span>List</span></h4>
                        </div>
                    </div>
                </div>
                <div className="panel-body table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr className="active">
                                <th>Date</th>
                                <th>Kathmandu</th>
                                <th>Pokhara</th>
                                <th>Biratnagar</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>April 15, 2024</td>
                                <td>54</td>
                                <td>31</td>
                                <td><span className="label label-success">845</span></td>
                                
                            </tr>
                            <tr>
                                <td>April 15, 2024</td>
                                <td>4</td>
                                <td>22</td>
                                <td>85</td>
                            </tr>
                            <tr>
                                <td>April 15, 2024</td>
                                <td>54</td>
                                <td>26</td>
                                <td>55</td>
                            </tr>
                            <tr>
                                <td>April 15, 2024</td>
                                <td>59</td>
                                <td>26</td>
                                <td>92</td>
                            </tr>
                            <tr>
                                <td>April 15, 2024</td>
                                <td>64</td>
                                <td>20</td>
                                <td>32</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="panel-footer">
                    <div className="row">
                        <div className="col-lg-11">
                            <ul className="pagination pull-right">
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                            </ul>
                        </div>
                            <div className="col-lg-1">
                            <ul className="pagination visible-xs pull-right">
                                <li><a href="#"> 1 </a></li>
                                <li><a href="#"> 2 </a></li>
                            </ul>
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
