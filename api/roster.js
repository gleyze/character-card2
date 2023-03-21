export default async function handler(request, res){

    const roster = [
        {
            "characterName": "Shiny Fuecoco",
            "characterDetails": "Shiny fuecoco is pink. what a slay. fuecoco loves fire and eating and chomping. he has no thought behind his eyes. not one. fuecoco best boy!!!",
            "img": "https://www.serebii.net/Shiny/SV/new/909.png",
            "subtitle": "#fuecocoslay"
        },
        {
            "characterName": "Pikachu",
            "characterDetails": "Yellow Mouse!",
            "img": "https://p.kindpng.com/picc/s/190-1905062_pikachu-laying-down-hd-png-download.png",
            "subtitle": "#mousemoment"
        },
        {
            "characterName": "jigglypuff",
            "characterDetails": "menace",
            "img": "https://png.pngitem.com/pimgs/s/135-1357821_jigglypuff-smash-bros-brawl-hd-png-download.png",
            "subtitle": "#pinkball"
        }
    
    ];

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
    
}


