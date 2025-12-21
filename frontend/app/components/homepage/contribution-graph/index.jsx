"use client";
import dynamic from 'next/dynamic';

const ContributionCalendar = dynamic(() => import('./calendar'), {
    ssr: false,
});

const ContributionGraph = () => {
    return <ContributionCalendar />;
};

export default ContributionGraph;
