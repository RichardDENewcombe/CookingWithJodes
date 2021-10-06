export const get = async () => {
    let posts = await Promise.all(
        Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
            const { metadata } = await page();
            const filename = path.split("/").pop();
            return { ...metadata, filename };
        })
    );

    return {
        status: 200,
        body: { posts },
    }
}