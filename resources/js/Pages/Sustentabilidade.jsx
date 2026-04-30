import { usePage } from "@inertiajs/react";

import { SustainabilityBanner } from "@/Components/SustainabilityBanner";
import { SustainabilityCommitment } from "@/Components/SustainabilityCommitment";
import { SustainabilityPartnerships } from "@/Components/SustainabilityPartnerships";
import { SustainabilityProject } from "@/Components/SustainabilityProject";
import { SustainabilityReuse } from "@/Components/SustainabilityReuse";
import DefaultLayout from "@/Layouts/DefaultLayout";

const Page = () => {
    const { conteudos, todasParcerias } = usePage().props;

    return (
        <DefaultLayout>
            <SustainabilityBanner content={conteudos[0]} />
            <SustainabilityProject content={[conteudos[1], conteudos[2]]} />
            <SustainabilityReuse content={conteudos[3]} />
            <SustainabilityCommitment content={conteudos[4]} />
            <SustainabilityPartnerships
                content={conteudos[5]}
                partnerships={todasParcerias}
            />
        </DefaultLayout>
    );
};

export default Page;
