import React from 'react';

function page({ params }: { params: { blog: string } }) {
    console.log(params)
    return (
        <div>
            <div>hi amman</div>
            <h1>{params.blog}</h1>
        </div>
    );
}

export default page;