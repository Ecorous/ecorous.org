import { PUBLIC_BLOG_SERVER_URL } from '$env/static/public'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export async function load(): Promise<PageServerLoad> {
    let res = await fetch(`${PUBLIC_BLOG_SERVER_URL}/posts`)
    if (!res.ok) {
        console.log(res)
        if (res.status < 200 || res.status > 599) { return error(500) }
        // @ts-ignore we know the status will be between 200 and 599. why is there not a better way?
        return error(res.status, await res.json())
    }
    let posts = await res.json()
    console.log(posts)
    return posts
}