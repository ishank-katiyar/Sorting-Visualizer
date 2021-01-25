import React, { useEffect, useState } from "react";
import styled from "styled-components";

// const color1 = "#FED54A";
// const color2 = "#FF9347";
const color1 = "#DB0B5F";
const color2 = "#6F00ED";

// https://css-tricks.com/snippets/css/gradient-text/
// https://uicolorpicker.com/gradients
const Div = styled.div`
    background: -webkit-linear-gradient(${color1}, ${color2});
`;

// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;

function Bar(props) {
    const [Length, setLength] = useState(0);
    const [Width, setWidth] = useState(0);
    const [Color, setColor] = useState("#23C4ED");
    // turquoise

    useEffect(() => {
        setLength(props.Length);
        setWidth(props.Width);
        setColor(props.Color);
    }, [props]);

    return (
        <div>
            <div
                className="text-center border border-primary rounded"
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
                    console.log(Length);
                }}
            ></div>
        </div>
    );
}

export default Bar;
