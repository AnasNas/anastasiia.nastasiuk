<template>
    <HeaderComponent/>
    <HeroComponent/>
    <CasesComponent />
    <FooterComponent />
</template>

<script>
import CasesComponent from '@/components/CasesComponent.vue'
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";

export default {
    name: 'App',
    components: {
        HeroComponent,
        HeaderComponent,
        FooterComponent,
        CasesComponent
    }
}
</script>
