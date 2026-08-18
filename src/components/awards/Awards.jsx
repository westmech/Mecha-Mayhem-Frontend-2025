"use client";

// "Previous Champions" page (/awards). Fetches winners from the backend
// (GET /awards/:year), caches each year in state, then filters client-side
// (award dropdown, HS/MS division, team search). To add a season, append it
// to YEARS below — division buttons appear automatically if the backend rows
// carry a `division` field (2025+ merged HS/MS events).
import React, { useEffect, useMemo, useState } from "react";
import Trophy23 from "./trophies/Trophy23";
import Trophy24 from "./trophies/Trophy24";
import Display from "./Display";
import axios from "axios";

const YEARS = ["2027", "2026", "2025", "2024", "2023"];
// Land on the most recent year that already has results (2027 is empty
// until the event runs — bump this after each event).
const DEFAULT_YEAR = "2026";

// 3D trophy models only exist for some years
const TROPHY_MAP = {
    2023: Trophy23,
    2024: Trophy24,
};

const YearButtons = ({ currentYear, setCurrentYear }) => (
    <div className="z-30 flex w-fit space-x-4 p-2 lg:p-4 bg-red-600 -skew-x-12 mx-auto text-black font-lexend mt-4">
        {YEARS.map((year) => (
            <button
                key={year}
                onClick={() => setCurrentYear(year)}
                className="border border-black px-2 py-1 lg:px-3 lg:py-2 text-xl hover:bg-black hover:text-white transition-all"
                style={
                    currentYear === year
                        ? { backgroundColor: "black", color: "white" }
                        : {}
                }
            >
                <p className="skew-x-12">{year}</p>
            </button>
        ))}
    </div>
);

const FilterBar = ({
    awardTitles,
    awardFilter,
    setAwardFilter,
    divisions,
    divisionFilter,
    setDivisionFilter,
    teamSearch,
    setTeamSearch,
}) => (
    <div className="z-30 flex flex-wrap items-center justify-center gap-3 mt-6 font-lexend">
        <select
            value={awardFilter}
            onChange={(e) => setAwardFilter(e.target.value)}
            className="bg-black text-white border border-white/60 rounded-sm px-3 py-2 text-lg"
        >
            <option value="All">All Awards</option>
            {awardTitles.map((title) => (
                <option key={title} value={title}>
                    {title}
                </option>
            ))}
        </select>

        {divisions.length > 1 && (
            <div className="flex">
                {["All", ...divisions].map((div) => (
                    <button
                        key={div}
                        onClick={() => setDivisionFilter(div)}
                        className="border border-white/60 px-3 py-2 text-lg text-white hover:bg-[#E31F2B] hover:text-black transition-all first:rounded-l-sm last:rounded-r-sm"
                        style={
                            divisionFilter === div
                                ? { backgroundColor: "#E31F2B", color: "black" }
                                : {}
                        }
                    >
                        {div}
                    </button>
                ))}
            </div>
        )}

        <input
            type="text"
            value={teamSearch}
            onChange={(e) => setTeamSearch(e.target.value)}
            placeholder="Search team number or name"
            className="bg-black text-white border border-white/60 rounded-sm px-3 py-2 text-lg w-64 placeholder:text-[#7c7c7c]"
        />
    </div>
);

const Awards = () => {
    const [awardsByYear, setAwardsByYear] = useState({});
    const [currentYear, setCurrentYear] = useState(DEFAULT_YEAR);
    const [loading, setLoading] = useState(false);

    const [awardFilter, setAwardFilter] = useState("All");
    const [divisionFilter, setDivisionFilter] = useState("All");
    const [teamSearch, setTeamSearch] = useState("");

    useEffect(() => {
        if (awardsByYear[currentYear]) return;

        const fetchAwards = async (year) => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/awards/${year}`
                );
                setAwardsByYear((prev) => ({ ...prev, [year]: response.data }));
            } catch (error) {
                console.error(`Error fetching awards for ${year}:`, error);
            } finally {
                setLoading(false);
            }
        };

        fetchAwards(currentYear);
    }, [currentYear, awardsByYear]);

    // Reset filters when switching years so a stale award title can't hide everything
    const selectYear = (year) => {
        setCurrentYear(year);
        setAwardFilter("All");
        setDivisionFilter("All");
    };

    const yearData = awardsByYear[currentYear] ?? [];
    // Division buttons come from the data itself (HS/MS since 2025, IQ in 2027)
    const divisions = [
        ...new Set(yearData.map((row) => row.division).filter(Boolean)),
    ];
    const hasDivisions = divisions.length > 0;
    const awardTitles = useMemo(
        () => [...new Set(yearData.map((row) => row.award))],
        [yearData]
    );

    const filteredData = yearData.filter((row) => {
        if (awardFilter !== "All" && row.award !== awardFilter) return false;
        if (
            hasDivisions &&
            divisionFilter !== "All" &&
            row.division !== divisionFilter
        )
            return false;
        if (teamSearch) {
            const query = teamSearch.toLowerCase();
            const matches =
                String(row.team ?? "").toLowerCase().includes(query) ||
                String(row.name ?? "").toLowerCase().includes(query);
            if (!matches) return false;
        }
        return true;
    });

    const isFiltered =
        awardFilter !== "All" || divisionFilter !== "All" || teamSearch !== "";
    const Trophy = TROPHY_MAP[currentYear];

    return (
        <section className="relative w-screen bg-transparent mt-[64px] flex flex-col items-center pb-24">
            <h1 className="font-saira lg:text-7xl text-5xl text-center pt-10">
                PREVIOUS CHAMPIONS
            </h1>
            <p className="font-lexend lg:text-2xl text-xl px-8 py-2 text-center">
                Every champion and award winner from past Mecha Mayhems.
            </p>

            <YearButtons currentYear={currentYear} setCurrentYear={selectYear} />

            <FilterBar
                awardTitles={awardTitles}
                awardFilter={awardFilter}
                setAwardFilter={setAwardFilter}
                divisions={divisions}
                divisionFilter={divisionFilter}
                setDivisionFilter={setDivisionFilter}
                teamSearch={teamSearch}
                setTeamSearch={setTeamSearch}
            />

            <div className="z-10 relative mt-8">
                <Display
                    data={filteredData}
                    loading={loading}
                    filtered={isFiltered}
                />
            </div>

            {Trophy && (
                <div className="sm:flex opacity-70 hidden">
                    <Trophy />
                </div>
            )}
        </section>
    );
};

export default Awards;
