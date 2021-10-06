<script>

    export let ingredients;

    let ingredientsArray = ingredients.split('*').slice(1)

    //this all needs styling + some orange styled bullet points for each ingredient.

</script>

<div class="ingredients">
    <h2>Ingredients</h2>
    <ul>
        {#each ingredientsArray as ingredient}
            <li>{ingredient}</li>
        {/each}
    </ul>
</div>

<style>

    .ingredients {
        width: 250px;
        padding: 0 43px 0 0;
    }

    h2 {
        font-size: 1.4em;
    }

    ul {
        padding: 0;
    }

    li {
        list-style-type: none;
        line-height: 1.8em;
    }

    li::before {
        content: ' \00BB';
        color: #ff6200;
        padding-right: 0.5em;
    }

</style>