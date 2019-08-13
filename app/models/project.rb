class Project < ApplicationRecord
  has_many :collaborators, dependent: :destroy
  has_many :users, through: :collaborators
  # accepts_nested_attributes_for :collaborators 
end
