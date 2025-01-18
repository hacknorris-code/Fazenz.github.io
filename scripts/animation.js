document.addEventListener("DOMContentLoaded", () => {
    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animation du titre et sous-titre
    timeline
        .from(".title", { y: 50, opacity: 0, duration: 1.25 })
        .from(".sub-title", { y: 30, opacity: 0, duration: 1.25 }, "-=0.5")
        .from(".arrow", { y: 20, opacity: 0, duration: 1.25 }, "-=0.5")

    // Animation en boucle pour la flèche
    gsap.to(".arrow-down", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut"
    });
});