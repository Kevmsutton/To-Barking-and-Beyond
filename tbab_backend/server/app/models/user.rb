class User < ApplicationRecord
    has_many :journeys
    has_secure_password
    validates :username, uniqueness: {case_sensitive: false}
    validates :first_name, :last_name, :email, :password, presence: true
    # validates :last_name, presence: true
    # validates :email, presence: true
    # validates :password, presence: true
end
