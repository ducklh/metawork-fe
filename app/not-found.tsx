'use client';

import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        // Redirect to Telegram immediately
        window.location.href = 'https://t.me/K_NETWORK_official';
    }, []);

    return null;
}
