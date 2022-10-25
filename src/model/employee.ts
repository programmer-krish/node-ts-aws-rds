/**
 * Modeule - Employee Schema
 */

import { Table, Model, Column, DataType } from "sequelize-typescript";
@Table({
  timestamps: true,
  tableName: "employee",
})
export class Employee extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
  })
  number!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  gender!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  photo!: string;
}
