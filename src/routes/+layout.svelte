<script lang="ts">
    import Sidebar from "$lib/components/Sidebar.svelte";
    import "$lib/style.scss"
    import { Menu } from "lucide-svelte";

    let sidebar = true;
</script>



{#if sidebar}
    <Sidebar><button on:click={ () => sidebar = !sidebar }><Menu/></button></Sidebar>
    <style lang="scss">
        .main {
            margin-left: 300px;
        }
    </style>

{:else}
<button on:click={ () => sidebar = !sidebar }><Menu/></button>
{/if}
<div class="main">
    <slot/>
</div>
