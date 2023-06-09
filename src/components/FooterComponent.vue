<template>
    <div class="footer">
        <a href="mailto:malah.rc@gmail.com" class="main-title">
            <div class="container">
                <span>Let's talk</span>
                <svg class="desktop" width="440" height="96" viewBox="0 0 440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M391.828 0.171421L439.657 47.9999L391.828 95.8283L386.172 90.1715L424.343 51.9999L-4.53099e-06 51.9998L-3.83161e-06 43.9998L424.343 43.9999L386.172 5.82827L391.828 0.171421Z" fill="#6FDA44"/>
                </svg>
                <svg class="mobile" width="79" height="33" viewBox="0 0 79 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.2678 32.5356L78.5355 16.2677L62.2678 -4.41474e-05L58.7322 3.53549L68.9645 13.7677L1.64074e-06 13.7677L1.20363e-06 18.7677L68.9645 18.7677L58.7322 29.0001L62.2678 32.5356Z" fill="#6FDA44"/>
                </svg>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style scoped lang="scss">
.main-title {
    display: block;
    padding: 43px 0;
    background-color: #333333;
    transition: background-color .2s;

    @include hovers {
        background-color: #6FDA44;
        span {
            color: #333333;
        }

        svg {
            path {
                stroke: #333333;
                fill: #333333;
            }
        }
    }

    span {
        display: inline-block;
        font-weight: 400;
        transform: translateY(10px);
        color: #6FDA44;
        transition: color .2s;
    }

    svg {
        &.mobile {
            display: none;
        }

        path {
            transition: .2s;
        }
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @include breakpoint(small) {
        span {
            font-size: 100px;
        }

        svg {
            max-width: 300px;
        }
    }

    @include breakpoint(extra-small) {
        padding: 28px 0;

        span {
            font-size: 50px;
            transform: translateY(3px);
        }

        svg {
            &.mobile {
                display: block;
            }
            &.desktop {
                display: none;
            }
        }
    }
}
</style>