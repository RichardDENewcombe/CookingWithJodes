<script>

    export let recipe;
    export let title;
    export let featured_image;
    export let date;

    import Ingredients from '$lib/Ingredients.svelte'
    import Directions from '$lib/Directions.svelte'
    import RecipeDetails from '$lib/RecipeDetails.svelte'

    function parseDate(date) {
        let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        let onlyDate = date.slice(0, 10)
        let dateArray = onlyDate.split('-')

        let month = months[dateArray[1] - 1]
        let day = dateArray[2]
        let year = dateArray[0]

        return month + ' ' + day + ", " + year

    }


    let parsedDate = parseDate(date)

</script>

<div class="container main-content">
    <div class="content-container">
        <h1>{title}</h1>
        <time>{parsedDate}</time>
        <div class="image">
            <img src="{featured_image}" alt="Image: {title}">
        </div>
        <RecipeDetails servings="{recipe.servings}" prep="{recipe.prep}" cook="{recipe.cook}" />
        <div class="recipe-contents">
            <Ingredients ingredients="{recipe.ingredients_markdown}" />
            <Directions directions="{recipe.directions_markdown}" />
        </div>
        <div class="recipe-notes">
            <slot />
        </div>
    </div>

</div>

<style>

    img {
        max-width: 100%;
    }

    .main-content {
        padding: 0 30px 50px 30px;
        display: flex;
    }

    .container {
        max-width: 1100px;
        margin: 0 auto;
    }

    .content-container {
        flex: 1;
    }

    .recipe-contents {
        display: flex;
    }

    .recipe-notes {
        display: flex;
        flex-direction: column;
    }

    time {
        padding: 0 0 20px 0;
        display: block;
        color: #999;
    }

    h1 {
        font-size: 1.8em;
        margin: 0;
        padding: 0;
        line-height: 1.3em;
    }

    @media (max-width: 400px) {
        .recipe-contents {
            flex-direction: column;
        }
    }

</style>