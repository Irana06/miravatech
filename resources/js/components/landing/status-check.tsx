import { Container, SectionHeading } from '@/components/landing/primitives';
import { ProjectStatusCard } from '@/components/landing/project-status-card';
import { StatusCheckForm } from '@/components/landing/status-check-form';
import type { ProjectStatus } from '@/types';

const example: ProjectStatus = {
    code: 'MRV-XXXX-XXXX',
    title: 'Website Company Profile',
    package: 'Paket Take · Website',
    status: 'development',
    status_label: 'Development',
    timeline: [
        { status: 'pending', label: 'Brief diterima', reached_at: '2 Sep' },
        { status: 'design', label: 'Desain', reached_at: '9 Sep' },
        { status: 'development', label: 'Development', reached_at: null },
        { status: 'review', label: 'Review & revisi', reached_at: null },
        {
            status: 'completed',
            label: 'Online & serah terima',
            reached_at: null,
        },
    ],
    latest_note: {
        comment: 'Halaman beranda dan katalog sudah bisa dicoba.',
        date: null,
    },
};

export function StatusCheck() {
    return (
        <section
            id="status"
            className="bg-paper-deep scroll-mt-16 py-20 sm:scroll-mt-20 sm:py-28 lg:py-40"
        >
            <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
                <div className="flex flex-col gap-10 lg:col-span-6">
                    <SectionHeading
                        index={4}
                        label="Cek status project"
                        ja="進捗"
                        title="Pantau progres project Anda, kapan saja."
                        description="Setiap order mendapat kode project. Masukkan kodenya untuk melihat tahap pengerjaan terbaru beserta catatan dari developer, tanpa perlu menunggu balasan chat."
                    />
                    <StatusCheckForm tone="light" />
                </div>

                <ProjectStatusCard
                    project={example}
                    badge="Contoh tampilan"
                    className="border-line bg-surface border lg:col-span-5 lg:col-start-8"
                />
            </Container>
        </section>
    );
}
