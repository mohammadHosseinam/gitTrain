import React from 'react';

function page() {
    
    return (
        <div>
            <h1>log in</h1>
            <form action="submit">
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" placeholder='inter your name'/>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" placeholder='inter your password'/>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default page;