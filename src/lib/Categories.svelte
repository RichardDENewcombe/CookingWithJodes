<script>

    export let categories;

</script>

<ul>
    {#each categories as category}
        <li>{category}</li>
    {/each}
</ul>