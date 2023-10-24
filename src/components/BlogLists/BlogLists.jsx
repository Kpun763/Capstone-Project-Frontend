import React from "react";

const BlogLists = ({title, content}) => {
    return ( 
        <div>
            <div>
                <h3>
                    {title}
                </h3>
            </div>
            <div>
                <p>
                    {content}
                </p>
            </div>
        </div>
     );
}
 
export default BlogLists;