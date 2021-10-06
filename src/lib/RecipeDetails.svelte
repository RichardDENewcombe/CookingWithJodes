<script>
    export let servings;
    export let prep;
    export let cook;

    import SVGPicker from './SVGPicker.svelte'
</script>


<ul>
    <li><SVGPicker quantity={true} /><span>{servings}</span></li>
    <li><SVGPicker time={true} /><span>{prep}</span></li>
    <li><SVGPicker cook={true} /><span>{cook}</span></li>
</ul>

<style>

ul {
    margin: 0;
    padding: 0;
}

li {
    display: inline-block;
}

span {
    margin: 0 18px 0 3px;
}

</style>