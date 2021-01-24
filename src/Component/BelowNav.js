import React from "react";
import { Button, Container, Row } from "react-bootstrap";

function SecondNav(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Button onClick={props.UpdatearrayOfHeights}>
                        Generate New Array
                    </Button>
                    {/*
                    <Button onClick={props.FlipSort}>
                        {props.SortState === true
                            ? "Pause Sorting"
                            : "Continue Sorting"}
                    </Button>
                    */}
                </Row>
                <Row>
                    <Button>Merge Sort</Button>
                </Row>
            </Container>
        </div>
    );
}

export default SecondNav;
