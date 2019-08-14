class AddUserIdToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :user_id, :integer, :null=>true
  end
  def change
    change_column :tasks, :isOwner , :boolean ,default: true
   end
end
