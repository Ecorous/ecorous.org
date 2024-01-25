<script lang="ts">
    import moment from 'moment'
    // @ts-ignore
    import mdit from 'markdown-it' 
    import hljs from 'highlight.js';
    import { parse } from 'svelte/compiler';

    const md = mdit({
        html: true,
        linkify: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) {}
            }

            return ''; // use external default escaping
        }
    })

    // fetch the post with the given id
    export let data: {id: string, title: string, content: string, createdAt: string, updatedAt: string};
    function toRelative(iso: string) {
        return moment(iso).fromNow()
    }

    let created = toRelative(data.createdAt)
    let updated = toRelative(data.updatedAt)
    let createUpdate: string;
    if (created === updated) {
        createUpdate = `Posted ${created}`
    } else {
        createUpdate = `Posted ${created}, updated ${updated}`
    }
</script>

<h1 class="postTitle">{data.title}</h1>
<p class="time"><img class="postAuthor" alt="Avatar for Ecorous" src="https://cdn.ecorous.org/avatars/current_avatar.png"> {createUpdate}</p>
{@html md.render(data.content)}

<style lang="scss">
    * {
        text-align: left;
    }

    .postTitle {
        font-size: 4em;
        padding: 0;
        margin: 0;
    }

    .time {
        font-size: 0.8em;
        font-style: italic;
    }

    .postAuthor {
        width: 32px;
        height: 32px;
        border-radius: 20px;
    }
</style>