import { Plus } from 'lucide-react';
import { Container, SectionHeading } from '@/components/landing/primitives';
import { faq } from '@/data/faq';

// Answers that still hold a [PLACEHOLDER] stay hidden until the real policy is filled in.
const answered = faq.filter((item) => !/\[[^\]]+\]/.test(item.answer));

export function Faq() {
    if (answered.length === 0) {
        return null;
    }

    return (
        <section
            id="faq"
            className="scroll-mt-16 pt-0 pb-20 sm:scroll-mt-20 sm:pb-28 lg:pb-40"
        >
            <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
                <SectionHeading
                    index={7}
                    label="FAQ"
                    ja="質問"
                    title="Yang sering ditanyakan."
                    description="Pertanyaan lain? Tanyakan langsung lewat WhatsApp."
                    className="self-start lg:sticky lg:top-28 lg:col-span-5"
                />

                <div className="border-ink border-t lg:col-span-7">
                    {answered.map((item, index) => (
                        <details
                            key={item.question}
                            open={index === 0}
                            className="group border-line border-b"
                        >
                            <summary className="hover:text-ai flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-6 transition-colors duration-300 sm:py-8 [&::-webkit-details-marker]:hidden">
                                <h3 className="text-[17px] leading-[1.4] font-normal tracking-[-0.01em] sm:text-[21px]">
                                    {item.question}
                                </h3>
                                <Plus
                                    className="ease-out-expo size-5 shrink-0 transition-transform duration-500 group-open:rotate-45"
                                    strokeWidth={1.5}
                                />
                            </summary>
                            <p className="text-ink-muted -mt-2 max-w-[640px] pb-7 text-[15px] leading-[1.8] sm:pb-9 sm:text-base">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </Container>
        </section>
    );
}
