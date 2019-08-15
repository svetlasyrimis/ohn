class Project < ApplicationRecord
  has_many :collaborators, dependent: :destroy
  has_many :users, through: :collaborators
  has_many :tasks, dependent: :destroy
  # accepts_nested_attributes_for :collaborators 
end
