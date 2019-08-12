class Project < ApplicationRecord
  has_many :collaborators
  has_many :users, through: :collaborators
  accepts_nested_attributes_for :collaborators 
end
