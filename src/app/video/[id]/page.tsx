'use client';

import { useParams, useRouter } from 'next/navigation';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowLeft, Maximize, Minimize } from 'lucide-react';

// Map project id → video src
const videoMap: Record<string, string> = {
    'insightai': '/projects/InsightAI.mp4',
    'lead-crm': '/projects/Lead-to-Crm.mp4',
    'invoice-automation': '/projects/InvoiceFlow.mp4',
    'agentflow': '/projects/AI Content & Automation Agent.mp4',
    'docuflow': '/projects/Document Processing Automation.mp4',
    'rag-chatbot': '/projects/RAG-based Support Chatbot.mp4',
    'social-autoposter': '/projects/Social-Media-Auto-Poster.mp4',
    'nexora': '/projects/nexora.mp4',
    'elevare': '/projects/real estate.mp4',
    'orbital': '/projects/industrial.mp4',
    'aetherai': '/projects/AetherAI.mp4',
    'minimo': '/projects/minimo.mp4',
};

export default function VideoPage() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [isNativeFullscreen, setIsNativeFullscreen] = useState(false);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const src = videoMap[id] ?? null;

    // Auto-play on mount
    useEffect(() => {
        const v = videoRef.current;
        if (v) v.play().then(() => setPlaying(true)).catch(() => { });
    }, []);

    // Auto-hide controls
    const resetHideTimer = useCallback(() => {
        setShowControls(true);
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setShowControls(false), 3000);
    }, []);

    useEffect(() => {
        resetHideTimer();
        return () => { if (hideTimer.current) clearTimeout(hideTimer.current); };
    }, [resetHideTimer]);

    const togglePlay = useCallback(() => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) { v.play(); setPlaying(true); }
        else { v.pause(); setPlaying(false); }
    }, []);

    const toggleMute = useCallback(() => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = !v.muted;
        setMuted(v.muted);
    }, []);

    const onTimeUpdate = useCallback(() => {
        const v = videoRef.current;
        if (!v || !v.duration) return;
        setProgress((v.currentTime / v.duration) * 100);
    }, []);

    const onLoadedMetadata = useCallback(() => {
        if (videoRef.current) setDuration(videoRef.current.duration);
    }, []);

    const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const v = videoRef.current;
        if (!v) return;
        const rect = e.currentTarget.getBoundingClientRect();
        v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
    }, []);

    const toggleNativeFullscreen = useCallback(() => {
        const v = videoRef.current;
        if (!v) return;
        if (!document.fullscreenElement) {
            v.requestFullscreen?.();
            setIsNativeFullscreen(true);
        } else {
            document.exitFullscreen?.();
            setIsNativeFullscreen(false);
        }
    }, []);

    const fmt = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2, '0')}`;
    };

    if (!src) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <p className="text-xl font-bold mb-4">Video not found</p>
                    <button onClick={() => router.back()} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
                        Go back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden"
            onMouseMove={resetHideTimer}
            onClick={togglePlay}
        >
            <video
                ref={videoRef}
                src={src}
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            />

            {/* Controls overlay */}
            <div
                className="absolute inset-0 flex flex-col justify-between transition-opacity duration-300 pointer-events-none"
                style={{ opacity: showControls ? 1 : 0 }}
            >
                {/* Top bar */}
                <div
                    className="flex items-center gap-3 px-6 pt-6 pointer-events-auto"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)' }}
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-white/80 hover:text-white transition-all hover:bg-white/10"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>
                </div>

                {/* Bottom bar */}
                <div
                    className="px-6 pb-6 pointer-events-auto"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                    onClick={e => e.stopPropagation()}
                >
                    {/* Progress bar */}
                    <div
                        className="w-full h-1.5 rounded-full mb-4 cursor-pointer group/seek"
                        style={{ background: 'rgba(255,255,255,0.2)' }}
                        onClick={seek}
                    >
                        <div
                            className="h-full rounded-full relative transition-all"
                            style={{ width: `${progress}%`, background: 'var(--accent, #86efac)' }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover/seek:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    {/* Buttons row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {/* Play/Pause */}
                            <button
                                onClick={togglePlay}
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                                aria-label={playing ? 'Pause' : 'Play'}
                            >
                                {playing
                                    ? <Pause className="w-5 h-5 text-white" />
                                    : <Play className="w-5 h-5 text-white translate-x-0.5" />
                                }
                            </button>

                            {/* Mute */}
                            <button
                                onClick={toggleMute}
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                                aria-label={muted ? 'Unmute' : 'Mute'}
                            >
                                {muted
                                    ? <VolumeX className="w-5 h-5 text-white" />
                                    : <Volume2 className="w-5 h-5 text-white" />
                                }
                            </button>

                            {/* Time */}
                            <span className="text-white/60 text-sm font-mono">
                                {fmt(duration * progress / 100)} / {fmt(duration)}
                            </span>
                        </div>

                        {/* Native fullscreen toggle */}
                        <button
                            onClick={toggleNativeFullscreen}
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                            aria-label="Toggle fullscreen"
                        >
                            {isNativeFullscreen
                                ? <Minimize className="w-5 h-5 text-white" />
                                : <Maximize className="w-5 h-5 text-white" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Centre play indicator on click */}
            {!playing && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-md"
                        style={{ background: 'rgba(0,0,0,0.5)', border: '1.5px solid rgba(255,255,255,0.2)' }}>
                        <Play className="w-8 h-8 text-white translate-x-1" />
                    </div>
                </div>
            )}
        </div>
    );
}
