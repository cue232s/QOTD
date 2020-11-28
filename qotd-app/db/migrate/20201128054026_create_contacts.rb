class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :phone_number
      t.boolean :permission_requested
      t.boolean :permission_granted

      t.timestamps
    end
  end
end
