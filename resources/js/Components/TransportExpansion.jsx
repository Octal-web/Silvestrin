import { Reveal } from './Reveal';
import LetterReveal from './LetterReveal';

export const TransportExpansion = ({ content }) => {
    return (
        <section className="relative pb-16 md:py-16 xl:py-24">
            <div className="relative container max-w-large">
                <div className="grid grid-cols-1 md:grid-cols-2">                    
                    <Reveal direction="right">
                        <div className="-mr-10 -mt-36 -mb-40">
                            <svg className="absolute w-0 h-auto" viewBox="0 0 803.3 877.9" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="custom-shape-2" clipPathUnits="objectBoundingBox">
                                        <path
                                            d="M849.1,573.9c-5.5-59.2-37.9-106.5-84.9-133.8c-142.1-82.3-146.9-134.9-110.4-260.7c6.1-19.5,8.4-39.7,6.5-59.4c-7.7-83.7-87-135.6-176.9-115.8c-46,10.2-87.5,37.4-115.5,75.6c-41.4,56.6-46.1,67.7-155.9,110.9C82.2,239.9-8.4,368.5,3.5,496.7c11.8,127.5,120.7,211.6,253.1,203.9c126.2-5.2,141.6,5,203.2,69.9c43.6,47.6,114.5,69.9,191.3,53C770.8,797.2,859.4,685.4,849.1,573.9z"
                                            transform="scale(0.00111, 0.00111)"
                                        >
                                            <animate
                                                attributeName="d"
                                                dur="12s"
                                                repeatCount="indefinite"
                                                values="
                                                M849.1,573.9c-5.5-59.2-37.9-106.5-84.9-133.8c-142.1-82.3-146.9-134.9-110.4-260.7c6.1-19.5,8.4-39.7,6.5-59.4c-7.7-83.7-87-135.6-176.9-115.8c-46,10.2-87.5,37.4-115.5,75.6c-41.4,56.6-46.1,67.7-155.9,110.9C82.2,239.9-8.4,368.5,3.5,496.7c11.8,127.5,120.7,211.6,253.1,203.9c126.2-5.2,141.6,5,203.2,69.9c43.6,47.6,114.5,69.9,191.3,53C770.8,797.2,859.4,685.4,849.1,573.9z;
                                                M850.3,557.5c-9.5-54.9-41.4-101-84.4-129.9c-129.8-87.2-138.2-135.9-117-248.5c3.7-17.4,4-35.7,0.8-54C636,47.6,535.5-3.4,465.6,6.9c-35.6,5.2-68.8,26.7-86,55.1c-25.5,42.1-60.5,78.4-170.3,121.5C79.6,232.7-10.9,361.3,1.1,489.6c11.7,127.5,150,216.8,259.8,217c104.7,1.9,118.2,11.6,172.7,70.8c38.7,43.4,138.2,55.9,215,38.9C768.1,789.9,868.3,660.7,850.3,557.5z;
                                                M849.1,573.9c-5.5-59.2-37.9-106.5-84.9-133.8c-142.1-82.3-146.9-134.9-110.4-260.7c6.1-19.5,8.4-39.7,6.5-59.4c-7.7-83.7-87-135.6-176.9-115.8c-46,10.2-87.5,37.4-115.5,75.6c-41.4,56.6-46.1,67.7-155.9,110.9C82.2,239.9-8.4,368.5,3.5,496.7c11.8,127.5,120.7,211.6,253.1,203.9c126.2-5.2,141.6,5,203.2,69.9c43.6,47.6,114.5,69.9,191.3,53C770.8,797.2,859.4,685.4,849.1,573.9z"
                                                keySplines="0 0 0.58 1;0 0 0.58 1"
                                            />
                                        </path>
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className="w-full" style={{ clipPath: 'url(#custom-shape-2)' }}>
                                <img src={content.imagem} className="w-full" alt="" />
                            </div>
                        </div>
                    </Reveal>
                    
                    <Reveal direction="left" className="">
                        <div className="ml-auto max-w-[772px] mt-8">
                            <LetterReveal className="font-secondary text-primary text-5xl font-black leading-[1.2] uppercase max-w-[32rem]" text={content.titulo} element="h2" />
                            <div className="max-w-xl text-neutral-600 text-balance my-8" dangerouslySetInnerHTML={{ __html: content.texto }} /> 
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
