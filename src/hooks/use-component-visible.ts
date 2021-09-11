import { useState, useEffect, useRef, useCallback, MutableRefObject } from 'react';

export const useComponentVisible = (initialIsVisible: boolean, ignoreRefs?: MutableRefObject<HTMLElement | null>[]) => {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(
        (event: Event) => {
            const shouldBeIgnored = ignoreRefs?.some((ignoreRef) => ignoreRef.current?.contains(event.target as Node));
            if (ref.current && !ref.current.contains(event.target as Node) && !shouldBeIgnored) {
                setIsComponentVisible(false);
            }
        },
        [setIsComponentVisible, ref],
    );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    });

    return { ref, isComponentVisible, setIsComponentVisible };
};
