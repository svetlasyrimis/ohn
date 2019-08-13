class GiveDefaultValueForIsOwner < ActiveRecord::Migration[5.2]
  def change
    change_column :collaborators, :isOwner , :boolean ,default: true
   end
end
