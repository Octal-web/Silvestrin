import { usePage } from '@inertiajs/react';

import DefaultLayout from '@/Layouts/DefaultLayout';

import { TransportBanner } from '@/Components/TransportBanner';
import { TransportCertifications } from '@/Components/TransportCertifications';
import { TransportStrategy } from '@/Components/TransportStrategy';
import { TransportSteps } from '@/Components/TransportSteps';
import { TransportSlides } from '@/Components/TransportSlides';
import { TransportWorld } from '@/Components/TransportWorld';
import { TransportExpansion } from '@/Components/TransportExpansion';
import { TransportRoutes } from '@/Components/TransportRoutes';
import { TransportFeatures } from '@/Components/TransportFeatures';
import { HomeContact } from '@/Components/HomeContact';

const Page = () => {
    const { certificacoes, imagensGaleria, conteudos } = usePage().props;

    return (
        <DefaultLayout>
            <TransportBanner content={conteudos[0]} />
            
            <TransportCertifications certifications={certificacoes} />
            
            <TransportStrategy content={conteudos[1]} />
            
            <TransportSteps steps={[conteudos[2], conteudos[3], conteudos[4], conteudos[5]]} />

            <TransportSlides content={conteudos[6]} slides={imagensGaleria[conteudos[6].id]} />

            <TransportWorld content={conteudos[7]} />

            <TransportExpansion content={conteudos[8]} />

            <TransportRoutes content={conteudos[9]} />

            <TransportFeatures content={conteudos[10]} />

            <HomeContact isHome={false} content={conteudos[11]} />
        </DefaultLayout>
    );
};

export default Page;
