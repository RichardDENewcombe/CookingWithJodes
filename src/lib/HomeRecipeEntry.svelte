<script>

    export let post

    function parseDate(date) {
        let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        let onlyDate = date.slice(0, 10)
        let dateArray = onlyDate.split('-')

        let month = months[dateArray[1] - 1]
        let day = dateArray[2]
        let year = dateArray[0]

        return month + ' ' + day + ", " + year

    }


    let date = parseDate(post.date)


</script>

<h1><a href="./recipes/{post.slug}">{post.title}</a></h1>
<time>{date}</time>

<img src="{post.featured_image}" alt="image: {post.title}"/>
<p>
    <a class="button" href="./recipes/{post.slug}">View Recipe</a>
</p>
<style>

    h1 {
        font-size: 1.8em;
        margin: 0;
        padding: 0;
        line-height: 1.3em;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    a:hover {
        text-decoration-line: underline;
    }

    time {
        padding: 0 0 20px 0;
        display: block;
        color: #999;
    }

    a.button {
        text-decoration: none;
        border: 1px solid black;
        text-align: center;
        cursor: pointer;
        padding: 10px 10px;
        display: inline-flex;
        align-items: flex-end;
        margin: 0;
        font-size: .8em;
    }

    img {
        max-width: 100%;
    }

</style>