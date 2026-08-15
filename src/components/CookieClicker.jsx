import { useState } from "react";
import styled from "styled-components";

const ClickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: fit-content;
`;

const Stats = styled.span`
    font-family: monospace;
    font-weight: bold;
    font-size: 32px;
`;

const Button = styled.button`
    width: 100px;
    height: 100px;

    img { width: 100%; }
`;

export default function CookieClicker() {
    const [points, setPoints] = useState(0);

    return (
        <ClickerContainer>
            <Stats>{points}</Stats>
            <Button onClick={() => setPoints(points => points + 1)}>
                <img src="cookie.png"></img>
            </Button>
        </ClickerContainer>
    );
}