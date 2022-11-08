import React, {useState, useEffect} from "react";
import axios from 'axios'

function Shopcard() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
            setPosts(res.data)
        }).catch(err => {
            console.log(err)
        })
    })

    return( 
        <div>
            {
                    posts?.map(shop=> <p key={shop.id}> {shop.body}</p>)
            }
        </div>
    )

}

export default Shopcard