import { faker } from "@faker-js/faker";
import { sample } from "lodash";



export const billsMock = [...Array(24)].map((_, index) => ({
    FSP:  `${faker.number.int({ min: 100, max: 999 })} - ${sample(['ATTIJARI', 'ZITOUNA','POSTE','BANKA','BNA'])}`,
    ["Catégorie de paiement"]: `P${faker.number.int({ min: 1, max: 99 })} - Banque`,
    ["Application de paiement"]: `${faker.number.int({ min: 100, max: 999 })} - ${sample(['ATTIJARI', 'ZITOUNA','POSTE','BANKA','BNA'])}`,
    ["ETAT"]: sample(["Payée", "En attente", "Refusée"]),
    ["Canal de paiement"]: `C0${faker.number.int({ min: 1, max: 3 })} - ${sample(['WEB', 'MOBILE','DESKTOP'])}`,
    ["Mode de paiement"]: sample(["W-Paiement Mobile", "W-Paiement Web"]),
    ["Compte source"]: `0${faker.number.int({ min: 1, max: 9 })}*************`,
    ["Compte destination"]: `Agg-*************${faker.number.int({ min: 1, max: 9 })}`,
    ["Référence Autorisation"]: faker.number.int({min: 11111111, max: 99999999}),
    ["Facturier"]:`${faker.number.int({ min: 600, max: 699 })} - ${sample(['TOPNET', 'GNET','OOREDO'])}`,
    ["Date / heure de paiement"]:new Date(faker.date.recent(10)).toLocaleDateString(),
    id: faker.string.uuid(),
    ["Réference"]: faker.string.uuid(6),
    ["Numéro de réservation"]: faker.number.int({min: 11111111, max: 99999999}),
    ["Montant"]: faker.number.int({min: 11111111, max: 99999999}) + " DT"

  }));