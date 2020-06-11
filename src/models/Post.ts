import { Model, Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('postgres://postgres:Tiago2003@localhost:5432/github-music');


class Post extends Model{
  public id!: number
  public userId!: number
  public image!: string | null //Preciso tranformar em um array posterior mente
  public video!: string | null
  public audio!: string | null
  public text!: string | null
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}
Post.init({
  id: {
    type: DataTypes.INTEGER, // you can omit the `new` but this is discouraged
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  video: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  audio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'posts',
});


export default Post