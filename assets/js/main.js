const cards = document.querySelectorAll(".card");

/* EVENTS */
cards.forEach((card) => {
    const inner = card.querySelector(".card-inner");
    const img = inner.querySelector("img");
    const glass = inner.querySelector(".glass");
    const h1 = inner.querySelector("h1");
    const p = inner.querySelector("p");
    const shine = inner.querySelector(".shine");

    const tl = gsap.timeline({ paused: true });

    tl.to(
        inner,
        {
            rotateX: 12,
            rotateY: -12,
            duration: 0.8,
            ease: "elastic.out(1, 0.4)", // ✅ physics bounce
        },
        0
    )
        .to(
            img,
            {
                scale: 1.45,
                rotate: -3,
                duration: 1,
                ease: "power3.out",
            },
            0
        )
        .to(
            glass,
            {
                x: "0%",
                duration: 0.9,
                ease: "power4.out",
            },
            0.5
        )
        .fromTo(
            h1,
            { y: -80, rotateX: 90, opacity: 0 },
            {
                y: 0,
                rotateX: 0,
                opacity: 1,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
            },
            0.15
        )
        .fromTo(
            p,
            { y: 80, scale: 1.4, opacity: 0 },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
            },
            0.3
        )
        .to(
            shine,
            {
                x: "100%",
                duration: 1.2,
                ease: "power2.out",
            },
            0
        );

    const btn = inner.querySelector(".cta");

    tl.fromTo(
        btn,
        { y: 40, scale: 0.6, opacity: 0 },
        {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
        },
        0.45
    );

    card.addEventListener("mouseenter", () => tl.play());
    card.addEventListener("mouseleave", () => tl.reverse());
});
