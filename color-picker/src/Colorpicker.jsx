import {useState} from 'react'

export default function Colorpicker(){

    const [color,setColor] = useState("#FFFFFF");

    function handlecolorChange(event){
        setColor(event.target.value);
    }


return(<>
        <div className='color-picker-container'>
            <h1>Color picker</h1>
            <div className='color-display' style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>

            <label>Select a color : </label>
            <input type="color" value={color} onChange={handlecolorChange}/>
        </div></>);
}