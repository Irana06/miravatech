import { cn } from '@/lib/utils';

export default function AppLogoIcon({ className }: { className?: string }) {
    return (
        <img
            src="/favicon.svg"
            alt=""
            className={cn('aspect-square rounded-[22%]', className)}
        />
    );
}
