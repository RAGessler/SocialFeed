//The layout and display of a single post
const PostOutline = (props) => {
    return (
        <div className="Post Container">
            {props.parentPosts.map((element) => {
                return(
                    <div>
                        <header>{element.name}</header>
                        <body>{element.body}</body>
                        <footer className="Buttons">
                            <button>Like</button>
                            <button>Dislike</button>
                        </footer>
                    </div>
                )
            })}
        </div>
    )
}
export default PostOutline
