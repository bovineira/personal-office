/**
 * Coordenadas da ficha oficial do Google Business "Personal Office" (Av. Eng. Caetano
 * Álvares, 530 - Casa Verde, São Paulo - SP, 02520-310). Usamos lat/lng em vez do
 * endereço em texto porque o geocoder do Google resolvia esse texto para o bairro
 * errado (Limão, CEP 02546-000).
 */
export const OFFICE_COORDINATES = "-23.5091503,-46.6703977";
export const OFFICE_MAP_LABEL = "Personal Office";
export const OFFICE_ADDRESS_SHORT = "Av. Engº Caetano Álvares, nº 530 – Casa Verde – São Paulo, SP – CEP 02520-310";

export const mapsEmbedSrc = `https://maps.google.com/maps?q=${OFFICE_COORDINATES}(${encodeURIComponent(
  OFFICE_MAP_LABEL
)})&hl=pt-BR&z=17&ie=UTF8&output=embed`;
