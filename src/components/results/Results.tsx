import { getAllResult } from "@/api/api";
import { cn } from "@/utils/cn";
import { FC, useEffect, useState } from "react";

interface ResultsProps {
    className?: string;
}

export const Results: FC<ResultsProps> = ({ className }) => {
    const [results, setResults] = useState([]);
    console.log({ results });


  const sumOfDigits = (number) => {
    return String(number)
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }

    useEffect(() => {
        (async () => {
            try {
                const results = await getAllResult();
                console.log({ results });
                setResults(results.data);
            } catch (error) {
                console.log(`Error fetching lucky winner: ${error}`);
                toast(error.response?.data?.message || "Unknown error");
            }
        })();
    }, []);
    return (
        <div id="results" className={cn(className)}>
            <section className="next-level-gaming-section pt-120 pb-120" id="next-level-gaming">
                <div className="red-ball bottom-50"></div>
                <div className="container">
                    <div className="row justify-content-between mb-15">
                        <div className="col-lg-6 col-sm-10">
                            <h2 className="display-four tcn-1 cursor-scale growUp title-anim">
                                <span className="d-block">Result</span>Chart
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-6">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-heading ">
                                <div className="row">
                                    <div className="col col-sm-5 col-xs-12">
                                        <h4 className="title">
                                            Result <span>List</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body table-responsive overflow-scroll scrollbar">
                                <table className="table table-hover table-auto">
                                    <thead>
                                        <tr className="active">
                                            <th>Date</th>
                                            <th>Place</th>
                                            <th>Ticket</th>
                                            <th>Total ticket sold</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {results.length > 0 ? (
                                            <>
                                                {results.map((result) => (
                                                    <tr>
                                                        <td>
                                                            {new Date(result.time).toLocaleString(
                                                                "default",
                                                                {
                                                                    month: "long",
                                                                    year: "numeric",
                                                                    day: "2-digit",
                                                                    hour: "numeric",
                                                                    minute: "numeric",
                                                                }
                                                            )}
                                                        </td>
                                                        <td>{result.place}</td>
                                                        <td>
                                                        {`${result.leftTicketNumber} - ${sumOfDigits(result.leftTicketNumber).toString()[sumOfDigits(result.leftTicketNumber).toString().length - 1]}${result?.rightTicketNumber ? `${sumOfDigits(result.leftTicketNumber).toString()[sumOfDigits(result.leftTicketNumber).toString().length - 1]} - ${result.rightTicketNumber}`  : '* - ***'}`}

                                                        </td>
                                                        <td>{result.ticketCount}</td>
                                                    </tr>
                                                ))}
                                            </>
                                        ) : (
                                            <tr>
                                               
                                                <td />
                                                <td
                                                    aria-colspan={5}
                                                    className="bg-white text-orange-500"
                                                >
                                                    No data found
                                                </td>
                                                <td />
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            {/* <div className="panel-footer">
                                <div className="row">
                                    <div className="col-lg-11">
                                        <ul className="pagination pull-right">
                                            <li className="active">
                                                <a href="#">1</a>
                                            </li>
                                            <li>
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">4</a>
                                            </li>
                                            <li>
                                                <a href="#">5</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
