function TopBarItem({icon}) {

    return (
        <div className="topbar-item ">
            <button className="topbar-button" >

                <div className="topbar-icon">{icon} </div>
            </button>
        </div>
    )
}

export default TopBarItem
