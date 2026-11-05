import { Form } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { buttonPrimary } from '@/components/landing/primitives';
import { cn } from '@/lib/utils';
import { projectStatus } from '@/routes';

type Props = {
    defaultCode?: string | null;
    tone?: 'light' | 'dark';
};

export function StatusCheckForm({ defaultCode, tone = 'dark' }: Props) {
    return (
        <Form
            {...projectStatus.form()}
            className="flex flex-col gap-2.5 sm:flex-row sm:gap-0"
        >
            {({ processing }) => (
                <>
                    <label htmlFor="kode" className="sr-only">
                        Kode project
                    </label>
                    <div className="relative flex-1">
                        <Search
                            aria-hidden="true"
                            className="text-ink-subtle pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2"
                        />
                        <input
                            id="kode"
                            name="kode"
                            defaultValue={defaultCode ?? ''}
                            required
                            placeholder="MRV-XXXX-XXXX"
                            autoComplete="off"
                            autoCapitalize="characters"
                            spellCheck={false}
                            className={cn(
                                'text-ink placeholder:text-ink-subtle focus-visible:outline-ai border-ink h-14 w-full border pr-4 pl-12 font-mono text-[15px] tracking-[0.06em] uppercase focus-visible:outline-2 focus-visible:outline-offset-2 sm:border-r-0',
                                tone === 'dark' ? 'bg-paper' : 'bg-surface',
                            )}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className={cn(
                            buttonPrimary,
                            'h-14 px-8',
                            tone === 'dark' &&
                                'bg-ai hover:bg-ai-deep focus-visible:outline-ai-light',
                        )}
                    >
                        Cek Status
                    </button>
                </>
            )}
        </Form>
    );
}
