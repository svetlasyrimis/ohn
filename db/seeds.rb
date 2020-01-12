# seed data 



user1 = User.create! username: 'joseph', email: 'anyemail@will.do', password: "youarenuts"
user2 = User.create! username: 'steve', email: 'steve@gmail.com', password: "erinn5"
user3 = User.create! username: 'anamaria', email: 'ana@gmail.com', password: "svetla"
user3 = User.create! username: 'brian', email: 'brian@gmail.com', password: "brian5"
user4 = User.create! username: 'chris', email: 'chris@gmail.com', password: "chris5"
user5 = User.create! username: 'francine', email: 'francine@gmail.com', password: "francine"
user6 = User.create! username: 'alex', email: 'alexxx@gmail.com', password: "alex56"
user7 = User.create! username: 'george', email: 'george@gmail.com', password: "george"



skill = Skill.create! name: 'dancing', user_id:user1.id
skill = Skill.create! name: 'coding', user_id:user1.id
interest = Interest.create! name: 'Crossfit', user_id:user1.id
interest = Interest.create! name: '3D design', user_id:user1.id


skill = Skill.create! name: 'Video Software SDK', user_id:user2.id
skill = Skill.create! name: 'Project Management', user_id:user2.id
interest = Interest.create! name: 'Baseball', user_id:user2.id
interest = Interest.create! name: 'Medical research', user_id:user2.id

skill = Skill.create! name: 'Marketing', user_id:user3.id
skill = Skill.create! name: 'Online e-commerce platform setup', user_id:user3.id
interest = Interest.create! name: 'Mechanical engineering', user_id:user3.id
interest = Interest.create! name: 'Healthy foods', user_id:user3.id
interest = Interest.create! name: 'Nutrition', user_id:user3.id


skill = Skill.create! name: 'Video Software SDK', user_id:user4.id
skill = Skill.create! name: 'Project Management', user_id:user4.id
interest = Interest.create! name: 'Baseball', user_id:user4.id
interest = Interest.create! name: 'Medical research', user_id:user4.id

skill = Skill.create! name: '3D printing', user_id:user5.id
skill = Skill.create! name: 'Molding and Casting', user_id:user5.id
interest = Interest.create! name: 'Action figures', user_id:user5.id
interest = Interest.create! name: 'Bodybuilding', user_id:user5.id

skill = Skill.create! name: 'Video Software SDK', user_id:user6.id
skill = Skill.create! name: 'Project Management', user_id:user6.id
interest = Interest.create! name: 'Baseball', user_id:user6.id
interest = Interest.create! name: 'Medical research', user_id:user6.id