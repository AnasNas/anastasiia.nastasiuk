<template>
    <div class="modal" :class="{'show':popupState}" id="modal">
        <div class="modal-container">
            <div class="modal-header">
                <h3 class="subtitle">{{ caseItem.title }}</h3>

                <p class="text" v-html="caseItem.text"/>
            </div>

            <div class="modal-body">
                <img v-for="(image, key) in caseItem.images" :key="`key_${key}`" :src="image" alt="case image">

                <a :href="caseItem.link" class="btn text">
                    <span>Open live site</span>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="4" fill="#6FDA44"/>
                        <path d="M12 18H18M18 18V12.5M18 18L12 12" stroke="white" stroke-width="2"/>
                    </svg>
                </a>
                <div class="skills" :class="{'empty': caseItem.skills?.length % 2 !== 0 }">
                    <div class="skills-item" v-for="(skill, key) in caseItem.skills" :key="`key_${key}`">
                        <h4 class="skills-title h4" v-html="skill.title"/>
                        <div class="skills-chips">
                            <p class="skills-text text" v-for="(text, key) in skill.text" :key="`key_${key}`" v-html="text"/>
                        </div>
                    </div>

                    <div class="skills-item" v-if="caseItem.skills?.length % 2 !== 0"/>
                </div>
            </div>

            <div class="modal-footer">
                <swiper
                    :autoplay="{ delay: 0 }"
                    :loop="true"
                    :speed="6000"
                    :breakpoints="{
                        320: {
                          slidesPerView: 1
                        },
                        575: {
                          slidesPerView: 2
                        },
                        767: {
                          slidesPerView: 1
                        },
                        1024: {
                          slidesPerView: 2
                        }
                    }"
                    :modules="modules"
                >
                    <swiper-slide>
                        <h4 class="h4">Let's talk!</h4>
                        <h2>malah.rc@gmail.com</h2>
                    </swiper-slide>
                    <swiper-slide>
                        <h4 class="h4">Let's talk!</h4>
                        <h2>malah.rc@gmail.com</h2>
                    </swiper-slide>
                    <swiper-slide>
                        <h4 class="h4">Let's talk!</h4>
                        <h2>malah.rc@gmail.com</h2>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="modal-close" @click="modalsClose">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L16 1L1 16" stroke="#4F4F4F" stroke-width="2"/>
                </svg>
            </div>
        </div>
        <div class="overlay" @click="modalsClose"/>
    </div>
</template>

<script>
import '@/assets/scss/_modal.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    name: "ModalComponent",
    components: {
      Swiper,
      SwiperSlide
    },
    data: () => ({
        popupState: false,
        caseItem: {},
        modules: [Autoplay]
    }),
    methods: {
        modalOpen(item) {
            this.caseItem = item
            document.body.classList.add('no-scroll')

            this.popupState = !this.popupState
        },
        modalsClose () {
            document.body.classList.toggle('no-scroll')
            this.popupState = !this.popupState
        }
    }
}
</script>

<style lang="scss">
.swiper-wrapper {
    -webkit-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
    background-color: #6FDA44;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 37px;
    background-color: #6FDA44;
    margin-left: -2px;
}

@include breakpoint(extra-small) {
    .swiper-slide {
        padding: 14px 20px;
    }
}
</style>

<style scoped lang="scss">
.swiper-slide {
    h2 {
        color: #FFFFFF;
        font-size: 36px;
        line-height: 43px;
    }

    h4 {
        margin-bottom: 5px;
    }
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px auto 0;
    width: fit-content;
    padding: 9px 10px;
    background: #333333;
    border-radius: 8px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: background-color .3s, color .3s;

    svg {
        rect {
            transition: .3s;
        }
    }

    @include hovers {
        background-color: #6FDA44;
        color: #333333;

        svg {
            rect {
                fill: #333333;
            }
        }
    }
}

.skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    background: #C8C8C8;
    border-radius: 20px;
    gap: 1px;
    margin-top: 30px;
}

.skills-item {
    padding: 25px 40px;
    background: #F2F2F2;
}

.skills-chips {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.skills-text {
    padding: 2px 15px 4px;
    background: #FFFFFF;
    border-radius: 90px;
}

@include breakpoint(small) {
    .skills-item {
        padding: 25px;
    }
}

@include breakpoint(extra-small) {
    .skills {
        grid-template-columns: 1fr;
        margin-top: 15px;
        border-radius: 10px;

        &.empty {
            .skills-item:last-child {
                display: none;
            }
        }
    }
    .skills-item {
        padding: 15px;
    }
    .btn {
        margin-top: 15px;
    }

    .swiper-slide {
        h2 {
            font-size: 24px;
            line-height: 34px;
        }
    }
}
</style>