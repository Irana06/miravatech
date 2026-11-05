import { usePage } from '@inertiajs/react';
import type { ComponentProps, ReactNode } from 'react';
import { Reveal } from '@/components/landing/motion';
import { whatsappLink } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

export const buttonBase =
    'group/button inline-flex items-center justify-center gap-3 px-6 text-[14px] font-medium tracking-[0.01em] whitespace-nowrap transition-colors duration-500 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ai disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-500 [&_svg]:ease-out-expo hover:[&_svg]:translate-x-1';

export const buttonPrimary = cn(
    buttonBase,
    'bg-ink text-paper hover:bg-ai h-12',
);

export const buttonOutline = cn(
    buttonBase,
    'border-ink text-ink hover:bg-ink hover:text-paper h-12 border bg-transparent',
);

export const buttonDark = buttonPrimary;

export function Container({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-14',
                className,
            )}
            {...props}
        />
    );
}

type SectionHeadingProps = {
    /** Section number, shown as 01, 02, ... */
    index: number;
    label: string;
    /** Japanese word set vertically in the margin on wide screens. */
    ja?: string;
    title: ReactNode;
    description?: ReactNode;
    tone?: 'light' | 'dark';
    className?: string;
};

/**
 * Section title in the editorial style: number and a vertical Japanese word
 * in a narrow margin column, then a large light headline.
 */
export function SectionHeading({
    index,
    label,
    ja,
    title,
    description,
    tone = 'light',
    className,
}: SectionHeadingProps) {
    const dark = tone === 'dark';
    const number = String(index).padStart(2, '0');

    return (
        <div className={cn('flex gap-8 lg:gap-12', className)}>
            {ja && (
                <div
                    aria-hidden="true"
                    className={cn(
                        'hidden shrink-0 flex-col items-center gap-4 pt-2 sm:flex',
                        dark ? 'text-night-muted' : 'text-ink-subtle',
                    )}
                >
                    <span className="font-mono text-[11px]">{number}</span>
                    <span
                        className={cn(
                            'h-10 w-px',
                            dark ? 'bg-night-line' : 'bg-line-strong',
                        )}
                    />
                    <span lang="ja" className="tategaki text-[15px]">
                        {ja}
                    </span>
                </div>
            )}

            <Reveal className="flex flex-col gap-5 sm:gap-7">
                <p
                    className={cn(
                        'font-mono text-[11px] tracking-[0.14em] uppercase',
                        dark ? 'text-night-muted' : 'text-ink-subtle',
                        ja && 'sm:hidden',
                    )}
                >
                    {number} / {label}
                </p>
                <h2 className="font-display max-w-[820px] text-[34px] leading-[1.08] font-light tracking-[-0.035em] text-balance sm:text-[48px] lg:text-[60px]">
                    {title}
                </h2>
                {description && (
                    <p
                        className={cn(
                            'max-w-[540px] text-[15px] leading-[1.75] text-pretty sm:text-[16px]',
                            dark ? 'text-night-muted' : 'text-ink-muted',
                        )}
                    >
                        {description}
                    </p>
                )}
            </Reveal>
        </div>
    );
}

type WhatsappLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
    message: string;
};

/**
 * Opens WhatsApp with a pre-filled message, using the configured business number.
 */
export function WhatsappLink({ message, ...props }: WhatsappLinkProps) {
    const { contact } = usePage().props;
    const href = whatsappLink(contact.whatsapp, message);
    const external = href.startsWith('https://');

    return (
        <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            {...props}
        />
    );
}
