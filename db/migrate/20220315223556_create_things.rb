class CreateThings < ActiveRecord::Migration[6.1]
  def change
    create_table :things do |t|
      t.string :name
      t.string :guid

      t.timestamps
    end
  end
end
