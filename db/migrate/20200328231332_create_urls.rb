class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :long_url, null: false
      t.string :short_url
      t.string :slug
      t.references :user, index: true
      t.integer :clicked, default: 0

      t.timestamps null: false
    end
  end
end
