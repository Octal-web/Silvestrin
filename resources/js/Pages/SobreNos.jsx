import { usePage } from '@inertiajs/react';

import DefaultLayout from '@/Layouts/DefaultLayout';

import { AboutText } from '@/Components/AboutText';
import { AboutESG } from '@/Components/AboutESG';
import { AboutRain } from '@/Components/AboutRain';
import { AboutStation } from '@/Components/AboutStation';
import { AboutWorkWith } from '@/Components/AboutWorkWith';

const Page = () => {
    const { tradicaoVideo, conteudos } = usePage().props;

    return (
        <DefaultLayout>
            <AboutText content={conteudos[0]} video={tradicaoVideo} />
            
            <AboutESG content={conteudos[1]} />

            <AboutRain content={conteudos[2]} />

            <AboutStation content={conteudos[3]} />

            <AboutWorkWith content={conteudos[4]} />
        </DefaultLayout>
    );
};

export default Page;
