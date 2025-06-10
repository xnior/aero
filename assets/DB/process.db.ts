import {
  AErodromesPrivAnac,
  Updated
} from "../../app/interface/aerodromes-priv-anac.interface";
import { databasePublic } from "./publ.db";
import { databasePriv } from "./priv.db";


export const UpdatedDate: Updated = { updated: "10/06/2025" };
export const AERODROMES_ANAC_PRIVATE: AErodromesPrivAnac[] = [ ...databasePriv, ...databasePublic ];


