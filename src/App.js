import React, { useState, useEffect, useRef } from "react";
import { Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import MergeSort from "./Component/SortingAlgorithms/MergeSort";
import Bar from "./Component/Bar";
import SecondNav from "./Component/BelowNav";
import Nav from "./Component/Nav";

function rnd() {
    console.assert(
        arguments[1] >= arguments[0],
        "First arguments should be less or equal to than second argument in Rnd function"
    );

    return (
        arguments[0] +
        Math.floor(Math.random() * (arguments[1] - arguments[0]) + 1)
    );
}

function Get_Bar_Count() {
    console.assert(arguments.length === 1, "Incorrect signatres");

    let Min_Width = 15;
    let Max_Bar_Count = Math.ceil(arguments[0] / Min_Width);

    console.assert(Max_Bar_Count >= 5, { Max_Bar_Count: Max_Bar_Count });

    return rnd(5, Max_Bar_Count);
    // return 100;
    // return Max_Bar_Count;
}

function App() {
    const componenetRef = useRef(null);
    const [arrayOfHeights, setarrayOfHeights] = useState([]);

    useEffect(() => {
        console.log("App compnent Mounted");
        UpdatearrayOfHeights();
        return () => console.log("App component UnMounted");
    }, []);

    useEffect(() => {
        const handleResize = () => {
            UpdatearrayOfHeights();
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const UpdatearrayOfHeights = (...parameter) => {
        if (parameter.length === 1 && Array.isArray(parameter[0])) {
            setarrayOfHeights(parameter[0]);
            return;
        }
        let barLength = Get_Bar_Count(componenetRef.current.offsetWidth);
        let newarrayOfHeights = [];
        for (let i = 0; i < barLength; i++) {
            newarrayOfHeights.push(rnd(10, 500));
        }
        setarrayOfHeights(newarrayOfHeights);
    };

    return (
        <div>
            <div>
                <Nav />
                <SecondNav UpdatearrayOfHeights={UpdatearrayOfHeights} />
            </div>
            <Container>
                <Row
                    ref={componenetRef}
                    style={{
                        transform: `rotateX(180deg)`,
                        height: `500px`,
                        marginTop: `50px`,
                    }}
                >
                    {arrayOfHeights.map((height) => {
                        return (
                            <Bar
                                Width={Math.floor(
                                    componenetRef.current.offsetWidth /
                                        arrayOfHeights.length
                                )}
                                Length={height}
                                key={rnd(1, 1e9)}
                            />
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default App;
