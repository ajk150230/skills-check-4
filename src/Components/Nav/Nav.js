import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to='dashboard'>
            <button>Home</button>
            </Link>
            <Link to='/new'>
            <button>New Post</button>
            </Link>
            <Link to='/'>
            <button>Logout</button>
            </Link>
        </div>
    )
}

const mapStateToProps = reduxState =>({user: reduxState.user})

export default connect(mapStateToProps, {})(Nav)