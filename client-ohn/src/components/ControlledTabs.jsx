import React from 'react'


import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'


import Skills from './SkillForm'

const ControlledTabs = (props) => {


  return (
    <div className="menu-tabs">
      <Tabs id="dash" defaultActiveKey={false} className="tabs">
        <Tab  eventKey="skills" title="Skills" >
          <Skills currentUser={props.currentUser}
              handleSubmit={props.handleCreateSkill}
              handleChange={props.handleChange}
              skills={props.skills}
              handleDelete={props.handleDeleteSkill}/>
        </Tab>
        
      </Tabs>
    </div>
  );
}

export default ControlledTabs
