import React from "react"
import Link from "gatsby-link"
import Container from '../components/Container';
import Header from '../components/Header';

import '../css/global.css';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div
      >
        <Header />

        <Container>
          <main>
            {children()}
          </main>
        </Container>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
