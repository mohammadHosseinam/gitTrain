import React from 'react';

function page() {
    
    return (
        <div>
            <h1>sign up</h1>
            <form action="submit">
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" placeholder='inter your name'/>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" placeholder='inter your password'/>
                <label htmlFor="repassword">reapit password</label>
                <input type="password" name="repassword" id="repassword" placeholder='inter your password again'/>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default page;