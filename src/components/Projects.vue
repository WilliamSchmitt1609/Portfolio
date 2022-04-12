<template>
    <article v-for="(title, index) in titles" :key="index">
        <div class="detail">
            <h3>{{ title }}</h3>
            <p>{{ content }}</p>
        </div>
    </article>
</template>

<script>
export default {
    name: "ProjectsList",

    data() {
        return{
            titles: ["OKDO", "Douceur de lire", "Dinoquiz"],
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        };
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap");
</style>
