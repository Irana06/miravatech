import { Link } from '@inertiajs/react';
import { ArrowRight, Menu } from 'lucide-react';
import { MiravaLogo } from '@/components/landing/brand';
import { useState } from 'react';
import {
    buttonDark,
    buttonPrimary,
    Container,
    WhatsappLink,
} from '@/components/landing/primitives';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { portfolio } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { CONSULT_MESSAGE } from '@/lib/whatsapp';
import { home } from '@/routes';

const navItems = [
    { label: 'Layanan', href: '/#layanan' },
    { label: 'Proses', href: '/#proses' },
    { label: 'Paket', href: '/#paket' },
    ...(portfolio.length > 0
        ? [{ label: 'Portofolio', href: '/#portofolio' }]
        : []),
    { label: 'Cek Status', href: '/#status' },
    { label: 'FAQ', href: '/#faq' },
];

export function BrandMark({ className }: { className?: string }) {
    return (
        <Link
            href={home()}
            className={cn('flex items-center', className)}
            aria-label="Miravatech, ke beranda"
        >
            <MiravaLogo className="w-[136px] sm:w-[156px]" />
        </Link>
    );
}

export function SiteHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-line bg-paper/85 sticky top-0 z-40 border-b backdrop-blur-md">
            <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
                <BrandMark />

                <nav
                    aria-label="Navigasi utama"
                    className="hidden items-center gap-9 text-[14px] lg:flex"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-ink-muted hover:text-ink link-sweep py-1 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <WhatsappLink
                    message={CONSULT_MESSAGE}
                    className={cn(
                        buttonDark,
                        'hidden h-10 px-5 text-[13px] lg:inline-flex',
                    )}
                >
                    Konsultasi
                    <ArrowRight className="size-3.5" />
                </WhatsappLink>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger
                        className="text-ink -mr-2 flex size-11 items-center justify-center lg:hidden"
                        aria-label="Buka menu"
                    >
                        <Menu className="size-6" strokeWidth={1.5} />
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="border-line bg-paper text-ink w-[300px] p-6"
                    >
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <nav
                            aria-label="Navigasi utama"
                            className="mt-10 flex flex-col"
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="border-line border-b py-4 text-[22px] font-light tracking-[-0.02em]"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        <WhatsappLink
                            message={CONSULT_MESSAGE}
                            className={cn(buttonPrimary, 'mt-8 w-full')}
                        >
                            Konsultasi via WhatsApp
                            <ArrowRight className="size-4" />
                        </WhatsappLink>
                    </SheetContent>
                </Sheet>
            </Container>
        </header>
    );
}
