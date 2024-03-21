import { Column, DataType, Model, Table } from "sequelize-typescript";

interface userCreationAttr {
  email: string;
  password: string;
  phone: string;
}

@Table({ tableName: "user" })
export class User extends Model<User, userCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;
}
