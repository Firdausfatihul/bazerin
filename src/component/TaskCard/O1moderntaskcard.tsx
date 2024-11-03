    // Start of Selection
    import React, { useState, useRef, useEffect } from "react";
    import { useRouter } from "next/router";
    
    interface TaskCardProps {
        color: string;
        icon: string;
        title: string;
        content: string;
        route: string;
        gradientFrom: string;
        gradientTo: string;
    }
    
    const TaskCard: React.FC<TaskCardProps> = ({
        color,
        icon,
        title,
        content,
        route,
        gradientFrom,
        gradientTo,
    }) => {
        const router = useRouter();
        const cardRef = useRef<HTMLDivElement>(null);
        const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
        const [isHover, setIsHover] = useState(false);
    
        const handleMouseMove = (e: React.MouseEvent) => {
            const rect = cardRef.current?.getBoundingClientRect();
            if (rect) {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
                const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1
                setMousePos({ x: xPercent, y: yPercent });
            }
        };
    
        const handleMouseLeave = () => {
            setMousePos({ x: 0, y: 0 });
            setIsHover(false);
        };
    
        const handleMouseEnter = () => {
            setIsHover(true);
        };
    
        // Calculate dynamic transformations based on mouse position
        const cardTransform = `rotateX(${mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg) scale(${isHover ? 1.05 : 1})`;
    
        const shadowIntensity = isHover ? 0.5 : 0.2;
        const shadowColor = `rgba(0, 0, 0, ${shadowIntensity})`;
    
        return (
            <div
                ref={cardRef}
                className={`bg-gradient-to-br 
                ${gradientFrom} 
                ${gradientTo} 
                p-6 
                rounded-3xl 
                relative 
                overflow-hidden 
                transition-all 
                duration-700 
                ease-out 
                transform 
                group 
                cursor-pointer
                shadow-lg
                `}
                style={{
                    transform: cardTransform,
                    boxShadow: `0 10px 30px ${shadowColor}`,
                }}
                onClick={() => router.push(route)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
            >
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`,
                        transition: "transform 0.1s ease-out",
                        background: `radial-gradient(circle at ${50 + mousePos.x * 10}% ${50 + mousePos.y * 10}%, rgba(255,255,255,0.1), transparent)`,
                        pointerEvents: "none",
                        borderRadius: "inherit",
                    }}
                />
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className={`relative 
                                flex 
                                items-center 
                                justify-center 
                                w-16 
                                h-16 
                                rounded-full 
                                bg-${color}-300 
                                transition-transform 
                                duration-700 
                                ease-out 
                                group-hover:scale-125 
                                shadow-2xl`}
                                style={{
                                    transform: `translate3d(${mousePos.x * 5}px, ${mousePos.y * 5}px, 0)`,
                                }}
                            >
                                <span className="text-4xl">{icon}</span>
                            </div>
                        </div>
    
                        <h3
                            className={`text-2xl 
                            font-bold 
                            text-${color}-800 
                            transition-colors 
                            duration-700 
                            ease-out 
                            group-hover:text-${color}-900`}
                            style={{
                                transform: `translate3d(${mousePos.x * 2}px, ${mousePos.y * 2}px, 0)`,
                            }}
                        >
                            {title}
                        </h3>
    
                        <p
                            className="text-slate-600 text-lg mt-3"
                            style={{
                                transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0)`,
                            }}
                        >
                            {content}
                        </p>
                    </div>
    
                    <button
                        onClick={() => router.push(route)}
                        className={`absolute 
                        bottom-5 
                        right-5 
                        h-12 
                        w-16 
                        bg-${color}-200 
                        rounded-xl 
                        flex 
                        items-center 
                        justify-center 
                        transition-transform 
                        duration-700 
                        ease-out 
                        hover:translate-x-3 
                        hover:scale-125 
                        shadow-lg`}
                        style={{
                            transform: `translate3d(${mousePos.x * 3}px, ${mousePos.y * 3}px, 0)`,
                        }}
                    >
                        <svg
                            className={`w-6 
                            h-6 
                            text-${color}-600 
                            transition-transform 
                            duration-700 
                            ease-out 
                            group-hover:translate-x-2`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
    
                {/* Enhanced Dynamic Background Decoration */}
                <div
                    className={`absolute 
                    -bottom-12 
                    -right-12 
                    w-60 
                    h-60 
                    bg-${color}-400/30 
                    rounded-full 
                    blur-3xl 
                    transition-transform 
                    duration-700 
                    ease-out 
                    group-hover:scale-150 
                    group-hover:bg-${color}-500/20`}
                    style={{
                        transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
                    }}
                />
    
                {/* Additional Interactive Layer */}
                <div
                    className={`absolute 
                    top-0 
                    left-0 
                    w-full 
                    h-full 
                    bg-transparent 
                    pointer-events-none 
                   `}
                    style={{
                        background: `conic-gradient(from ${Math.atan2(mousePos.y, mousePos.x) + Math.PI / 2}rad, ${gradientFrom}, ${gradientTo})`,
                        transition: "background 0.2s ease-out",
                    }}
                />
    
                {/* Particle Effect Overlay */}
                <canvas
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                        borderRadius: "inherit",
                        mixBlendMode: "overlay",
                    }}
                    ref={(canvas) => {
                        if (!canvas) return;
                        const ctx = canvas.getContext("2d");
                        if (!ctx) return;
                        const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
                        const numParticles = 50;
                        const animate = () => {
                            if (!ctx) return;
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.fillStyle = `rgba(255, 255, 255, 0.2)`;
                            particles.forEach((p) => {
                                ctx.beginPath();
                                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                                ctx.fill();
                                p.x += p.speedX + mousePos.x * 0.5;
                                p.y += p.speedY + mousePos.y * 0.5;
                                if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
                                if (p.y > canvas.height || p.y < 0) p.speedY *= -1;
                            });
                            requestAnimationFrame(animate);
                        };
                        if (particles.length === 0) {
                            for (let i = 0; i < numParticles; i++) {
                                particles.push({
                                    x: Math.random() * canvas.width,
                                    y: Math.random() * canvas.height,
                                    size: Math.random() * 2 + 1,
                                    speedX: Math.random() * 0.5 - 0.25,
                                    speedY: Math.random() * 0.5 - 0.25,
                                });
                            }
                            animate();
                        }
                    }}
                />
            </div>
        );
    };
    
    export default TaskCard;
