export const PolicyText = ({ content }) => {
    return (
        <>
            <section className="mt-20 xl:mt-30 mb-12 md:mb-20">
                <div className="container max-w-small">
                    <h4 className="text-3xl md:text-4xl 2xl:text-5xl text-center font-bold">{content.titulo}</h4>
                </div>
            </section>

            <section className="mb-20 md:mb-30">
                <div className="container max-w-medium">
                    <div className="text-justify" dangerouslySetInnerHTML={{ __html: content.texto }}>
                    </div>
                </div>
            </section>
        </>
    );
};