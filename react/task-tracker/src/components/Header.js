import Button from "./Button"




const Header = ({title = "Task Tracker", toggleShow, showAddTask}) => {

    const handleClick = () => {
        console.log("Click with handleClick from Header")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
            color={showAddTask ? 'red' : 'purple'} 
            text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar" }
            toggleShow={toggleShow}/>
        </header>
    )
}

/* Header.defaultProps = {
    title: "Task Tracker",
}
 */
export default Header
