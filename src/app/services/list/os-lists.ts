import { IItem } from '../../interfaces/os-iitem';
import { Item } from '../../components/os-item';



// export const LIST1: IItem[] = [
//     new Item("Contemporary Server-side Microsoft Technology Expertise (c#/ASP.NET, MVC, EF)","Microsoft Stack"),
//     new Item("Front-end technologies (Angular/typescript, html5, jquery, less/sass/css)","Front End Web Design"),
//     new Item("Data-Centric Application Design using Microsoft SQL Server technologies","Data-Driven Design"),
//     new Item("ERM/CRM Design from Database to User Experience","Custom Design"),
// ];

export const LISTS = (listType:string) : IItem[] =>{
    if(listType === null || listType === undefined) {
        console.log("List type not provided" + listType);
        listType = "default";
    }
    //console.log("list type: " + listType);

    switch(listType.toLowerCase()){
        case "main-page":
            return [
                new Item("Contemporary Server-side Microsoft Technology Expertise (c#/ASP.NET, MVC, EF)","Microsoft Stack"),
                new Item("Front-end technologies (Angular/typescript, html5, jquery, less/sass/css)","Front End Web Design"),
                new Item("Data-Centric Application Design using Microsoft SQL Server technologies","Data-Driven Design"),
                new Item("ERM/CRM Design from Database to User Experience","Custom Design"),
            ];
        case "page1":
            return [
                //     {displayText: "Whammy Jammy",state:"inactive", title:"Whammy Jammy"},
                new Item("Page 1", "Go Home"),
                new Item("Jam", "Go Home")
            ];
        case "page2":
            return [
                new Item("Page 2", "Go Home"),
                new Item("Page 2 with a bit o' Jam", "Go Home")
            ];
        case "main1":
            return [
                new Item("Main1", "Go Home")
            ];
        case "default":
            return [
                new Item("", "")
            ];
        case "error":
            return [
                new Item("Error - Go Away", "Go Home")
            ];
    }

}

// export const dy:string = "Crap";
// export const dx = (str:string) =>{ return str;}