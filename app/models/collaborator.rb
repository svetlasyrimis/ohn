class Collaborator < ApplicationRecord

  validates_uniqueness_of :user_id, scope: :project_id

  belongs_to :user
  belongs_to :project
  
end
