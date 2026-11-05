import { Reveal } from '@/components/landing/motion';

const options = [
    {
        kanji: '守',
        title: 'Dirawat Miravatech',
        badge: 'Paling banyak dipilih',
        description:
            'Website atau aplikasi tetap online di server yang saya kelola. Update, backup, dan perbaikan sudah diurus lewat paket Maintenance bulanan, jadi Anda cukup fokus ke bisnis.',
    },
    {
        kanji: '渡',
        title: 'Serah terima source code',
        description:
            'Source code, database, dan akses server diserahkan lengkap dengan panduan singkat. Anda bebas mengelola sendiri atau dengan tim Anda.',
    },
];

/**
 * What happens after a project is done: ongoing care (守, protect) or a full
 * handover (渡, hand over).
 */
export function Aftercare() {
    return (
        <div className="bg-paper-deep grid gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:px-14 lg:py-16">
            <Reveal className="flex flex-col gap-3 lg:col-span-4">
                <h3 className="text-[24px] leading-[1.2] font-light tracking-[-0.025em] sm:text-[30px]">
                    Setelah project selesai, pilih yang paling nyaman.
                </h3>
                <p className="text-ink-muted text-[15px] leading-[1.75]">
                    Dua-duanya tersedia. Bisa juga mulai dengan Maintenance,
                    lalu minta serah terima kapan saja.
                </p>
            </Reveal>

            <ul className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:col-span-8">
                {options.map(({ kanji, title, badge, description }, index) => (
                    <Reveal
                        key={title}
                        delay={index * 100}
                        className="border-ink flex flex-col gap-4 border-t pt-6"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-col gap-1.5">
                                {badge && (
                                    <span className="text-ai font-mono text-[11px] tracking-[0.12em] uppercase">
                                        {badge}
                                    </span>
                                )}
                                <h4 className="text-[19px] font-normal tracking-[-0.01em]">
                                    {title}
                                </h4>
                            </div>
                            <span
                                lang="ja"
                                aria-hidden="true"
                                className="font-mincho text-line-strong text-[36px] leading-none"
                            >
                                {kanji}
                            </span>
                        </div>
                        <p className="text-ink-muted text-[15px] leading-[1.75]">
                            {description}
                        </p>
                    </Reveal>
                ))}
            </ul>
        </div>
    );
}
