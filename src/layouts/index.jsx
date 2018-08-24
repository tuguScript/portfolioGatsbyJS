import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import './index.css'
import injectSheet from 'react-jss'
import Footer from '../components/Footer/Footer'
import { List, Icon } from 'antd'
import Link from 'gatsby-link'
import colors from '../utils/colors'
import 'font-awesome/css/font-awesome.min.css'

const styles = {
  container: {
    minHeight: '900px',
    color: 'white',
    // background: `url(${background}) no-repeat center center fixed`,
    backgroundSize: `cover`,
    display: 'grid',
    gridTemplateColumns: '256px auto',
    gridTemplateRows: '64px auto 64px',
    gridTemplateAreas: `
                  'sidebar header'
                  'sidebar body'
                  'sidebar footer'
                  `,
  },
  header: {
    gridArea: 'header',
  },
  body: {
    gridArea: 'body',
    background: '#1E2B41',
    padding: '0px 30px 30px 30px',
  },
  footer: {
    gridArea: `footer`,
  },
  sidebar: {
    gridArea: 'sidebar',
  },
}

const navData = [
  { desc: 'About', link: '/about', icon: 'idcard' },
  { desc: 'Works', link: '/works', icon: 'fork' },
  { desc: 'Contact', link: '/contact', icon: 'contacts' },
]

const UnstyledLayout = ({ children, data, classes }) => (
  <div className={classes.container}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className={classes.header}>
      <Header />
    </div>
    <Sidebar>
      <List
        split={false}
        size="large"
        // bordered
        dataSource={navData}
        renderItem={item => (
          <List.Item>
            <Link
              style={{ color: 'white' }}
              to={item.link}
              activeStyle={{
                fontWeight: 'bold',
                color: `${colors.PRIMARY}`,
              }}
            >
              <Icon
                type={item.icon}
                style={{ fontSize: 14, marginRight: '20px', color: 'white' }}
              />
              {item.desc}
            </Link>
          </List.Item>
        )}
      />
    </Sidebar>
    <div className={classes.body}>{children()}</div>
    <div className={classes.footer}>
      <Footer />
    </div>
  </div>
)

UnstyledLayout.propTypes = {
  children: PropTypes.func,
}

const Layout = injectSheet(styles)(UnstyledLayout)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
