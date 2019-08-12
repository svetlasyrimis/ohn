class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  
  has_many :interests
  has_many :skills
  has_many :collaborators
  has_many :projects, through: :collaborators

end
