class Project < ApplicationRecord
  has_many :collaborators
  has_many :users, :through => :collaborators
end
