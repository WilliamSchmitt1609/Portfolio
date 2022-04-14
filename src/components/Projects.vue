<template>
    <article v-for="(content, title, index) in articles" :key="index">       
            <div class="detail">
                <h3>{{ title }}</h3>
                    <p>{{ content }}</p>
            </div>
    </article>
</template>

<script>
export default {
    name: "ProjectsList",
    props: ['title'],
    data() {
        return{
            articles: {
            "OKDO": "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
            "Douceur de lire": "blablabla", 
            "Dinoquiz": "Yesyesyes"
            },

        };
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap");
</style>
