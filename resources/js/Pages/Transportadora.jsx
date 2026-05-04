import { usePage } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import { TransportBanner } from "@/Components/TransportBanner";
import { TransportCertification } from "@/Components/TransportCertification";
import { TransportInfra } from "@/Components/TransportInfra";
import { TransportRoutes } from "@/Components/TransportRoutes";
import { TransportSlides } from "@/Components/TransportSlides";
import { TransportTechAndSecurity } from "@/Components/TransportTechAndSecurity";

const Page = () => {
    const { imagensGaleria, conteudos } = usePage().props;

    return (
        <DefaultLayout>
            <TransportBanner content={conteudos[0]} />

            <TransportInfra content={conteudos[8]} />

            <TransportRoutes content={conteudos[9]} />

            <TransportSlides
                content={conteudos[6]}
                slides={imagensGaleria[conteudos[6].id]}
            />

            <TransportTechAndSecurity content={conteudos[7]} />

            <TransportCertification certification={conteudos[12]} />
        </DefaultLayout>
    );
};

export default Page;
