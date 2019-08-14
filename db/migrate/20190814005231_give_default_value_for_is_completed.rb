class GiveDefaultValueForIsCompleted < ActiveRecord::Migration[5.2]
  def change
    change_column :tasks, :isCompleted , :boolean ,default: false
   end
end
