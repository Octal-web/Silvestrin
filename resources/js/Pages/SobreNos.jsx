import { usePage } from '@inertiajs/react';

import DefaultLayout from '@/Layouts/DefaultLayout';

import { AboutOperation } from '@/Components/AboutOperation';
import { AboutText } from '@/Components/AboutText';

const Page = () => {
    const { tradicaoVideo, conteudos } = usePage().props;

    console.log(conteudos)

    return (
        <DefaultLayout>
            <AboutText content={conteudos[0]} video={tradicaoVideo} />

            <AboutOperation content={[conteudos[7], conteudos[6], conteudos[5]]} />
            
            {/* <AboutESG content={conteudos[1]} />

            <AboutRain content={conteudos[2]} />

            <AboutStation content={conteudos[3]} />

            <AboutWorkWith content={conteudos[4]} /> */}
        </DefaultLayout>
    );
};

export default Page;
