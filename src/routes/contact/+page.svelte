<script>
    import { Mail } from "lucide-svelte";

</script>
<h2>You can contact me using:</h2>

<p><Mail/> Email: <a href="mailto:me@ecorous.org">me@ecorous.org</a></p>
<p>Discord: <code>ecorous</code></p>
<p><img width="24" height="24" src="/mastodon.svg" alt="Mastodon logo"> Mastodon: <a href="https://blobfox.coffee/@ecorous">@ecorous@blobfox.coffee</a></p>

<style lang="scss">
    @import "$lib/style.scss";

    code {
        font-weight: bold;
    }
    a {
        color: $text;
        text-decoration: none;
        font-weight: bold;
        &:hover {
            transition: 1s ease-in-out;
            text-decoration: underline;
        }
    }
    p {
        font-size: larger;
    }
</style>