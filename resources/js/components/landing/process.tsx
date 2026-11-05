import { Reveal, Rule } from '@/components/landing/motion';
import { Container, SectionHeading } from '@/components/landing/primitives';

const steps = [
    {
        kanji: '聞く',
        romaji: 'KIKU',
        title: 'Dengar Kebutuhan',
        description:
            'Ngobrol soal tujuan, target pengguna, fitur, dan budget. Belum yakin butuh apa? Justru di sini kita cari tahu bersama.',
    },
    {
        kanji: '設計',
        romaji: 'SEKKEI',
        title: 'Rancang',
        description:
            'Alur, desain tampilan, estimasi waktu, dan penawaran harga yang jelas sebelum pengerjaan dimulai.',
    },
    {
        kanji: '作る',
        romaji: 'TSUKURU',
        title: 'Bangun',
        description:
            'Pengerjaan bertahap. Progres bisa Anda pantau kapan saja lewat kode project di halaman Cek Status.',
    },
    {
        kanji: '届ける',
        romaji: 'TODOKERU',
        title: 'Serahkan',
        description:
            'Deploy ke server, serah terima akses, dan pendampingan agar Anda nyaman memakainya sendiri.',
    },
];

export function Process() {
    return (
        <section
            id="proses"
            className="night-band text-night-text scroll-mt-16 py-20 sm:scroll-mt-20 sm:py-28 lg:py-40"
        >
            <Container className="flex flex-col gap-14 sm:gap-20">
                <SectionHeading
                    index={2}
                    label="Proses kerja"
                    ja="工程"
                    title="Empat langkah, tanpa kejutan di tengah jalan."
                    tone="dark"
                />

                <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <li key={step.romaji} className="flex flex-col gap-7">
                            <Rule
                                delay={index * 120}
                                className={
                                    index === 0
                                        ? 'bg-ai-light'
                                        : 'bg-night-line'
                                }
                            />
                            <Reveal
                                delay={index * 120}
                                className="flex gap-6 sm:gap-7"
                            >
                                <span
                                    lang="ja"
                                    className="tategaki text-[30px] leading-none tracking-[0.2em] text-white sm:text-[36px]"
                                >
                                    {step.kanji}
                                </span>
                                <div className="flex flex-col gap-3">
                                    <p className="text-night-muted font-mono text-[11px] tracking-[0.14em]">
                                        {String(index + 1).padStart(2, '0')} ·{' '}
                                        {step.romaji}
                                    </p>
                                    <h3 className="text-[20px] font-normal tracking-[-0.01em] sm:text-[22px]">
                                        {step.title}
                                    </h3>
                                    <p className="text-night-muted text-[14px] leading-[1.75] sm:text-[15px]">
                                        {step.description}
                                    </p>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
