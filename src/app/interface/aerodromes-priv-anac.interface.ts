export interface AErodromesPrivAnac {
  CodigoOACI: string | null;
  Nome: string | null;
  Municipio: string | null;
  UF: string | null;
  LatGeoPoint: number | null;
  LonGeoPoint: number | null;
  Latitude: string | null;
  Longitude: string | null;
  Altitude: number | null;
  OperacaoDiurna: string | null;
  OperacaoNoturna: string | null;
  Designacao1: string | null;
  Comprimento1: number | null;
  Largura1: number | null;
  Resistencia1: string | null;
  Superficie1: string | null;
}

export interface Updated {
  updated: string;
}