<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import "$lib/style.scss"
</script>

<style lang="scss">
    .main {
        margin-left: 300px;
    }
</style>

<Sidebar/>
<div class="main">
    <slot/>
</div>
