import type { PageServerLoad } from './$types.js';
import { PUBLIC_BLOG_SERVER_URL } from '$env/static/public'
import { error } from '@sveltejs/kit';


export async function load( { params } ): Promise<PageServerLoad> {
    let res = await fetch(`${PUBLIC_BLOG_SERVER_URL}/posts/${params.id}`)
    if (!res.ok) {
        console.log(res)
        if (res.status < 200 || res.status > 599) { return error(500) }
        // @ts-ignore we know the status will be between 200 and 599. why is there not a better way?
        return error(res.status, await res.json())
    }
    let post = await res.json()
    console.log(post)
    return post
}