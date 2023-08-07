import './index.css'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {eachItem} = this.props
    const {name, teamImageUrl} = eachItem
    return (
      <li className="list-items">
        <div className="item">
          <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
          <h1 className="team-name">{name}</h1>
        </div>
      </li>
    )
  }
}

export default TeamCard
