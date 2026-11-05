import { usePage } from '@inertiajs/react';
import { MiravaLogo } from '@/components/landing/brand';
import { Container } from '@/components/landing/primitives';
import { portfolio } from '@/data/portfolio';

export function SiteFooter() {
    const { contact } = usePage().props;

    const instagram = contact.instagram?.replace(/^@/, '');

    return (
        <footer className="night-band text-night-text">
            <Container className="border-night-line flex flex-col gap-10 border-t pt-12 pb-10 sm:gap-16 sm:pt-16 sm:pb-14">
                <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] md:gap-12">
                    <div className="flex flex-col items-start gap-5">
                        <MiravaLogo
                            tone="white"
                            className="w-36 shrink-0 sm:w-44"
                        />
                        <p className="text-night-muted max-w-[280px] text-sm leading-[1.7] sm:text-[15px]">
                            Jasa pembuatan website, aplikasi mobile, dan deploy
                            server. Untuk UMKM, industri, dan klien
                            internasional.
                        </p>
                    </div>

                    <FooterColumn title="LAYANAN">
                        <a href="/#layanan">Pembuatan Website</a>
                        <a href="/#layanan">Aplikasi Mobile</a>
                        <a href="/#layanan">Deploy &amp; Maintenance</a>
                        <a href="/#layanan">Pemulihan Website Kena Hack</a>
                        <a href="/#layanan">Integrasi Sistem</a>
                    </FooterColumn>

                    <FooterColumn title="MIRAVATECH">
                        {portfolio.length > 0 && (
                            <a href="/#portofolio">Portofolio</a>
                        )}
                        <a href="/#status">Cek Status Project</a>
                        <a href="/#tentang">Tentang</a>
                        <a href="/#faq">FAQ</a>
                    </FooterColumn>

                    <FooterColumn title="KONTAK">
                        {contact.whatsapp && (
                            <span>WhatsApp {contact.whatsapp}</span>
                        )}
                        {contact.email && (
                            <a href={`mailto:${contact.email}`}>
                                {contact.email}
                            </a>
                        )}
                        {instagram && (
                            <a
                                href={`https://instagram.com/${instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram @{instagram}
                            </a>
                        )}
                    </FooterColumn>
                </div>

                <div className="border-night-line text-night-muted flex items-center justify-between gap-4 border-t pt-5 text-[13px] sm:pt-7 sm:text-sm">
                    <p>© {new Date().getFullYear()} Miravatech</p>
                    <p lang="ja" className="font-mincho tracking-[0.3em]">
                        未来をつくる。
                    </p>
                </div>
            </Container>
        </footer>
    );
}

function FooterColumn({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="text-night-text/90 flex flex-col gap-3 text-sm sm:gap-3.5 [&_a]:transition-colors [&_a:hover]:text-white">
            <p className="text-night-muted font-mono text-[11px] tracking-[0.14em] uppercase">
                {title}
            </p>
            {children}
        </div>
    );
}
