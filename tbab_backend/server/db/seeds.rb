# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


sutty = User.create(first_name: "sutty", last_name: "bigo", username: "sutty", password: "bigo", email: "me@me.com")
butty = User.create(first_name: "butty", last_name: "sigo", username: "butty", password: "sigo", email: "be@be.com")
nutty = User.create(first_name: "nutty", last_name: "ligo", username: "nutty", password: "ligo", email: "ne@ne.com")


work_home = Journey.create(journey_name: "work-home", location_1_lat: 51.5184, location_1_long: 0.0889, location_2_lat: 51.4529, location_2_long:0.1477, user_id: 1)
home_work = Journey.create(journey_name: "home-work", location_1_lat: 1.4, location_1_long: 1.8, location_2_lat: 1.9, location_2_long:1.8, user_id: 1)

butty_work_home = Journey.create(journey_name: "Giza", location_1_lat: 51.5184, location_1_long: 0.0889, location_2_lat: 51.4529, location_2_long: 0.1477, user_id: 2)
butty_home_work = Journey.create(journey_name: "liza", location_1_lat: 51.4529, location_1_long: 0.1477, location_2_lat: 51.5184, location_2_long:0.0889, user_id: 2)