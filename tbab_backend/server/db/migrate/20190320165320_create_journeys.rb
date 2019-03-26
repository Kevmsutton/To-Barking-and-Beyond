class CreateJourneys < ActiveRecord::Migration[5.2]
  def change
    create_table :journeys do |t|
      t.string :journey_name
      t.string :addressOne
      t.string :addressTwo
      t.float :location_1_lat
      t.float :location_1_long
      t.float :location_2_lat
      t.float :location_2_long
      t.integer :user_id

      t.timestamps
    end
  end
end
