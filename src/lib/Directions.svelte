<script>

    export let directions;

    let directionsArray = directions.split('- ').slice(1)
    //This currently splits on "#." but this is causing an issue with splitting early when sentences finish with stuff like "Gas Mark 5."
    //Potentially change the start of the directions to "#-" to avoid this issue.

    for (let i = 0; i < directionsArray.length; i++) {
        directionsArray[i] = directionsArray[i].replace(/[0-9]{1,3}C/g, function addDegreeSymbol(x) {return x.replace("C", "°C");})
    }

    //this all needs styling + some orange styled bullet points for each ingredient.

    //refind regex for removing #. so that I can use it as a find/replace for all the .md files.
    //^(\d+)\.

</script>

<div class="directions">
    <h2>Directions</h2>
    <ol>
        {#each directionsArray as direction}
            <li>{direction}</li>
        {/each}
    </ol>
</div>

<style>

    .directions {
        flex: 1;
    }

    ol {
        padding: 0;
        margin: 20px 0 0 0;
    }

    li {
        counter-increment: step-counter;
        list-style-type: none;
        position: relative;
        margin-left: 34px;
        line-height: 1.8em;
        margin: 20px 0 0 0;
    }

    li::before {
        content: counter(step-counter);
        margin-right: 0px;
        background-color: #ff6200;
        color: white;
        font-size: .7em;
        position: absolute;
        left: -34px;
        top: -2px;
        width: 25px;
        text-align: center;
    }
    
</style>