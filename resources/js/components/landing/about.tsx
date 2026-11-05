import { Reveal, Rule } from '@/components/landing/motion';
import { Container, SectionHeading } from '@/components/landing/primitives';

const roots = [
    { root: 'Mira', ja: '未来', meaning: 'dari mirai, masa depan' },
    { root: 'Vate', ja: '革新', meaning: 'dari innovate, inovasi' },
    { root: 'Tech', ja: '技術', meaning: 'teknologi' },
];

const expertise = [
    { area: 'Web', tools: 'Laravel · React' },
    { area: 'Mobile', tools: 'Flutter' },
    { area: 'Infrastruktur', tools: 'Server · CI/CD' },
];

export function About() {
    return (
        <section
            id="tentang"
            className="scroll-mt-16 py-20 sm:scroll-mt-20 sm:py-28 lg:py-40"
        >
            <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
                <div className="flex flex-col gap-8 lg:col-span-6">
                    <SectionHeading
                        index={6}
                        label="Tentang"
                        ja="紹介"
                        title="Halo, saya Yushika."
                    />
                    <Reveal
                        delay={100}
                        className="text-ink-soft flex max-w-[560px] flex-col gap-5 text-[16px] leading-[1.8] sm:pl-[calc(1.5rem+2rem)] sm:text-[17px] lg:pl-[calc(1.5rem+3rem)]"
                    >
                        <p>
                            Developer fullstack di balik Miravatech. Sehari-hari
                            saya membangun website dengan Laravel dan React,
                            aplikasi mobile dengan Flutter, dan mengurus server
                            sampai semuanya benar-benar online.
                        </p>
                        <p>
                            Nama Miravatech artinya kurang lebih teknologi yang
                            menciptakan inovasi untuk masa depan.
                        </p>
                        <dl className="border-line mt-3 flex flex-wrap gap-x-10 gap-y-4 border-t pt-6">
                            {expertise.map((item) => (
                                <div
                                    key={item.area}
                                    className="flex flex-col gap-1"
                                >
                                    <dt className="text-ink-subtle font-mono text-[11px] tracking-[0.1em] uppercase">
                                        {item.area}
                                    </dt>
                                    <dd className="text-[15px]">
                                        {item.tools}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                </div>

                {/* The name, root by root. */}
                <ul className="border-ink flex flex-col self-end border-t lg:col-span-5 lg:col-start-8">
                    {roots.map((item, index) => (
                        <li key={item.root}>
                            <Reveal
                                delay={index * 120}
                                className="flex items-end justify-between gap-6 py-7 sm:py-9"
                            >
                                <div className="flex flex-col gap-2">
                                    <p className="text-[44px] leading-none font-light tracking-[-0.04em] sm:text-[60px]">
                                        {item.root}
                                    </p>
                                    <p className="text-ink-subtle text-[14px]">
                                        {item.meaning}
                                    </p>
                                </div>
                                <p
                                    lang="ja"
                                    className="font-mincho text-ink-soft text-[28px] leading-none tracking-[0.15em] sm:text-[36px]"
                                >
                                    {item.ja}
                                </p>
                            </Reveal>
                            <Rule delay={index * 120} />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
