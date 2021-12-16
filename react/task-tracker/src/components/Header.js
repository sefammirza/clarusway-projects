import Button from "./Button"




const Header = ({title}) => {

    const handleClick = () => {
        console.log("Click with handleClick from Header")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
            color="purple" 
            text="Show Add Task Bar" 
            handleClick={handleClick}/>
        </header>
    )
}

/* Header.defaultProps = {
    title: "Task Tracker",
}
 */
export default Header
