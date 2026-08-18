import React, { Suspense } from "react";

const Display = ({ data, loading, filtered = false }) => {
    const hasDivision = data.some((row) => row.division);

    return (
        <Suspense>
            <div className="border-2 rounded-xl border-gray-500/50 p-8 backdrop-blur-[10px]">
                {data[0] ? (
                    <table className="lg:w-[60vw] w-[80vw]">
                        <thead>
                            <tr className="text-white font-lexend text-2xl text-center lg:text-left">
                                <th className="pr-8">AWARD</th>
                                {hasDivision && <th className="pr-8">DIV</th>}
                                <th className="pr-8">TEAM</th>
                                <th className="pr-8 hidden lg:table-cell">NAME</th>
                                <th className="pr-8 hidden lg:table-cell">AFFILIATION</th>
                                <th className="pr-8 hidden lg:table-cell">LOCATION</th>
                            </tr>
                        </thead>
                        <tbody className="text-regular text-white text-center lg:text-left">
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td className="pr-4 pt-6">
                                        {row["award"]}
                                    </td>
                                    {hasDivision && (
                                        <td className="pr-4 pt-6">{row["division"]}</td>
                                    )}
                                    <td className="pr-4 pt-6">{row["team"]}</td>
                                    <td className="pr-4 pt-6 hidden lg:table-cell">{row["name"]}</td>
                                    <td className="pr-4 pt-6 hidden lg:table-cell">
                                        {row["affiliation"]}
                                    </td>
                                    <td className="pr-4 pt-6 hidden lg:table-cell">
                                        {row["location"]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h4 className="lg:w-[60vw] w-[80vw] text-white text-center text-xl py-24">
                        {loading
                            ? "Loading results…"
                            : filtered
                              ? "No results match your filters."
                              : "Results coming soon!"}
                    </h4>
                )}
            </div>
        </Suspense>
    );
};

export default Display;
