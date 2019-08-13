class Collaborator < ApplicationRecord
  belongs_to :user
  belongs_to :project
  # change_column :isOwner, :default => true

end
