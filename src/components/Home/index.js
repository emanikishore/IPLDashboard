import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(updatedData)
    this.setState = {teamsList: updatedData}
  }

  render() {
    const {teamsList} = this.state
    return (
      <div className="app-container">
        <div className="teams-container">
          <div className="title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="title">IPL DASHBOARD</h1>
          </div>
          <ul className="list-items-container">
            {teamsList.map(team => (
              <TeamCard eachItem={team} key={team.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
