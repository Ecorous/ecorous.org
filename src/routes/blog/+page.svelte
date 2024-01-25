<script lang="ts">
    export let data: {posts: [{id: string, title: string, content: string, createdAt: string, updatedAt: string}]}
</script>

<h1>Blog</h1>

{#each data.posts as post}
    <a class="postLink" href="/blog/post/{post.id}">
        <h2>{post.title}</h2>
    </a>
    <p>{post.content.substring(0, 20) + "..."}</p>
{/each}
<style lang="scss">
    @import '$lib/_palette.scss';
    .postLink {
        color: $text;
        text-decoration: none;
        transition: 1s;
        &:hover {
            color: $text;
            text-decoration: underline;
        }
    }
    * {
        &:link {
            color: $text;
            &:visited {
                color: $text;
            }
        }
    }
</style>