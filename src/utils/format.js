export function formatTime(ts) {
    return new Date(ts * 1000)
        .toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

export function formatDuration(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    return `${h}:${String(m).padStart(2, '0')}`;
}
