<script>

    export let category;
    export let posts;

    //need to sort posts down to the the ones which match the category
    let filteredRecipes = posts.filter(function(item) {
        return item.categories.includes(category);
    })

</script>

<h2 id="{category}">{category}</h2>
<div class="recipes-container">
    {#each filteredRecipes as recipe}
        <div class="recipe" style="background-image: url('{recipe.featured_image}'">
            <a href="./recipes/{recipe.slug}">
                <span>{recipe.title}</span>
            </a>
        </div>
    {/each}
</div>

<style>

    h2 {
        font-size: 1.4em;
    }

    .recipes-container {
        display: flex;
        flex-wrap: wrap;
    }

    .recipe {
        flex: 1 0 300px;
        height: 200px;
        display: inline-block;
        background-position: center;
        background-size: cover;
        margin: 5px 7px;
    }

    a {
        width: 100%;
        height: 100%;
        display: block;
        background: rgba(0,0,0,0.2);
        color: #fff;
        text-decoration: none;
        text-align: center;
        position: relative;
        transition: all 0.2s ease;
        font-size: 1.1em;
        font-weight: 700;

    }

    span {
        position: absolute;
        bottom: 5px;
        width: 100%;
        left: 0;
        text-shadow: 1px 1px 1px #000
    }

</style>