import React, { useEffect, useState } from "react";

function Bar(props) {
    const [Length, setLength] = useState(0);
    const [Width, setWidth] = useState(0);
    const [Color, setColor] = useState("turquoise");

    useEffect(() => {
        setLength(props.Length);
        setWidth(props.Width);
        setColor(props.Color);
    }, [props]);

    return (
        <div
            className="text-center"
            style={{
                backgroundColor: `${Color}`,
                width: `${Width - 6}px`,
                height: `${Length}px`,
                margin: "3px",
                fontSize: "10px",
                transform: `rotate(0deg)`,
                verticalAlign: "10px",
            }}
            onClick={() => {
                console.log(props.Length);
            }}
        ></div>
    );
}

export default Bar;
