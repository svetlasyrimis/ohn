# seed data 



user1 = User.create! username: 'joseph', email: 'anyemail@will.do', password: "youarenuts"
user2 = User.create! username: 'steve', email: 'steve@gmail.com', password: "erinn5"
user3 = User.create! username: 'anamaria', email: 'ana@gmail.com', password: "svetla"
user3 = User.create! username: 'brian', email: 'brian@gmail.com', password: "brian5"
user4 = User.create! username: 'chris', email: 'chris@gmail.com', password: "chris5"
user5 = User.create! username: 'francine', email: 'francine@gmail.com', password: "francine"
user6 = User.create! username: 'alex', email: 'alexxx@gmail.com', password: "alex56"
user7 = User.create! username: 'george', email: 'george@gmail.com', password: "george"


project1 = Project.create! name: 'Action Figure', description: 'Action Figure with moving muscles, to be built with durable resin and silicone'
project2 = Project.create!  name: 'Film a short video', description: 'Create a short film and promote it(Upstate NY)'
project3 = Project.create! name: 'Build a magnetic hex drive toolkit', description: 'Super compact and useful, contains all a complete screwdriver set'
project4 = Project.create! name: 'Online Food Market', description: 'A 100% Plastic Free Online Grocery Store'
project5 = Project.create! name: 'Vending machines/food', description: 'Last-minute convenience healty foods.Sustainable meals in reusable jars.'
project6 = Project.create! name: 'Carbon Fiber and Lume Watch', description: 'Glow in the dark watch.'
project7 = Project.create! name: 'Nanosuit', description: 'Building the ultimate military suit. Offer MVP to the government,exlusive rights'
project8 = Project.create! name: 'Electronic singing hammer', description: 'While building and using the hammer you get to hear nice tunes'
project9 = Project.create!  name: 'Vacuum Tube Speaker', description: 'An electronic speaker that lets you know when you have to clean the filters.'
project10 = Project.create!  name: '3D Printer', description: 'Affordable Laser SLA 3D Printer'
project11 = Project.create!  name: 'Cat vitamins', description: 'The ultimate source of vitamins that a cat needs,flavored or not.'
project12 = Project.create! name: 'Food web app', description: 'Get Fresh meals from your local deli on demand'
project13 = Project.create! name: "Interior/exterior design software tool", description: 'An app for every architecht or any amateur designer'
project14 = Project.create! name: 'Build a portable fan', description: 'A portable,compact fan, cordless'
project15 = Project.create! name: 'Doormat with detachable hexagon tiles', description: 'A Customizable Doormat displaying different message'
project16 = Project.create! name: 'Universal Wireless Phone Change', description: ' Phone Charger Android, Iphone, LG,etc. '


# user1.projects.push(project1,project2,project3)
# user2.projects.push(project4,project5,project6)
# user3.projects.push(project7,project8,project9,project16)
# user4.projects.push(project10,project11,project12)
# user5.projects.push(project13,project14,project15)


collaborator1 = Collaborator.create! user_id: user1.id, project_id: project1.id, isOwner: true 
collaborator2 = Collaborator.create! user_id: user2.id, project_id: project2.id, isOwner: true 
collaborator3 = Collaborator.create! user_id: user3.id, project_id: project3.id, isOwner: true 
collaborator4 = Collaborator.create! user_id: user4.id, project_id: project4.id, isOwner: true 
collaborator5 = Collaborator.create! user_id: user5.id, project_id: project5.id, isOwner: true 
collaborator6 = Collaborator.create! user_id: user6.id, project_id: project6.id, isOwner: true 
collaborator7 = Collaborator.create! user_id: user7.id, project_id: project7.id, isOwner: true 
collaborator8 = Collaborator.create! user_id: user5.id, project_id: project8.id, isOwner: true 
collaborator9 = Collaborator.create! user_id: user1.id, project_id: project9.id, isOwner: true 
collaborator9 = Collaborator.create! user_id: user2.id, project_id: project9.id, isOwner: false 
collaborator9 = Collaborator.create! user_id: user3.id, project_id: project9.id, isOwner: false 
collaborator9 = Collaborator.create! user_id: user4.id, project_id: project9.id, isOwner: false 
collaborator9 = Collaborator.create! user_id: user5.id, project_id: project9.id, isOwner: false 
collaborator9 = Collaborator.create! user_id: user6.id, project_id: project9.id, isOwner: false 


# task = Task.create! name: 'Casting', project_id: project.id
# task = Task.create! name: 'Molding', project_id: project.id
skill = Skill.create! name: 'dancing', user_id:user1.id
skill = Skill.create! name: 'coding', user_id:user1.id
interest = Interest.create! name: 'Crossfit', user_id:user1.id
interest = Interest.create! name: '3D design', user_id:user1.id


# task = Task.create! name: '', project_id: project.id
# task = Task.create! name: 'Design', project_id: project.id

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