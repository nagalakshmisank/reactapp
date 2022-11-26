import React, { useState, useEffect } from 'react';
function Deletemethod() {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', 
        { method: 'DELETE' })
            .then(() => setStatus('Delete successful'));

    }, []);

    return (
        <div>
            <h5>DELETE Request with React Hooks</h5>
            <div>
                Status: {status}
            </div>
        </div>
    );
}

 export default Deletemethod;