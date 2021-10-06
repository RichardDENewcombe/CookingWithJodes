<script context="module">
    export async function load( { fetch } ) {
        const res = await fetch('./recipes/posts.json');
        const { posts } = await res.json();
        return {
            props: { posts }
        }
    }
</script>

<script>
    export let posts;
    import HomeRecipeEntry from '$lib/HomeRecipeEntry.svelte'

    //Pagination
    let pageSize = 5;
    let pageIndex = 0;
    let pageNumber = 0;
    $: visiblePosts = posts.slice(pageIndex, pageIndex + pageSize)
    $: totalPages = Math.ceil(posts.length / pageSize)
    
    function scroll() {
        window.scrollTo({
            top: 0,
            left: 0,
            behaviour: 'smooth'})
    }

    function first() {
        pageIndex = 0;
        pageNumber = 0;
        scroll();
    }

    function last() {
        pageNumber = totalPages - 1;
        pageIndex = pageNumber * 5;
        scroll();
    }
    
    function nextPage() {
        if (pageNumber == totalPages - 1) {
            console.log('early return');
            return
        }
        pageIndex = pageIndex + pageSize;
        pageNumber++;
        scroll();
    }

    function previousPage() {
        if (pageNumber == 0) {
            console.log('early return');
            return
        }
        pageIndex = pageIndex - pageSize;
        pageNumber--;
        scroll();
    }

</script>

<div class="container">
    {#each visiblePosts as post}
        <article>
            <HomeRecipeEntry {post} />
        </article>
    {/each}
    <div class="wrapper">
        {#if pageNumber != 0}
            <button class="first" on:click={() => first()}>&laquo;</button>
            <button on:click={() => previousPage()}>&lsaquo;</button>
        {:else}
            <button class="first unclickable">&laquo;</button>
            <button class="unclickable">&lsaquo;</button>
        {/if}
        <p>{pageNumber + 1} of {totalPages}</p>
        {#if pageNumber != totalPages - 1}
            <button on:click={() => nextPage()}>&rsaquo;</button>
            <button class="last" on:click={() => last()}>&raquo;</button>
        {:else}
            <button class="unclickable">&rsaquo;</button>
            <button class="last unclickable">&raquo;</button>
        {/if}
    </div>
</div>

<style>

    .wrapper {
        display: flex;
        align-items: center;
    }

    button {
        text-decoration: none;
        border: 1px solid black;
        text-align: center;
        cursor: pointer;
        padding: 10px;
        display: inline-flex;
        align-items: flex-end;
        margin: 10px;
        font-size: .8em;
        background-color: white;
        color: #ff2600;
    }

    .unclickable {
        pointer-events: none;
        color: grey;
    }

    .container {
        display: flex;
        flex-direction: column;
        padding: 0 30px 50px 30px;
        max-width: 1100px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }

    .first, .last {
        margin: 0px;

    }

</style>