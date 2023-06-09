<template>
    <div class="header show">
        <div class="container">
            <a href="https://www.upwork.com/freelancers/anastasiia1" class="link-name">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#6FDA44"/>
                    <g clip-path="url(#clip0_67_1720)">
                        <path
                            d="M18.9182 9.46321C16.9888 9.473 15.5224 10.8199 14.9734 12.9663C14.0523 11.4701 13.3337 9.7586 12.9217 8.31371L10.8911 8.3238L10.9192 14.0054C10.9204 14.2729 10.8717 14.538 10.7758 14.7856C10.6799 15.0332 10.5388 15.2585 10.3605 15.4485C10.1821 15.6385 9.97008 15.7896 9.73642 15.8932C9.50277 15.9967 9.25208 16.0506 8.99867 16.0519C8.4869 16.0545 7.99512 15.8423 7.63152 15.4621C7.45149 15.2739 7.30834 15.0501 7.21026 14.8034C7.11218 14.5568 7.06108 14.2922 7.05988 14.0247L7.03175 8.3431L5 8.35349L5.02813 14.0354C5.036 16.3932 6.82081 18.2614 9.005 18.2495C11.1892 18.2376 12.958 16.3537 12.9481 13.9953L12.9439 13.0305C13.3534 13.8855 13.8653 14.7939 14.4278 15.5955L13.1861 21.8726L15.2673 21.8625L16.1617 17.3019C16.9762 17.8342 17.8914 18.151 18.9573 18.1456C21.1916 18.1352 23.0112 16.1972 23 13.7311C22.9899 11.3721 21.1528 9.45222 18.9185 9.46291L18.9182 9.46321ZM18.9472 15.9487C18.1349 15.9526 17.321 15.5818 16.6584 14.9949L16.8575 14.1339V14.0799C17.006 13.1673 17.4554 11.6111 18.9787 11.604C19.5169 11.6029 20.0337 11.8268 20.4161 12.2266C20.7986 12.6264 21.0156 13.1698 21.0197 13.7379C20.9739 14.9708 20.0137 15.9407 18.9469 15.9458L18.9472 15.9487Z"
                            fill="#F2F2F2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_67_1720">
                            <rect width="18" height="19" fill="white" transform="translate(5 5)"/>
                        </clipPath>
                    </defs>
                </svg>

                <span>Anastasiia</span>
            </a>

            <a href="mailto:anastasiia.nastasiuk@gmail.com" class="link-email">anastasiia.nastasiuk@gmail.com</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    mounted() {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                document.querySelector(".header").classList.remove('show');
            } else {
                document.querySelector(".header").classList.add('show');
            }
        });
    },
}
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 46px 0;
    transform-style: preserve-3d;
    transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transition: .4s;
    z-index: 2;

    &.show {
        transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
}

.link-name {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    padding: 5px 15px 5px 5px;
    color: #FFFFFF;
    background-color: #333333;
    border-radius: 80px;
    width: fit-content;
    transition: background-color .3s, color .3s;

    span {
        margin-bottom: 2px;
    }

    svg {
        circle {
            transition: .3s;
        }
    }

    @include hovers {
        background-color: #6FDA44;
        color: #333333;

        svg {
            circle {
                fill: #333333;
            }
        }
    }
}

.link-email {
    position: relative;

    @include hovers {
        &::before {
            height: 3px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #6FDA44;
        transition: height .1s;
    }
}

@include breakpoint(extra-small) {
    .header {
        padding: 17px 0;
    }
}

@include breakpoint(mobile-landscape) {
    .container {
        flex-direction: column;
        gap: 15px;
    }
}
</style>