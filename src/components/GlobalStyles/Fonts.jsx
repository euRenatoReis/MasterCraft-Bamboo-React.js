
import { createGlobalStyle } from "styled-components";
import { fundoMain } from "./Colors";

const FontSize = "16px";


export const Fonts = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap');

*{
    font-family: 'Commissioner', sans-serif;]
    font-size: ${FontSize}
}

p{
    color: ${fundoMain};
}

`

