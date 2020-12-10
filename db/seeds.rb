# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  {name: "鈴木"},
  {name: "田中"},
  {name: "佐藤"}
  ])

Book.create([
  {title: "HTML", body: '初心者'},
  {title: "CSS", body: '初心者＋＋'},
  {title: "Go", body: '初心者から中級者'},
  ])
