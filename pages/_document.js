import { ColorModeProvider, ColorModeScript } from "@chakra-ui/react";
import NextDocument, {Html,Main,Head,LaubnBextScript, NextScript} from "next/document";
import theme from "../libs/theme";

export default class Document extends NextDocument{
    render(){
        return(
            <html lang="en">
                <Head/>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}