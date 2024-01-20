import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "status", pathMatch: "full" },
  {
    path: "metar",
    loadComponent() {
      return import("./pages/metar/metar.component").then(
        (res) => res.DisplayComponent
      );
    },
    title: "METAR - Sistema Aeronáutico",
  },
  {
    path: "status",
    loadComponent() {
      return import("./pages/status/status.component").then(
        (res) => res.StatusComponent
      );
    },
    title: "Status - Sistema Aeronáutico",
  },
  {
    path: "priv-anac",
    loadComponent() {
      return import("./pages/aerodromes/priv-anac/priv-anac.component").then(
        (res) => res.PrivAnacComponent
      );
    },
    title: "Aerodromos Privados Brasil - Sistema Aeronáutico",
  },{
    path: "geo",
    loadComponent() {
      return import("./pages/geo/geo.component").then(
        (res) => res.GeoComponent
      );
    },
    title: "Calculo Rotas - Sistema Aeronáutico",
  },{
  path: "**",
  redirectTo: "metar",
  pathMatch: "full",
},
];
