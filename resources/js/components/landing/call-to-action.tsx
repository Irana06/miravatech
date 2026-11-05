import { usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/landing/motion';
import {
    buttonBase,
    Container,
    WhatsappLink,
} from '@/components/landing/primitives';
import { cn } from '@/lib/utils';
import { CONSULT_MESSAGE } from '@/lib/whatsapp';

export function CallToAction() {
    const { contact } = usePage().props;

    return (
        <section
            id="kontak"
            className="night-band text-night-text relative scroll-mt-16 overflow-hidden sm:scroll-mt-20"
        >
            <span
                lang="ja"
                aria-hidden="true"
                className="tategaki pointer-events-none absolute top-1/2 right-[4%] hidden -translate-y-1/2 text-[200px] leading-none tracking-[0.05em] text-white/[0.05] lg:block"
            >
                未来
            </span>

            <Container className="relative flex flex-col gap-12 py-24 sm:py-32 lg:py-44">
                <Reveal className="flex flex-col gap-8">
                    <p className="text-night-muted font-mono text-[11px] tracking-[0.14em] uppercase">
                        Mulai project
                    </p>
                    <h2 className="font-display max-w-[900px] text-[40px] leading-[1.05] font-light tracking-[-0.04em] text-balance sm:text-[64px] lg:text-[84px]">
                        Punya ide project? Ceritakan dulu, kita rancang bersama.
                    </h2>
                </Reveal>

                <Reveal
                    delay={150}
                    className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8"
                >
                    <WhatsappLink
                        message={CONSULT_MESSAGE}
                        className={cn(
                            buttonBase,
                            'bg-paper text-ink hover:bg-ai focus-visible:outline-paper h-14 px-8 text-[15px] hover:text-white',
                        )}
                    >
                        Chat via WhatsApp
                        <ArrowRight className="size-4" />
                    </WhatsappLink>
                    {contact.business_hours && (
                        <p className="text-night-muted text-[14px]">
                            {/* A plain number means "replies within N hours". */}
                            {/^\d+$/.test(contact.business_hours)
                                ? `Dibalas dalam ${contact.business_hours} jam.`
                                : `Balasan pada ${contact.business_hours}.`}
                        </p>
                    )}
                </Reveal>
            </Container>
        </section>
    );
}
