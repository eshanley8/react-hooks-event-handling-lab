// Code Keypad Component Here

function Keypad (){
    function handleChange() {
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={handleChange} type="password" placeholder="Entering password..."/>
        </div>
    )
}

export default Keypad;