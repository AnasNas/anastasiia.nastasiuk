<template>
    <section class="hero" @mousemove="animationText" @mouseleave="animationTextReset">
        <div class="hero-container container">
            <a href="#" @click.prevent="goto('cases')" class="hero-scroll">
                <svg width="24" height="35" viewBox="0 0 24 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="21" height="32" rx="10.5" stroke="#333333" stroke-width="3"/>
                    <rect x="11.75" y="19.75" width="1.5" height="4.5" rx="0.75" stroke="#333333" stroke-width="1.5"/>
                </svg>

                <span>
                    Scroll Down
                </span>
            </a>

            <div>
                <h1 class="main-title">
                    <span class="animate-text">Portfolio</span>
                    <span >of Malykh Vitaliy</span>
                </h1>

                <h2 class="hero-subtitle">
                    <svg width="30" aria-hidden="true" data-name="Layer 1" viewBox="0 0 14 14" role="img">
                        <polygon points="6.98 0 0 0 0 9.21 6.98 14 13.95 9.21 13.95 0 6.98 0" fill="#f86d9c"/>
                        <polygon points="0 0 14 9.21 14 0 0 0" fill="#fba0bd"/>
                        <polygon points="0.05 9.21 7.02 14 14 9.21 14 0 0.05 9.21" fill="#f1367a" />
                    </svg>

                    <span>top rated plus</span>
                </h2>
            </div>

            <div class="hero-img">
                <img :src="require('@/assets/images/hero-person.png')" alt="hero person">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HeroComponent",
    methods: {
        goto(id) {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            });
        },
        animationText(e) {
            let text = document.querySelector('.animate-text');

            let x = (e.clientX  / 12);
            let y = (e.clientY / 12) - 210;

            window.requestAnimationFrame(()=>{
                text.style.left = x + 'px';
                text.style.top = y + 'px';
            });
        },
        animationTextReset() {
            let text = document.querySelector('.animate-text');
            const mediaQuery = window.matchMedia('(max-width: 1500px)')


            window.requestAnimationFrame(()=>{
                text.style.left = '0';
                text.style.top = '-210px';
                if (mediaQuery.matches) {
                    text.style.top = '-170px';
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
.hero {
    height: 100vh;
    background-image: url("@/assets/images/hero-bg.png");
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
    padding-top: 180px;

    .hero-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 60px;
        height: 100%;
    }

    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin-top: -70px;
    }

    .main-title {
        position: relative;
        white-space: nowrap;
    }

    .animate-text {
        position: absolute;
        top: -210px;
        left: 0;
        display: block;
        font-family: $Caveat;
        font-style: normal;
        font-weight: 700;
        font-size: 238.829px;
        line-height: 100%;
        color: #6FDA44;
        transform: rotate(-4.61deg);
        text-shadow: -6px 0 #FFFFFF, 0 6px #FFFFFF, 6px 0 #FFFFFF, 0 -6px #FFFFFF;
        transition: .4s linear;
    }

    .hero-subtitle {
        font-size: 32px;
        color: #828282;
        line-height: 32px;
        padding-right: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
    }

    .hero-scroll {
        position: absolute;
        left: 15px;
        bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        svg {
            transition: .3s;
        }

        @include hovers {
            svg {
                fill: #6FDA44;
            }
        }
    }

    @include breakpoint(large) {
        .hero-container {
            gap: 20px;
        }

        .main-title {
            font-size: 100px;

            .animate-text {
                top: -170px;
                font-size: 194px;
            }
        }
    }

    @include breakpoint(small) {
        .main-title {
            font-size: 70px;

            .animate-text {
                top: -120px;
                font-size: 135px;
                text-shadow: -4px 0 #FFFFFF, 0 4px #FFFFFF, 4px 0 #FFFFFF, 0 -4px #FFFFFF;
            }
        }

        .hero-subtitle {
            padding-right: 5px;
        }
    }

    @include breakpoint(extra-small) {
        background-size: cover;

        .hero-container {
            padding-bottom: 20px;
        }

        .main-title {
            font-size: 50px;

            .animate-text {
                top: -85px;
                font-size: 96px;
            }
        }

        .hero-subtitle {
            font-size: 24px;

            svg {
                width: 20px;
            }
        }
    }

    @include breakpoint(small-tablet-portrait) {
        background-image: url("@/assets/images/hero-mobile-bg.png");
        min-height: 600px;

        .hero-container {
            flex-direction: column-reverse;
            gap: 60px;
        }

        .hero-img {
            max-width: 300px;
        }

        .main-title {
            font-size: 50px;

            .animate-text {
                top: -83px;
                font-size: 97px;
                text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;
            }
        }

        .hero-scroll {
            position: unset;
        }
    }
}
</style>