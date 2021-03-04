import { Menu } from './os-menu';
import { IMenu } from '../../interfaces/os-imenu';


export const MENUS: IMenu[] = [
    new Menu("Home", "Home", "Go Home"),
    new Menu("Introduction", "Introduction", "View an introduction"),
    new Menu("Page 1", "Page1", "Go to page 1"),
    new Menu("Page 2", "Page2", "Go to page 2")
];


