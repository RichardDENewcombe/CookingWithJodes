<script context="module">
    export async function load( { fetch }) {
        const res = await fetch('./recipes/posts.json');
        const { posts } = await res.json();
        return {
            props: { posts }
        }
    }
</script>

<script>
    import RecipeSelection from '$lib/RecipeSelection.svelte'
    export let posts;

    //create blank array, forEach loop over JSON to get the categories array and forEach that into it.
    let categories = [];

    posts.forEach(element => element.categories.forEach(element => categories.push(element)))

    //filter the categories array to unique values and store in recipeCategory
    let recipeCategory = categories.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })

</script>

<div class="recipe-links">
    {#each recipeCategory as category}
        <a href="#{category}">{category}</a>
    {/each}
</div>

<div class="container">
    {#each recipeCategory as category}
        <RecipeSelection {posts} {category} />
    {/each}
</div>

<style>
    .container {
        flex: 1
    }

    a {
        text-decoration: none;
        border: 1px solid black;
        text-align: center;
        cursor: pointer;
        padding: 2px;
        margin: 2px;
        font-size: .8em;
        background-color: white;
        color: #ff2600;
    }

    a:visited {
        color: #ff2600;
    }

    .recipe-links {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 5%;
        top: 10%;
    }

    @media (max-width: 1800px) {
        .recipe-links {
            display: none;
        }
    }
</style>