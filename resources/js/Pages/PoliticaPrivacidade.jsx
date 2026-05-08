import { usePage } from "@inertiajs/react";

import { PolicyText } from "@/Components/PolicyText";
import DefaultLayout from "@/Layouts/DefaultLayout";

const Page = () => {
    const { conteudos } = usePage().props;

    return (
        <DefaultLayout>
            <PolicyText content={conteudos[0]} />
        </DefaultLayout>
    );
};

export default Page;
