import { usePage } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import { AboutOperation } from "@/Components/AboutOperation";
import { AboutText } from "@/Components/AboutText";

const Page = () => {
    const { tradicaoVideo, conteudos } = usePage().props;

    return (
        <DefaultLayout>
            <AboutText content={conteudos[0]} video={tradicaoVideo} />

            <AboutOperation
                content={[conteudos[7], conteudos[6], conteudos[5]]}
            />
        </DefaultLayout>
    );
};

export default Page;
