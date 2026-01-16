export type InfoProduct = {
  id: number;
  headline: string;
  intro: string;
  cost: string;
  link: string;
  more: string;
};

export const infoProducts: InfoProduct[] = [
     {
        "id": 1,
        "headline": "Firma",
        "intro": "Ønsker du fotografier av dine produkter, personalteam, linkedIn-portretter, firmafest eller kanskje noe helt annet? Ta kontakt for en uforpliktende prat",
        "cost": "7.000,-",
        "link": "/kontakt-oss",
        "more": "Kontakt oss"
        },
        {
         "id": 2,
         "headline": "Privat",
         "intro": "Ta gjerne kontakt med oss om du ønsker analoge bilder fra en stor eller liten begivenhet, parbilder, gravidfoto, bilder av den bittelille, de litt større eller hva med hele familien? Dåp/navnfest, konfirmasjon, forlovelse eller midtlivskrisen? We got you. ",
         "cost": "6.000,-",
         "link": "/kontakt-oss",
         "more": "Kontakt oss"
         },
         {
        "id": 3,
        "headline": "Bryllup",
        "intro": "Med en forkjærlighet for det analoge formatet tilbyr vi en unik måte å fange øyeblikkene på som vil ta dere med tilbake i tid.",
        "cost": "12.500,-",
        "link": "/bryllup",
        "more": "Se mer"
        }
];
