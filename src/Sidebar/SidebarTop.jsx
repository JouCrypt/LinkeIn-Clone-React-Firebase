import { Avatar } from '@material-ui/core'
import React, {Fragment} from 'react'
import './SidebarTop.css'


const SidebarTop = () => {

const recentItem =(topic) =>(
    <div className="sidebarRecentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
    </div>
);

    return (
        <Fragment>
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZwR8MXx8fGVufDB8fHw%3D&w=1000&q=80%22" alt="" />
        <Avatar className="avatar" />
        <h2>Joseph Castillo</h2>
        <h4>123josep@gmail.com</h4>
      </div>

      <div className="sidebarStats">
          <div className="sidebarStat">
              <p>Contactos</p>
              <p className="sidebarStat_number">2,564</p>
            
          </div>
          <div className="sidebarStat">
              <p>Invitaciones</p>
              <p className="sidebarStat_number">1,040</p>
          </div>
        </div>
        <div className="sidebarBottom">
              <p>Reciente</p>
              {recentItem("reactjs")}
              {recentItem("programador")}
              {recentItem("remoto")}
              {recentItem("infraestructura")}

          </div>
      </Fragment>
    );
}
 
export default SidebarTop;