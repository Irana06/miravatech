import { useEffect, useRef } from 'react';
import type { ComponentProps, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

/**
 * Turns on the scroll reveals. Until this runs, everything stays visible,
 * so the page still reads fine without JS.
 */
export function useMotionReady() {
    useEffect(() => {
        document.documentElement.classList.add('motion-ready');
    }, []);
}

/**
 * Marks the element as shown the first time it scrolls into view.
 */
export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    element.dataset.shown = '';
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -8% 0px' },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return ref;
}

function delayStyle(delay: number | undefined, style?: CSSProperties) {
    return delay
        ? ({ ...style, '--delay': `${delay}ms` } as CSSProperties)
        : style;
}

type RevealProps = ComponentProps<'div'> & {
    /** Milliseconds to wait after the element comes into view. */
    delay?: number;
};

/**
 * Content that rises gently into place as it scrolls into view.
 */
export function Reveal({ delay, style, ...props }: RevealProps) {
    const ref = useReveal<HTMLDivElement>();

    return (
        <div
            ref={ref}
            data-reveal=""
            style={delayStyle(delay, style)}
            {...props}
        />
    );
}

/**
 * A 1px hairline that draws itself from left to right.
 */
export function Rule({
    delay,
    className,
    style,
}: {
    delay?: number;
    className?: string;
    style?: CSSProperties;
}) {
    const ref = useReveal<HTMLDivElement>();

    return (
        <div
            ref={ref}
            data-rule=""
            aria-hidden="true"
            style={delayStyle(delay, style)}
            className={cn('bg-line-strong h-px w-full', className)}
        />
    );
}

/**
 * One line of a headline that rises from behind a mask on page load.
 */
export function MaskLine({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    return (
        <span className="line-mask">
            <span style={delayStyle(delay)}>{children}</span>
        </span>
    );
}
