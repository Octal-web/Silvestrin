import { usePage } from '@inertiajs/react';

import DefaultLayout from '@/Layouts/DefaultLayout';

import { HomeBrands } from '@/Components/HomeBrands';
import { HomeCertification } from '@/Components/HomeCertification';
import { HomePreFooter } from '@/Components/HomePreFooter';
import { HomeSlides } from '@/Components/HomeSlides';
import { HomeSteps } from '@/Components/HomeSteps';
import { HomeValues } from '@/Components/HomeValues';

const Page = () => {
    const { slides, valores, marcas, tradicaoVideo, conteudos, certificacoes } = usePage().props;

    return (
        <DefaultLayout>
            <HomeSlides slides={slides} />

            <HomeValues content={conteudos[0]} values={valores} />
            
            <HomeBrands brands={marcas} />

            <HomeSteps content={conteudos[1]} steps={[conteudos[2], conteudos[3], conteudos[4], conteudos[5]]} video={tradicaoVideo} />

            <HomeCertification certificacoes={certificacoes[0]}/>

            {/* <HomeTeam content={conteudos[6]} /> */}

            {/* <HomeCompromise content={conteudos[7]} /> */}
            
            {/* <HomeRain content={conteudos[8]} /> */}

            {/* <HomeStation content={conteudos[9]} /> */}
            
            {/* <HomeContact isHome={true} content={conteudos[10]} /> */}

            <HomePreFooter content={conteudos[11]} />
        </DefaultLayout>
    );
};

export default Page;
