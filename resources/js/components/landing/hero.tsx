import { ArrowRight } from 'lucide-react';
import { MiravaMark } from '@/components/landing/brand';
import { MaskLine, Rule } from '@/components/landing/motion';
import {
    buttonOutline,
    buttonPrimary,
    Container,
    WhatsappLink,
} from '@/components/landing/primitives';
import { cn } from '@/lib/utils';
import { CONSULT_MESSAGE } from '@/lib/whatsapp';

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <p
                lang="ja"
                aria-hidden="true"
                className="tategaki text-ink-subtle fade-in absolute top-16 left-5 hidden text-[13px] xl:block 2xl:left-10"
                style={{ '--delay': '900ms' } as React.CSSProperties}
            >
                未来をつくる
            </p>

            <Container className="flex min-h-[min(calc(100svh-4rem),760px)] flex-col justify-between gap-12 pt-12 pb-10 sm:min-h-[min(calc(100svh-5rem),840px)] sm:pt-16 lg:gap-16 lg:pt-20">
                <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
                    <h1 className="font-display text-[44px] leading-[1.02] font-light tracking-[-0.045em] sm:text-[72px] lg:col-span-7 lg:text-[76px] xl:text-[92px]">
                        <MaskLine>Teknologi yang</MaskLine>
                        <MaskLine delay={120}>membawa bisnis</MaskLine>
                        <MaskLine delay={240}>
                            ke masa depan<span className="text-ai">.</span>
                        </MaskLine>
                    </h1>

                    <Sunrise className="lg:col-span-5" />
                </div>

                <div className="flex flex-col gap-6">
                    <Rule delay={600} className="bg-ink" />
                    <div
                        className="fade-in grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10"
                        style={{ '--delay': '800ms' } as React.CSSProperties}
                    >
                        <p className="text-ink-muted max-w-[440px] text-[15px] leading-[1.75] sm:text-base lg:col-span-5">
                            Miravatech membangun website, aplikasi mobile, dan
                            server yang rapi dan mudah dikembangkan. Harga
                            bersahabat untuk bisnis yang baru mulai, dengan
                            standar kerja yang siap untuk skala lebih besar.
                        </p>

                        <dl className="flex flex-col gap-3 text-[13px] lg:col-span-3">
                            <div className="flex gap-4">
                                <dt className="text-ink-subtle w-16 shrink-0">
                                    Untuk
                                </dt>
                                <dd>UMKM, industri, klien internasional</dd>
                            </div>
                            <div className="flex gap-4">
                                <dt className="text-ink-subtle w-16 shrink-0">
                                    Stack
                                </dt>
                                <dd>Laravel, React, Flutter, server</dd>
                            </div>
                        </dl>

                        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row lg:col-span-4 lg:justify-end">
                            <WhatsappLink
                                message={CONSULT_MESSAGE}
                                className={cn(buttonPrimary, 'h-13 px-7')}
                            >
                                Konsultasi gratis
                                <ArrowRight className="size-4" />
                            </WhatsappLink>
                            <a
                                href="/#paket"
                                className={cn(buttonOutline, 'h-13 px-7')}
                            >
                                Lihat paket
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

/**
 * The two peaks rising over a horizon line, like the sun at dawn:
 * 未来, the future, in the name.
 */
function Sunrise({ className }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                'relative mx-auto aspect-[5/4] w-full max-w-[520px] lg:max-w-none',
                className,
            )}
        >
            <div className="absolute inset-x-0 top-0 bottom-[24%] flex items-end justify-center overflow-hidden">
                <MiravaMark className="sunrise text-ink w-[80%]" />
            </div>
            <div className="horizon bg-ink absolute inset-x-0 bottom-[24%] h-px origin-left" />
            <div
                className="fade-in text-ink-subtle absolute inset-x-0 bottom-0 flex h-[24%] items-start justify-between pt-4 text-[12px]"
                style={{ '--delay': '1200ms' } as React.CSSProperties}
            >
                <span lang="ja" className="font-mincho text-ink text-[22px]">
                    未来
                </span>
                <span className="font-mono tracking-[0.08em] uppercase">
                    mirai · masa depan
                </span>
            </div>
        </div>
    );
}
