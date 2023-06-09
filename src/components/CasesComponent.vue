<template>
    <section class="cases" id="cases">
        <div class="container">
            <h2 class="title">Cases</h2>

            <h3 class="cases-subtitle">50+ successfully completed projects</h3>

            <div class="cases-grid">
                <div class="cases-item animate" v-for="(item, key) in cases" :key="`key_${key}`">
                    <div class="cases-img" @mousemove="animationBtn" @mouseleave="animationBtnReset">
                        <img alt="Vue logo" :src="item.images[0]">
                        <div class="animation-btn" @click="modalOpen(item)">Open case</div>
                    </div>

                    <h3 class="subtitle" v-html="item.title"/>

                    <p class="text" v-html="item.text"/>
                </div>
            </div>

            <ModalComponent ref="modal"/>
        </div>
    </section>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";
import casesData from '@/cases.json'

export default {
    name: "CasesComponent",
    components: {
        ModalComponent
    },
    data: () => ({
        cases: casesData
    }),
    mounted() {
        document.addEventListener("scroll", this.isObserveSection);
    },
    methods: {
        modalOpen(item) {
            this.$refs.modal.modalOpen(item);
        },
        isObserveSection() {
            let casesItem = document.querySelectorAll(".cases-item"),
                searchForSection = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.remove('animate');
                            }
                        });
                    },
                    {
                        threshold: 0.1,
                        root: null,
                        rootMargin: "0px",
                    }
                );

            //init
            [...casesItem].forEach((item) => {
                searchForSection.observe(item);
            });
        },
        animationBtn(e) {
            let target = e.target.closest('.cases-img')
            let btn = target.querySelector('.animation-btn');
            let rect = target.getBoundingClientRect();
            let middle = target.offsetWidth / 2;

            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            let rotate = 0;

            if(x > middle) {
                rotate = ((x / 100) - 3);
            } else {
                rotate = -(( (target.offsetWidth - x) / 100) - 3);
            }

            window.requestAnimationFrame(()=>{
                btn.style.left = x + 'px';
                btn.style.top = y + 'px';
                btn.style.rotate = rotate + 'deg';
            });
        },
        animationBtnReset(e) {
            let target = e.target.closest('.cases-img')
            let btn = target.querySelector('.animation-btn');

            window.requestAnimationFrame(()=>{
                btn.style.left = '50%';
                btn.style.top = '50%';
            });
        }
    }
}
</script>

<style scoped lang="scss">
.cases {
    padding-top: 80px;
    padding-bottom: 150px;
}

.title {
    text-align: center;
}

.cases-subtitle {
    margin-top: 15px;
    font-size: 32px;
    line-height: 34px;
    letter-spacing: 0.05em;
    text-align: center;
    color: #6FDA44;
}

.cases-grid {
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px 40px;
}

.cases-item {
    transition: 1s;

    &:nth-child(odd) {
        transition: .6s;
    }

    &.animate {
        transform: translateY(300px);
        opacity: 0;
    }

    @include hovers {
        .animation-btn {
            opacity: 1;
            transform: translate(-50%, -50%);
        }

        .subtitle {
            text-decoration: underline;
            text-decoration-color: rgba(111, 218, 68, 1);
        }
    }

    .subtitle {
        position: relative;
        margin-top: 30px;
        width: fit-content;
        text-decoration-color: rgba(111, 218, 68, 0);
        transition: text-decoration-color .3s;
    }

    .text {
        text-transform: uppercase;
    }

    img {
        width: 100%;
        aspect-ratio: 3/2;
        border-radius: 20px;
    }
}

.cases-img {
    position: relative;
    overflow: hidden;
}

.animation-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    will-change: transform;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);
    height: 120px;
    width: 120px;
    min-width: 120px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0 25px;
    text-align: center;
    font-family: 'Gilroy', system-ui, -apple-system;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.02em;
    opacity: 0;
    transition: .4s linear;
    cursor: pointer;

    @include hovers {
        height: 150px;
        width: 150px;
    }
}

@include breakpoint(extra-small) {
    .cases {
        padding-top: 60px;
        padding-bottom: 50px;
    }
    .cases-grid {
        margin-top: 25px;
        grid-gap: 25px;
        grid-template-columns: 1fr;
    }

    .cases-subtitle {
        margin-top: 5px;
        font-size: 22px;
        line-height: 24px;
    }

    .cases-item {
        transition: .8s;

        &:nth-child(odd) {
            transition: .8s;
        }

        .subtitle {
            margin-top: 10px;
        }

        img {
            border-radius: 10px;
        }
    }
}
</style>