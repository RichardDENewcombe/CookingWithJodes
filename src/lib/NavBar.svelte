<script>

    import {page} from '$app/stores'

</script>

<nav>
    <a class="{$page.path === "/" ? 'active': ''}"href="/">HOME</a>
    <a class="{$page.path.includes("about") ? 'active': ''}" href="/about">ABOUT</a>
    <a class="{$page.path.includes("recipes") ? 'active': ''}" href="/recipes">RECIPES</a>
</nav>

<style>

    nav {
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: center;
        background: rgba(255, 255, 255, .9);
        z-index: 999;
    }

	a {
		display: inline-block;
		text-decoration: none;
		padding: 20px 15px;
		color: rgb(154, 135, 127);
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: .9em;
        font-family: 'Fira Sans', sans-serif
    }

	.active {
			color: #ff6200;
    }

    a:hover {
			color: #000;
    }

</style>