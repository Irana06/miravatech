import { Reveal, Rule } from '@/components/landing/motion';
import { Container, SectionHeading } from '@/components/landing/primitives';

// One kanji per service: 網 net, 携 carry (mobile), 運 run, 復 restore, 繋 connect.
const services = [
    {
        kanji: '網',
        title: 'Pembuatan Website',
        description:
            'Company profile, toko online, hingga sistem dan dashboard custom. Dibangun dengan Laravel & React supaya cepat, aman, dan mudah dikembangkan.',
        tags: ['Laravel', 'React'],
    },
    {
        kanji: '携',
        title: 'Aplikasi Mobile',
        description:
            'Aplikasi Android & iOS dari satu kode dengan Flutter. Cocok untuk aplikasi kasir, booking, member, atau pendamping website bisnis Anda.',
        tags: ['Flutter', 'Android & iOS'],
    },
    {
        kanji: '運',
        title: 'Deploy & Maintenance',
        description:
            'Setup server, domain, SSL, dan deploy otomatis (CI/CD). Setelah online, website dan aplikasi Anda tetap dipantau, di-backup, dan diperbarui.',
        tags: ['VPS & Docker', 'CI/CD'],
    },
    {
        kanji: '復',
        title: 'Pemulihan Website Kena Hack',
        description:
            'Malware, backdoor, atau redirect aneh? Website dibersihkan, celahnya ditutup, lalu dipulihkan supaya kembali aman dan bisa diakses pengunjung.',
        tags: ['Hapus malware', 'Tutup celah'],
    },
    {
        kanji: '繋',
        title: 'Integrasi Sistem',
        description:
            'Hubungkan website dengan payment gateway, API pihak ketiga, atau sistem yang sudah Anda pakai, supaya pembayaran dan data berjalan otomatis.',
        tags: ['Payment gateway', 'REST API'],
    },
];

export function Services() {
    return (
        <section
            id="layanan"
            className="scroll-mt-16 py-20 sm:scroll-mt-20 sm:py-28 lg:py-40"
        >
            <Container className="flex flex-col gap-12 sm:gap-20">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
                    <SectionHeading
                        index={1}
                        label="Layanan"
                        ja="サービス"
                        title="Satu tempat untuk web, aplikasi, dan servernya."
                        className="lg:col-span-8"
                    />
                    <Reveal
                        delay={150}
                        className="text-ink-muted max-w-[380px] text-[15px] leading-[1.75] lg:col-span-4 lg:justify-self-end"
                    >
                        Tidak perlu mencari developer dan admin server terpisah.
                        Dari desain sampai online, dikerjakan dan dijaga oleh
                        orang yang sama.
                    </Reveal>
                </div>

                <div className="lg:-mx-6">
                    <Rule className="bg-ink" />
                    <ol>
                        {services.map(
                            ({ kanji, title, description, tags }, index) => (
                                <li
                                    key={title}
                                    className="group border-line relative border-b"
                                >
                                    {/* Sumi wash that sweeps in from the left on hover. */}
                                    <div
                                        aria-hidden="true"
                                        className="bg-ink ease-out-expo absolute inset-0 origin-left scale-x-0 transition-transform duration-700 [@media(hover:hover)]:group-hover:scale-x-100"
                                    />
                                    <Reveal
                                        delay={index * 60}
                                        className="relative"
                                    >
                                        <div className="ease-out-expo [@media(hover:hover)]:group-hover:text-paper grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 py-7 transition-colors duration-500 sm:grid-cols-[4rem_minmax(0,1fr)] sm:py-9 lg:grid-cols-12 lg:gap-x-10 lg:px-6 lg:py-11">
                                            <span className="text-ink-subtle [@media(hover:hover)]:group-hover:text-night-muted font-mono text-[12px] lg:col-span-1 lg:pt-3">
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </span>
                                            <h3 className="text-[24px] leading-[1.15] font-light tracking-[-0.025em] sm:text-[30px] lg:col-span-4 lg:text-[34px]">
                                                {title}
                                            </h3>
                                            <div className="col-start-2 flex flex-col gap-3 lg:col-span-5 lg:col-start-auto lg:pt-1.5">
                                                <p className="text-ink-muted [@media(hover:hover)]:group-hover:text-night-muted text-[15px] leading-[1.7] transition-colors duration-500">
                                                    {description}
                                                </p>
                                                <p className="text-ink-subtle [@media(hover:hover)]:group-hover:text-night-muted font-mono text-[11px] tracking-[0.1em] uppercase">
                                                    {tags.join(' / ')}
                                                </p>
                                            </div>
                                            <span
                                                lang="ja"
                                                aria-hidden="true"
                                                className="font-mincho text-line-strong ease-out-expo [@media(hover:hover)]:group-hover:text-paper hidden text-right text-[56px] leading-none transition-[color,transform] duration-700 lg:col-span-2 lg:block [@media(hover:hover)]:group-hover:-translate-y-1"
                                            >
                                                {kanji}
                                            </span>
                                        </div>
                                    </Reveal>
                                </li>
                            ),
                        )}
                    </ol>
                </div>
            </Container>
        </section>
    );
}
