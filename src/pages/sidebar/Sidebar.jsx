import './Sidebar.css'

export default function Sidebar({isOpen, toggleSidebar}) {

    return(
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleSidebar}>Close Sidebar</button>
            <div>HELLO</div>
        </div>
        
    )
}