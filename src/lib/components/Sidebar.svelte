<script lang="ts">
    import { FileQuestion, Home, Library, Mail, MessageCircleQuestion, ShieldQuestion } from "lucide-svelte";

    const AVATAR_URL = "https://cdn.ecorous.org/avatars/current_avatar.png";

    let { children } = $props();
</script>

<div class="sidebar">
    {@render children()}
    <br/>
    <br/>
    <a class="sidebar-link" href="/"><Home /> Home</a>
    <br/>
    <br/>
    <a class="sidebar-link" href="/projects"><Library /> Projects</a>
    <br/>
    <br/>
    <a class="sidebar-link" href="/blog"><MessageCircleQuestion /> Blog</a>
    <br/>
    <br/>
    <a class="sidebar-link" href="/contact"><Mail /> Contact</a>
</div>

<style lang="scss">
    @import "$lib/_palette.scss";

    .sidebar-avatar {
        display: flex;
        margin-left: 45px;
        font-size: 150%;
        & > img {
            margin-right: 10px;
            width: 64px;
            height: 64px;
            border-radius: 10px;
        }
        margin-bottom: 40px;
    }

    .sidebar {
        width: 250px;
        height: 100%;
        position: fixed;
        text-align: center;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: $accent0;
        padding: 5px;
    }

    .sidebar-link {
        font-size: 180%;
        color: $text;
        margin-bottom: 10px;
    }

    // Apply the hover animation to links
    a.sidebar-link {
        position: relative;
        text-decoration: none; // Initial state without underline
        transition: 0.3s ease-in-out;

        &:hover {
            &:before {
                content: "";
                position: absolute;
                width: 0;
                height: 3px;
                background-color: $text; // Adjust color as needed
                bottom: 0;
                animation: underlineAnimation 0.3s forwards;
            }
        }
    }

    // Define keyframes for the hover animation
    @keyframes underlineAnimation {
        to {
            width: 100%;
        }
    }
</style>
