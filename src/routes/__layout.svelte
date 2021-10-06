<script>
    import NavBar from '$lib/NavBar.svelte'
    import Header from '$lib/Header.svelte'
    import SideBar from '$lib/SideBar.svelte'
</script>

<svelte:head>
    <title>Cooking With Jodes</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
    </style>
</svelte:head>

<NavBar />
<Header />
<div class="container main-content">
    <slot />
    <SideBar />
</div>
<footer>
    <div class="container">
        <hr />
        © Cooking with Jodes 2021. All rights reserved.
    </div>
</footer>

<style>

    * {
        font-family: 'Fira Sans', sans-serif
    }

    .container {
        max-width: 1100px;
        margin: 0 auto;
    }

    .main-content {
        display: flex;
    }

    @media (max-width: 900px) {
        .main-content {
            flex-direction: column;
            max-width: 800px;
            padding: 10px;
        }
    }

    footer {
        color: #999;
        text-align: center;
        padding: 20px 0;
        font-size: .8em;
    }

    hr {
        border:0 ;
        border-top: 1px solid #eee;
    }

</style>