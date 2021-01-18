class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.integer :albumId
      t.string :title
      t.string :url
      t.string :thumbnailUrl

      t.timestamps
    end
  end
end
