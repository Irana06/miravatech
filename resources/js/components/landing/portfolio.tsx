import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/landing/motion';
import { Container, SectionHeading } from '@/components/landing/primitives';
import { portfolio } from '@/data/portfolio';
import type { PortfolioItem } from '@/data/portfolio';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

export function Portfolio() {
    if (portfolio.length === 0) {
        return null;
    }

    return (
        <section
            id="portofolio"
            className="scroll-mt-16 py-20 sm:scroll-mt-20 sm:py-28 lg:py-40"
        >
            <Container className="flex flex-col gap-12 sm:gap-20">
                <SectionHeading
                    index={5}
                    label="Portofolio"
                    ja="実績"
                    title="Karya terpilih."
                />

                <ul
                    className={cn(
                        'grid gap-x-10 gap-y-16',
                        portfolio.length % 3 === 0
                            ? 'md:grid-cols-3'
                            : 'md:grid-cols-2',
                    )}
                >
                    {portfolio.map((item, index) => (
                        <li
                            key={item.title}
                            // Every second item sits lower, for an unhurried, staggered rhythm.
                            className={cn(index % 2 === 1 && 'md:mt-24')}
                        >
                            <Reveal delay={index * 120}>
                                <Work item={item} />
                            </Reveal>
                        </li>
                    ))}
                </ul>

                {testimonials.length > 0 && (
                    <div className="border-ink flex flex-col gap-10 border-t pt-10">
                        <h3 className="text-ink-subtle font-mono text-[11px] tracking-[0.14em] uppercase">
                            Kata klien
                        </h3>
                        <ul className="grid gap-12 md:grid-cols-2 md:gap-10">
                            {testimonials.map((item) => (
                                <li
                                    key={item.name}
                                    className="flex flex-col gap-5"
                                >
                                    <blockquote className="text-[20px] leading-[1.5] font-light tracking-[-0.01em] sm:text-[24px]">
                                        “{item.quote}”
                                    </blockquote>
                                    <p className="text-[14px]">
                                        {item.name}
                                        <span className="text-ink-subtle">
                                            {' '}
                                            · {item.role}
                                            {item.project &&
                                                ` · ${item.project}`}
                                        </span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Container>
        </section>
    );
}

function Work({ item }: { item: PortfolioItem }) {
    const image = (
        <div className="bg-paper-deep overflow-hidden">
            <img
                src={item.image}
                alt={`Tampilan ${item.title}`}
                loading="lazy"
                className="ease-out-expo aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.03]"
            />
        </div>
    );

    return (
        <article className="group flex flex-col gap-6">
            {item.url ? (
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                >
                    {image}
                </a>
            ) : (
                image
            )}

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <p className="text-ink-subtle font-mono text-[11px] tracking-[0.1em] uppercase">
                        {item.category}
                    </p>
                    <h3 className="text-[26px] leading-none font-light tracking-[-0.03em] sm:text-[32px]">
                        {item.url ? (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-sweep inline-flex items-center gap-2"
                            >
                                {item.title}
                                <ArrowUpRight
                                    className="ease-out-expo size-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    strokeWidth={1.5}
                                />
                            </a>
                        ) : (
                            item.title
                        )}
                    </h3>
                </div>
                <p className="text-ink-muted max-w-[520px] text-[15px] leading-[1.75]">
                    {item.summary}
                </p>
                {item.highlights && item.highlights.length > 0 && (
                    <ul className="border-line flex flex-col gap-2.5 border-t pt-4 text-[14px] leading-[1.6]">
                        {item.highlights.map((point) => (
                            <li key={point} className="flex gap-3.5">
                                <span
                                    aria-hidden="true"
                                    className="bg-ink-subtle mt-[11px] h-px w-3 shrink-0"
                                />
                                {point}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    );
}
