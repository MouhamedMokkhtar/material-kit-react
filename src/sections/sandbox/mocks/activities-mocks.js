import { faker } from "@faker-js/faker";
import { sample } from "lodash";



export const sandMocks = [...Array(24)].map((_, index) => ({
    reference:  faker.number.int({min: 1111111111111111, max: 9999999999999999}),
    client_name:  faker.person.fullName(),
    amount:  faker.number.int({min: 100, max: 999}) + ".000 DT",
    cin:  `${faker.number.int({min:0,max:1})}${faker.number.int({min: 111111, max: 999999})}`,
    matricule:  faker.string.nanoid(12),
    code_client: faker.string.nanoid(12),
    numero_contract:  faker.number.int({min: 11111111, max: 99999999}),
    status: sample(["Disponible", "Indisponible"]),
  }));