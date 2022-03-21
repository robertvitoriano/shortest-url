import { Optional } from "sequelize/types";

export interface ShortUrlModelAttributes {
  id: number;
  originalUrl: string;
  urlCode: string;
  shortUrl?: string;
}
export interface ShortUrlModelInput extends Optional<ShortUrlModelAttributes, 'id' > {}
export interface ShortUrlModelOuput extends Required<ShortUrlModelAttributes> {}