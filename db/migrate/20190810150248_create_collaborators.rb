class CreateCollaborators < ActiveRecord::Migration[5.2]
  def change
    create_table :collaborators do |t|
      t.references :user, foreign_key: true
      t.references :project, foreign_key: true
      t.boolean :isOwner

      t.timestamps
    end
  end
end
