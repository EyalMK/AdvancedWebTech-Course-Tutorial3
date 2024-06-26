import {
    ButtonElement,
    Menu,
    SVG,
    ThemeHandler,
    Title
} from "./classes";
import { renderCalculator } from "./pages";

export const model = {
    "menu-container": [
        // Menu classes
        new Menu()
    ],
    "app-children": [
        new Title("Calculator", "text-3xl border-b-[10px] border-blue-300 pb-4")
    ],
    "content": [
        renderCalculator()
    ]
}