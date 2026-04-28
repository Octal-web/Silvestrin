import { usePage } from "@inertiajs/react";

import { CultivationAnalysis } from "@/Components/CultivationAnalysis";
import { CultivationBanner } from "@/Components/CultivationBanner";
import { CultivationExperimental } from "@/Components/CultivationExperimental";
import { CultivationProduction } from "@/Components/CultivationProduction";
import { CultivationTechnical } from "@/Components/CultivationTechnical";
import DefaultLayout from "@/Layouts/DefaultLayout";

const Page = () => {
    const { conteudos, tradicaoVideo } = usePage().props;
    return (
        <DefaultLayout>
            <CultivationBanner content={conteudos[1]} />
            <CultivationProduction content={[conteudos[2], conteudos[3]]} />
            <CultivationTechnical content={conteudos[4]} />
            <CultivationExperimental content={[conteudos[5], conteudos[6]]} />
            <CultivationAnalysis video={tradicaoVideo} content={[conteudos[7], conteudos[0]]} />
        </DefaultLayout>
    );
};

export default Page;
