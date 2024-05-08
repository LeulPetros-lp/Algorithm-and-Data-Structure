const displayLikes = (users_like) => {


    let message  = ""

    if(users_like.length === 0) {
        message = "No one liked this post, yet"
    } else if(users_like.length === 1) { 
        message= `${users_like[0]} liked your post`
    } else if(users_like.length === 2) {
        message= `${users_like[0]} and ${users_like[1]} liked the post`
    } else if(users_like.length === 3) {
        message = `${users_like[0]}, ${users_like[1]} and ${users_like[2]} have liked your post`
    } else { 
        message = `${users_like[0]}, ${users_like[1]},${users_like[2]} and  more .... have liked your post`
    }




    return message
}


module.exports = displayLikes;