<template>
    <div>
        <searchHeader></searchHeader>
        <searchList></searchList>
    </div>
</template>

<script>
    import searchHeader from './components/searchHeader'
    import searchList from './components/searchList'
    export default {
        name: "Search",
        components:{
            searchHeader,
            searchList
        }
    }
</script>

<style scoped>

</style>